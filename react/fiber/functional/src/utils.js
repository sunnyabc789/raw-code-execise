
export function setProps(dom, oldProps, newProps) {
    for (let key in oldProps) {

    }
    for (let key in newProps) {
        if (key !== 'children') {
            setProp(dom, key, newProps[key]);
        }
    }
}
function setProp(dom, key, value) {
    if (/^on/.test(key)) {//onClick
        dom[key.toLowerCase()] = value;//没有用合成事件
    } else if (key === 'style') {
        if (value) {
            for (let styleName in value) {
                dom.style[styleName] = value[styleName];
            }
        }
    } else {
        dom.setAttribute(key, value);
    }
}



export function deepEquals(obj1, obj2) {
  let { children: oldChildren, ...oldProps } = obj1;
  let { children: newChildren, ...newProps } = obj2;
  return JSON.stringify(oldProps) === JSON.stringify(newProps);
}