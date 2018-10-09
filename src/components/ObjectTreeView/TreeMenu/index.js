import React, { Component } from "react";
import "./style.css";
import { Menu, Icon } from "antd";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import LANGUAGE from '../../../store/Language';

class TreeMenu extends Component {
	constructor(props) {
		super(props);
	}

	handleMenuClick(e) {
		console.log("Click on menu item.");
		console.log("click", e);
	}

	render() {
		return (
			<Menu className="treeMenu" onClick={this.handleMenuClick.bind(this)}>
				<Menu.Item key="1">
					<Icon type="plus-square" />{LANGUAGE.ADD[this.props.language]}
				</Menu.Item>
			</Menu>
		);
	}
}

TreeMenu.propTypes = {
	language: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
	return {
		language: state.editor.language
	}
}

export default connect(mapStateToProps)(TreeMenu);
