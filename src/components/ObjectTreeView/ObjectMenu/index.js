import React, { Component } from "react";
import "./style.css";
import { Menu, Icon } from "antd";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import LANGUAGE from '../../../store/Language';

class ObjectMenu extends Component {
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
					<Icon type="edit" />{LANGUAGE.EDIT[this.props.language]}
       			</Menu.Item>
				<Menu.Item key="2">
					<Icon type="close" />{LANGUAGE.DISABLE[this.props.language]}
        		</Menu.Item>
				<Menu.Item key="3">
					<Icon type="delete" />{LANGUAGE.DELETE[this.props.language]}
        		</Menu.Item>
			</Menu>
		);
	}
}

ObjectMenu.propTypes = {
	language: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
	return {
		language: state.editor.language
	}
}

export default connect(mapStateToProps)(ObjectMenu);