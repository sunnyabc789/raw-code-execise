/**
 * 关键点
 * 1. new promise 一经创建，立即执行
 * 2. 使用 Promise.resolve().then 可以把任务加到微任务队列，防止立即执行迭代方法
 * 3. 微任务处理过程中，产生的新的微任务，会在同一事件循环内，追加到微任务队列里
 * 4. 使用 race 在某个任务完成时，继续添加任务，保持任务按照最大并发数进行执行
 * 5. 任务完成后，需要从 doingTasks 中移出
 */
function limit(count, array, iterateFunc) {
  const tasks = [];
  const doingTasks = [];
  let i = 0;
  const enqueue = () => {
    if (i === array.length) {
      return Promise.resolve();
    }
    const task = Promise.resolve().then(() => iterateFunc(array[i++]));
    tasks.push(task);
    const doing = task.then(() =>
      doingTasks.splice(doingTasks.indexOf(doing), 1)
    );
    doingTasks.push(doing);
    const res =
      doingTasks.length >= count ? Promise.race(doingTasks) : Promise.resolve();
    return res.then(enqueue);
  };
  return enqueue().then(() => Promise.all(tasks));
}

// test
const timeout = (i) =>
  new Promise((resolve) => setTimeout(() => resolve(i), i));
limit(2, [1000, 1000, 1000, 1000], timeout).then((res) => {
  console.log(res);
});


export default class Scheduler {
  constructor(count) {
      this.count = count
      this.doingTasks = []
      this.tasks = []
  }

  doTask(array, iterateFunc) {
      let i = 0;
      const enqueue = () => {
        if (i === array.length) {
          return Promise.resolve();
        }
        const task = Promise.resolve().then(() => iterateFunc(array[i++]));
        this.tasks.push(task);
        const doing = task.then(() =>
          this.doingTasks.splice(this.doingTasks.indexOf(doing), 1)
        );
        this.doingTasks.push(doing);
        const res =
          this.doingTasks.length >= this.count ? Promise.race(this.doingTasks) : Promise.resolve();
        return res.then(enqueue);
      };
      return enqueue().then(() => Promise.all(this.tasks));
  }
}

export function getInstance(count = 5) {
  return new Scheduler(count)
}






export default class Scheduler {
  constructor(count) {
    this.funcs = []; //待执行的任务
    this.doingFuncs = []; //正在执行的任务
    this.maxFunNum = count;  //最大执行任务数
  }

  add(task) {
    if (this.doingFuncs.length < this.maxFunNum) {
      this.run(task);
    } else {
      this.funcs.push(task);
    }
  }

  run(task) {
    let arrayLength = this.doingFuncs.push(task);
    let index = arrayLength - 1;
    task[0](task[1]).then(() => {
      this.doingFuncs.splice(index, 1);
      if (this.funcs.length > 0) {
        this.run(this.funcs.shift());
      }
    })
  }

  addTask(taskList, func) {
      taskList.map(i => {
          this.add([func, i])
      })
  }
}

export function getInstance(count = 5) {
  return new Scheduler(count)
}
