import React, { Component } from "react";
import PropTypes from "prop-types";
import "./style.css";
import * as Actions from './Actions';
import { connect } from 'react-redux';
import { Button, Layout, Tooltip } from "antd";
import LANGUAGE from '../../store/Language';
import LogoIcon from "./LogoIcon";
const { Sider } = Layout;

class SideToolbar extends Component {
	render() {
		return (
			<Sider className="sideToolbar">
				<Tooltip placement="right" title={LANGUAGE.MENU[this.props.language]}>
					<Button type="primary" className="icon logo settingIcon" onClick={() => { this.props.onShowEditor("MenuEditor") }}><LogoIcon style={{ fill: "white" }} /></Button>
				</Tooltip>
				<Tooltip placement="right" title={LANGUAGE.SETTING[this.props.language]}>
					<Button type="primary" icon="setting" className="icon settingIcon bottomBtn" onClick={() => { this.props.onShowEditor("IDEEditor") }} />
				</Tooltip>
			</Sider>
		);
	}
}

SideToolbar.propTypes = {
	sideToolbar: PropTypes.object.isRequired,
	onShowEditor: PropTypes.func.isRequired,
	language: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
	return {
		sideToolbar: state.sideToolbar,
		language: state.editor.language
	}
}

function mapDispatchToProps(dispatch, ownProps) {
	return {
		onShowEditor: (str) => {
			dispatch(Actions.showEditor(str));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SideToolbar);