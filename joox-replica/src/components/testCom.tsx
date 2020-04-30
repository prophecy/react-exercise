import * as React from "react";
import { Component } from "react";

export interface TestComProps {}

export interface TestComState {}

class TestCom extends React.Component<TestComProps, TestComState> {
  state = { first: String };
  render() {
    return <h1 className="test">Hello, TS for my project!</h1>;
  }
}

export default TestCom;
