import React, { Component } from "react";

interface I_State {
  date: Date;
}

class ClassComponent extends Component {
  public timer!: NodeJS.Timeout;
  public state!: I_State;

  constructor(props: any) {
    super(props);

    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    let { date } = this.state;
    return (
      <div>
        <h3>ClassComponent</h3>
        <p>{date.toLocaleTimeString()}</p>
      </div>
    );
  }
}
export default ClassComponent;
