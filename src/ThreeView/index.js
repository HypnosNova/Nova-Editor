import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as NOVA from "nova-three";
import * as THREE from "three";
import store from "../store/Store";
import { Layout } from "antd";
import '../components/AssetsView/style.css';
const { Header, Sider, Content, Footer } = Layout;
export default class ThreeView extends Component {

    shouldComponentUpdate() {
        return false;
    }

    componentDidMount() {
        let parent = ReactDOM.findDOMNode(this.refs.container);

        this.app = new NOVA.App({
            parent,
            setCommonCSS: false
        });
        this.app.world.camera.position.z = 2;
        let geometry = new THREE.BoxBufferGeometry(0.2, 0.2, 0.2);
        let material = new THREE.MeshNormalMaterial();
        let mesh = new THREE.Mesh(geometry, material);
        this.app.world.scene.add(mesh);
        this.app.world.logicLoop.add(() => {
            mesh.rotation.x += 0.01;
            mesh.rotation.y += 0.02;
            this.app.resize();
        });
    }

    render() {
        return <div style={{ padding: "0!important", flex: "auto", position: "relative" }}>
            <div style={{ height: "100%", position: "absolute", width: "100%" }} ref="container"></div>
        </div>;
    }
}
