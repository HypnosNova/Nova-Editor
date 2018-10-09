import React, { Component } from "react";
import "./style.css";
import store from "../../store/Store";
import { Layout } from "antd";
const { Footer } = Layout;

export default class AssetsView extends Component {
  render() {
    return <Footer className="AssetsView"> Assets view </Footer>;
  }
}
