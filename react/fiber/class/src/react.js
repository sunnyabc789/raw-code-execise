import { ELEMENT_TEXT } from "./constants";
import { Update, UpdateQueue } from './updateQueue';
import { scheduleRoot } from './schedule';
function createElement(type, config, ...children) {
    delete config.__self;
    delete config.__source;
    return {
        type,
        props: {
            ...config,
            children: children.map(
                child => typeof child === "object" ?
                    child :
                    { type: ELEMENT_TEXT, props: { text: child, children: [] } })
        }
    }
}
class Component {
    constructor(props) {
        this.props = props;
        this.updateQueue = new UpdateQueue();
    }
    setState(payload) {
        this.internalFiber.updateQueue.enqueueUpdate(new Update(payload));
        scheduleRoot(); //这个地方都直接调度了 还搞个链表用在什么场景?
    }
}
Component.prototype.isReactComponent = true;
let React = {
    createElement,
    Component
}
export default React;