import React, { Component } from "react";
import PropTypes from "prop-types";
import "./style.css";
import { connect } from 'react-redux';
import { Layout } from "antd";
import IDEEditor from "./IDEEditor.js";

const { Sider } = Layout;

class EditorContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			collapse: false
		}
	}

	createEditor(type) {
		switch (type) {
			case "IDEEditor":
				return <IDEEditor />
			default:
				return <div><br /><br />None</div>
		}
	}

	onCollapse(collapse) {
		this.setState({
			collapse
		});
	}

	render() {
		return <Sider className="editorContainer" collapsible={true} reverseArrow={true} onCollapse={this.onCollapse.bind(this)}>
			<p style={{ height: "28px", marginBottom: "0" }}></p>
			<div style={{ display: this.state.collapse ? "none" : "block" }}>{
				this.createEditor(this.props.editorType)
			}</div>
		</Sider>;
	}
}

EditorContainer.propTypes = {
	editorType: PropTypes.string.isRequired
};

function mapStateToProps(state) {
	return {
		editorType: state.sideToolbar.editorType
	};
}

export default connect(mapStateToProps)(EditorContainer);
