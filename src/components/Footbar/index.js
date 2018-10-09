import React, { Component } from "react";
import "./style.css";
import store from "../../store/Store";
import { Layout } from "antd";
const { Footer } = Layout;

export default class Footbar extends Component {
  render() {
    return <Footer className="Footbar"> console.log(aaaa) </Footer>;
  }
}
