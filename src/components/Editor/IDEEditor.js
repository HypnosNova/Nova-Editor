import React, { Component } from "react";
import "./style.css";
import { Collapse, Select, Row, Col } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as Actions from "./Actions";
import LANGUAGE from '../../store/Language';
const Option = Select.Option;
const Panel = Collapse.Panel;

class IDEEditor extends Component {


	render() {
		return <Collapse defaultActiveKey={['1']} className="editorItems">
			<Panel header={LANGUAGE.GLOBAL_SETTINGS[this.props.language]} key="1">
				<Row>
					<Col className="itemLine" span={8}>{LANGUAGE.LANGUAGE[this.props.language]}</Col>
					<Col className="itemLine" span={16}><Select defaultValue="zh" style={{ width: "100%" }} onChange={(str) => { this.props.changeLanguage(str) }}>
						<Option value="zh">简体中文</Option>
						<Option value="en">English</Option>
					</Select></Col>
				</Row>
				<Row>
					<Col className="itemLine" span={8}>col-12</Col>
					<Col className="itemLine" span={16}>dfsdfdfg</Col>
				</Row>
			</Panel>
			<Panel header="This is panel header 2" key="2">
				<p>bbb</p>
			</Panel>
			<Panel header="This is panel header 3" key="3">
				<p>nnn</p>
			</Panel>
		</Collapse>;
	}
}

IDEEditor.propTypes = {
	language: PropTypes.string.isRequired,
	changeLanguage: PropTypes.func.isRequired
};

function mapStateToProps(state) {
	return {
		language: state.editor.language,
		changeLanguage: PropTypes.func.isRequired
	};
}

function mapDispatchToProps(dispatch) {
	return {
		changeLanguage: (str) => {
			dispatch(Actions.changeLanguage(str));
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(IDEEditor);