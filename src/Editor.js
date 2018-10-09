import React, { Component } from "react";
import "./Editor.css";
import { Provider } from "react-redux";
import store from "./store/Store";
import AssetsView from "./components/AssetsView";
import { Layout } from "antd";
import SideToolbar from "./components/SideToolbar";
import ObjectTreeView from "./components/ObjectTreeView";
import Footbar from "./components/Footbar";
import ReactDOM from "react-dom";
import ThreeView from "./ThreeView";
import * as NOVA from "nova-three";
import * as THREE from "three";
import EditorContainer from "./components/Editor/EditorContainer";
import './components/ObjectTreeView/style.css';
const { Header, Sider, Content, Footer } = Layout;

export default class Editor extends Component {
  render() {
    return (
      <Provider store={store}>
        <Layout>
          <SideToolbar>Sider</SideToolbar>
          <Layout>
            <Content>
              <Layout>
                <ObjectTreeView></ObjectTreeView>
                <Content>
                  <Layout style={{ height: "100%" }}>
                    <ThreeView />
                    <AssetsView>Footer</AssetsView>
                  </Layout>
                </Content>
                <EditorContainer/>
              </Layout>
            </Content>
            <Footbar />
          </Layout>
        </Layout >
      </Provider >
    );
  }
}
