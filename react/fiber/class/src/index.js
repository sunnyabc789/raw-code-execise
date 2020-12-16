import React from 'react';
import ReactDOM from 'react-dom';
// class ClassCounter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { number: 0 };
//   }
//   onClick = () => {
//     this.setState(state => ({ number: state.number +  1 }));
//   }
//   render() {
//     return (
//       <div id="counter">
//         <span>{this.state.number}</span>
//         <button onClick={this.onClick}>加1</button>
//       </div >
//     )
//   }
// }
// ReactDOM.render(
//   <ClassCounter />,
//   document.getElementById('root')
// );

function Num() {
  return <div>2</div>
}

class Test extends React.Component {
  state = { val: 0 };

  // componentWillMount() {
  //   this.setState({ val: this.state.val + 1})
  //   console.log(this.state.val);

  //     this.setState({ val: this.state.val + 1 });
  //     console.log(this.state.val);
  // }
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log(nextProps, "here3===");
  //   return null;
  // }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('here4===');
  //   return true;
  // }
  componentDidMount() {
    // this.setState({ val: this.state.val + 1 });
    // console.log(this.state.val);

    // this.setState({ val: this.state.val + 1 });
    // console.log(this.state.val);

    new Promise((res, rej) => {
      res(1);
    }).then((data) => {
      // 合成事件和componentDidMount里触发的setState 的isBatchingUpdate都是true
      // 当React的组件还没有渲染完成的时候，isRendering是为true的 requestWork函数会返回false
      // 但异步的话 isBatchingUpdate已被重置 是false
      // 在生命周期结束的时候会检查更新队列中是否存在更新，如果队列有setState的任务，将会进行合并结果，然后触发diff，再次触发render
      // 在合成事件中修改了isBatchingUpdates为true。所以setState会是异步。
      this.setState({
        val: this.state.val + data,
      });
      console.log(this.state.val);
      this.setState({
        val: this.state.val + data,
      });
      console.log(this.state.val);
    });
    // setTimeout(() => {
    //   this.setState({ val: this.state.val + 1 });
    //   console.log(this.state.val);

    //   this.setState({ val: this.state.val + 1 });
    //   console.log(this.state.val);
    // }, 1000);
  }

  async fetch() {}

  render() {
    return (
      <div onClick={() => this.setState({ val: this.state.val + 1 })}>
        {this.state.val}
      </div>
    );
  }
}

// function App() {
//   console.log('here0===');
//   return (
//     <div>
//       <div>0</div>
//       <Test />
//     </div>
//   );
// }

class App extends React.Component {
  state = {
    number: 1,
    flag: true
  };
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps, "here===");
    return null;
  }
  // shouldComponentUpdate() {
  //   console.log("here2===");
  //   return true;
  // }
  setNumber = () => {
    this.setState({ number: this.state.number + 1, flag: !this.state.flag });
  };
  render() {
    return (
      <div>
        <div onClick={this.setNumber} key={"3"}>
          {this.state.number}
        </div>
        <Test key={"2"} />
        <Num key={"1"} />
        {this.state.flag ? (
          <ul key="j">
            <li key="a">a</li>
            <li key="b">b</li>
            <li key="c">c</li>
          </ul>
        ) : (
          <ul key="j">
            <li key="a">e</li>
            <li key="b">f</li>
            <li key="d">g</li>
          </ul>
        )}
      </div>
    );
  }
}
// ReactDom.render(<App />, document.getElementById("container"));
ReactDOM.render(<App />, document.getElementById("root"));