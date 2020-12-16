export class Update {
  constructor(payload) {
      this.payload = payload;
  }
}
export class UpdateQueue {
  constructor() {
    this.firstUpdate = null;
    this.lastUpdate = null;
    this.cbQueue = []
  }
  enqueueCb(cb) {
    this.cbQueue.push(cb)
  }
  enqueueUpdate(update) {
    if (this.lastUpdate === null) {
      this.firstUpdate = this.lastUpdate = update;
    } else {
      this.lastUpdate.nextUpdate = update;
      this.lastUpdate = update;
    }
  }
  forceUpdate(state) {
    let currentUpdate = this.firstUpdate;
    while (currentUpdate) {
      state =
        typeof currentUpdate.payload == "function"
          ? currentUpdate.payload(state)
          : currentUpdate.payload;
      currentUpdate = currentUpdate.nextUpdate;
    }
    this.firstUpdate = this.lastUpdate = null;
    // cb循环 
    this.cbQueue = []
    return state;
  }
}