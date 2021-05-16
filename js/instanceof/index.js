function isInstanceOf(instance, klass) {
  let proto = instance.__proto__;
  let prototype = klass.prototype;
  while (true) {
    if (proto === null) return false;
    if (proto === prototype) return true;
    proto = proto.__proto__;
  }
}

// 测试
class Parent {}
class Child extends Parent {}
const child = new Child();
console.log(
  isInstanceOf(child, Parent),
  isInstanceOf(child, Child),
  isInstanceOf(child, Array)
);
