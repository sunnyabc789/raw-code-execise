import { setProps,deepEquals } from './utils';
import { UpdateQueue } from './updateQueue';
import _ from 'lodash';
import {
   ELEMENT_TEXT, TAG_ROOT, TAG_HOST, TAG_TEXT, TAG_CLASS, PLACEMENT, DELETION, UPDATE
} from './constants';
let currentRoot = null;        //当前的根Fiber
let workInProgressRoot = null; //正在渲染中的根Fiber
let nextUnitOfWork = null;     //下一个工作单元
let deletions = [];            //要删除的fiber节点

export function scheduleRoot(rootFiber) {
   if (currentRoot && currentRoot.alternate) {
       workInProgressRoot = currentRoot.alternate;
       workInProgressRoot.alternate = currentRoot;
       if (rootFiber) {
           workInProgressRoot.props = rootFiber.props;
       }
   } else if (currentRoot) {
       if (rootFiber) {
           rootFiber.alternate = currentRoot;
           workInProgressRoot = rootFiber;
       } else {
           workInProgressRoot = {
               ...currentRoot,
               alternate: currentRoot
           }
       }
   } else {
       workInProgressRoot = rootFiber;
   }
   workInProgressRoot.firstEffect = workInProgressRoot.lastEffect = workInProgressRoot.nextEffect = null;
   nextUnitOfWork = workInProgressRoot;
}

function commitRoot() {
    deletions.forEach(commitWork);
    let currentFiber = workInProgressRoot.firstEffect;
    while (currentFiber) {
        commitWork(currentFiber);
        currentFiber = currentFiber.nextEffect;
    }
    deletions.length = 0;//先把要删除的节点清空掉
  workInProgressRoot.firstEffect = workInProgressRoot.lastEffect = null;//清除effect list
    currentRoot = workInProgressRoot;
    workInProgressRoot = null;
}
function commitWork(currentFiber) {
    if (!currentFiber) {
       return;
   }
    let returnFiber = currentFiber.return;//先获取父Fiber
   while (returnFiber.tag !== TAG_HOST && returnFiber.tag !== TAG_ROOT && returnFiber.tag !== TAG_TEXT) {//如果不是DOM节点就一直向上找,比如ClassCounter
       returnFiber = returnFiber.return;
   }
    const domReturn = returnFiber.stateNode;//获取父的DOM节点
    if (currentFiber.effectTag === PLACEMENT && currentFiber.stateNode != null) {//如果是新增DOM节点
       let nextFiber = currentFiber;
       while (nextFiber.tag !== TAG_HOST && nextFiber.tag !== TAG_TEXT) {
           nextFiber = nextFiber.child;//必须向下找到一个DOM节点 比如Class Counter
       }
        domReturn.appendChild(nextFiber.stateNode);
    } else if (currentFiber.effectTag === DELETION) {//如果是删除则删除并返回
       commitDeletion(currentFiber, domReturn);
    } else if (currentFiber.effectTag === UPDATE && currentFiber.stateNode != null) {//如果是更新
        if (currentFiber.type === ELEMENT_TEXT) {
            if (currentFiber.alternate.props.text !== currentFiber.props.text) {
                currentFiber.stateNode.textContent = currentFiber.props.text;
            }
        } else {
            updateDOM(currentFiber.stateNode, currentFiber.alternate.props, currentFiber.props);
        }
    }
    currentFiber.effectTag = null;
}
function commitDeletion(currentFiber, domReturn) {
   if (currentFiber.tag === TAG_HOST || currentFiber.tag === TAG_TEXT) {
       domReturn.removeChild(currentFiber.stateNode);
   } else {
       commitDeletion(currentFiber.child, domReturn);
   }
}
function performUnitOfWork(currentFiber) {
    beginWork(currentFiber);//开始渲染前的Fiber,就是把子元素变成子fiber

    if (currentFiber.child) {//如果子节点就返回第一个子节点
        return currentFiber.child;
    }

    while (currentFiber) {//如果没有子节点说明当前节点已经完成了渲染工作
        completeUnitOfWork(currentFiber);//可以结束此fiber的渲染了 
        if (currentFiber.sibling) {//如果它有弟弟就返回弟弟
            return currentFiber.sibling;
        }
        currentFiber = currentFiber.return;//如果没有弟弟让爸爸完成，然后找叔叔
    }
}

function beginWork(currentFiber) {
    if (currentFiber.tag === TAG_ROOT) {//如果是根节点
        updateHostRoot(currentFiber);
    } else if (currentFiber.tag === TAG_TEXT) {//如果是原生文本节点
        updateHostText(currentFiber);
    } else if (currentFiber.tag === TAG_HOST) {//如果是原生DOM节点
        updateHostComponent(currentFiber);
   } else if (currentFiber.tag === TAG_CLASS) {//如果是类组件
       updateClassComponent(currentFiber)
   }
}
function updateClassComponent(currentFiber) {
   if (currentFiber.stateNode === null) {
       currentFiber.stateNode = new currentFiber.type(currentFiber.props);
       currentFiber.stateNode.internalFiber = currentFiber;
       currentFiber.updateQueue = new UpdateQueue();
   }
   currentFiber.stateNode.state = currentFiber.updateQueue.forceUpdate(currentFiber.stateNode.state);
   const newChildren = [currentFiber.stateNode.render()];
   reconcileChildren(currentFiber, newChildren);
}
function updateHostText(currentFiber) {
    if (!currentFiber.stateNode) {
        currentFiber.stateNode = createDOM(currentFiber);//先创建真实的DOM节点
    }
}
function updateHostRoot(currentFiber) {//如果是根节点
    const newChildren = currentFiber.props.children;//直接渲染子节点
    reconcileChildren(currentFiber, newChildren);
}

function updateHostComponent(currentFiber) {//如果是原生DOM节点
    if (!currentFiber.stateNode) {
        currentFiber.stateNode = createDOM(currentFiber);//先创建真实的DOM节点
    }
    const newChildren = currentFiber.props.children;
    reconcileChildren(currentFiber, newChildren);
}
function createDOM(currentFiber) {
    if (currentFiber.type === ELEMENT_TEXT) {
        return document.createTextNode(currentFiber.props.text);
    }
    const stateNode = document.createElement(currentFiber.type);
    updateDOM(stateNode, {}, currentFiber.props);
    return stateNode;
}

function reconcileChildren(currentFiber, newChildren) {
    let newChildIndex = 0;//新虚拟DOM数组中的索引
    let oldFiber = currentFiber.alternate && currentFiber.alternate.child;//父Fiber中的第一个子Fiber
  if (oldFiber) oldFiber.firstEffect = oldFiber.lastEffect = oldFiber.nextEffect = null;
    let prevSibling;
    while (newChildIndex < newChildren.length || oldFiber) {
        const newChild = newChildren[newChildIndex];
        let newFiber;
        const sameType = oldFiber && newChild && newChild.type === oldFiber.type;//新旧都有，并且元素类型一样
        let tag;
       if (newChild && typeof newChild.type === 'function' && newChild.type.prototype.isReactComponent) {
           tag = TAG_CLASS;//类组件
       } else if (newChild && newChild.type === ELEMENT_TEXT) {
            tag = TAG_TEXT;//文本
        } else if (newChild && typeof newChild.type === 'string') {
            tag = TAG_HOST;//原生DOM组件
        }
        if (sameType) {
           let { children: oldChildren, ...oldProps } = oldFiber.props;
           let { children: newChildren, ...newProps } = newChild.props;
           newFiber = {
               tag,//标记Fiber类型，例如是函数组件或者原生组件
               type: oldFiber.type,//具体的元素类型
               props: newChild.props,//新的属性对象
               stateNode: oldFiber.stateNode,//原生组件的话就存放DOM节点，类组件的话是类组件实例，函数组件的话为空，因为没有实例
               return: currentFiber,//父Fiber
               updateQueue: oldFiber.updateQueue || new UpdateQueue(),
               alternate: oldFiber,//上一个Fiber 指向旧树中的节点
               effectTag: deepEquals(oldProps, newProps) ? null : UPDATE,//副作用标识
           }
        } else {
            if (newChild) {//类型不一样，创建新的Fiber,旧的不复用了
                newFiber = {
                    tag,//原生DOM组件
                    type: newChild.type,//具体的元素类型
                    props: newChild.props,//新的属性对象
                    stateNode: null,//stateNode肯定是空的
                    return: currentFiber,//父Fiber
                    effectTag: PLACEMENT//副作用标识
                }
            }
            if (oldFiber) {
                oldFiber.effectTag = DELETION;
                deletions.push(oldFiber);
            }
        }
        if (oldFiber) {  //比较完一个元素了，老Fiber向后移动1位
            oldFiber = oldFiber.sibling;
        }
       if (newFiber) {
            if (newChildIndex === 0) {
                currentFiber.child = newFiber;//第一个子节点挂到父节点的child属性上
            } else {
                prevSibling.sibling = newFiber;
            }
            prevSibling = newFiber;//然后newFiber变成了上一个哥哥了
        }
        newChildIndex++;
    }
}

function updateDOM(stateNode, oldProps, newProps) {
    setProps(stateNode, oldProps, newProps);
}
function completeUnitOfWork(currentFiber) {
    const returnFiber = currentFiber.return;
    if (returnFiber) {
        if (!returnFiber.firstEffect) {
            returnFiber.firstEffect = currentFiber.firstEffect;
        }
        if (!!currentFiber.lastEffect) {
            if (!!returnFiber.lastEffect) {
                returnFiber.lastEffect.nextEffect = currentFiber.firstEffect;
            }
            returnFiber.lastEffect = currentFiber.lastEffect;
        }

        const effectTag = currentFiber.effectTag;
        if (effectTag) {
            if (!!returnFiber.lastEffect) {
                returnFiber.lastEffect.nextEffect = currentFiber;
            } else {
                returnFiber.firstEffect = currentFiber;
            }
            returnFiber.lastEffect = currentFiber;
        }
    }
}

function workLoop(deadline) {
    let shouldYield = false;
    while (nextUnitOfWork && !shouldYield) {
        nextUnitOfWork = performUnitOfWork(nextUnitOfWork);//执行一个任务并返回下一个任务
        shouldYield = deadline.timeRemaining() < 1;//如果剩余时间小于1毫秒就说明没有时间了，需要把控制权让给浏览器
    }
    //如果没有下一个执行单元了，并且当前渲染树存在，则进行提交阶段
    if (!nextUnitOfWork && workInProgressRoot) {
        commitRoot();
    }
    requestIdleCallback(workLoop);
}
//开始在空闲时间执行workLoop
requestIdleCallback(workLoop);