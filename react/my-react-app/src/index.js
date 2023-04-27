import React from 'react';
import ReactDOM from 'react-dom/client';

const firstElement = <h1>Hello React!</h1>
const anElement = <h1>JSX</h1>
const carColor = <Car color="Gray" />

class CarClass extends React.Component {
  render() {
    return <h2>This is a car</h2>;
  }
} //class component example

function Car(props) {
  return <h2>Vroom vroom! {props.color} Car!</h2>
} //function component

function Garage() {
  return (
    <>
      <h1>What's in the garage?</h1>
      <Car carColor="Gray"/>
    </>
  );
}

class CanBe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {colorchange: "red"};
  }

  //static getDerivedStateFromProps(props, state) {
    //return {colorchange: props.difcolor };
  //}

  shouldComponentUpdate() {
    return true;
  }

  //componentDidMount() {
    //setTimeout(() => {
      //this.setState({colorchange: "yellow"})
    //}, 1000)
  //}
  //getSnapshotBeforeUpdate(prevProps, prevState) {
    //document.getElementById("div1").innerHTML =
    //"Before update, the color was " + prevState.colorchange;
  //}
  //componentDidUpdate() {
    //document.getElementById("div2").innerHTML =
    //"The current color is " + this.state.colorchange;
  //}

  colorSwap = () => {
    this.setState({colorchange: "orange"});
  }
  //not needed for snapshot

  render() {
    return (
      <div>
        <h1> I can be {this.state.colorchange}</h1>
        <button type='button' onClick={this.colorSwap}>Change color</button>
        <div id='div1'></div>
        <div id='div2'></div>
      </div>
    );
  }
}

class Destruction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show: true};
  }
  delRemoveable = () => {
    this.setState({show: false});
  }
  render() {
    let myheader;
    if (this.state.show) {
      myheader = <Removeable />;
    };
    return (
      <div>
        {myheader}
        <button type='button' onClick={this.delRemoveable}>Remove</button>
      </div>
    );
  }
}

class Removeable extends React.Component {
  componentWillUnmount() {
    alert("You will remove this.");
  }
  render() {
    return (
      <h1>It's expendable.</h1>
    );
  }
}

//events example
function Throw() {
  const toss = (a) => {
    alert(a); //b rep react event that triggered the event, the click event
  }
  return (
    <button onClick={() => toss("You Threw It.")}>Toss Me.</button>
  );
}

//bind method example
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numOfClicks: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log('From handleClick()', this);
    this.setState({numOfClicks: this.state.numOfClicks + 1});
  }
  render() {
    console.log('From render()', this);
    return (
      <div>
        <button onClick={this.handleClick}>Click Me!</button>
        <p>Number of times clicked = {this.state.numOfClicks}</p>
      </div>
    )
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<CanBe colorSwap="yellow"/>,
  //<Destruction />
  //<App/>
  <Throw/>
  //firstElement,
  //anElement,
  //<Car color="green"/> //renders function in model/dom/view etc
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
