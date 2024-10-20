import React, { Component } from "react";
import "./Kadane.css";
import Gap from "./Gap";
import calcKadane from "./algo";
import extractNumbers from "./export_numbers";

class KadaneUI extends Component {
  constructor(props) {
    super(props);
    this.state = { error: false, done: false, input: "" };
  }
  render() {
    return (
      <div>
        <div className="formBox">
          <form>
            <Gap height="16px" />
            <h1>Kadane Calaculator</h1>
            <Gap height="32px" />
            <div className="inputBox">
              <input
                placeholder="The sequence"
                onChange={(val) => {
                  this.setState({ input: val.target.value, done: false });
                }}
              />
            </div>
          </form>
          <Gap height="32px" />
          <button
            onClick={(event) => {
              console.log(extractNumbers(this.state.input));
              if (extractNumbers(this.state.input).length === 0) {
                this.setState({ done: false });
                alert("Not valid numbers !");
              } else {
                this.setState({ done: true });
              }
            }}
          >
            Calculate
          </button>
          <Gap height="16px" />
        </div>
        {this.state["done"] ? (
          <div>
            <Gap height="16px" />
            <div className="resultBox">
              Kadane result = {calcKadane(extractNumbers(this.state.input))}
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default KadaneUI;
