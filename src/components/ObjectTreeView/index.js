import React, { Component } from "react";
import "./style.css";
import { Tree, Layout, Icon } from "antd";
import CubeIcon from "./svgComponents/CubeIcon";
import GroupIcon from "./svgComponents/GroupIcon";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import TreeMenu from "./TreeMenu";
import ObjectMenu from "./ObjectMenu";
import '../Footbar/style.css';
import '../SideToolbar/style.css';
const { TreeNode, DirectoryTree } = Tree;
const Sider = Layout.Sider;

export default class ObjectTreeView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			collapse: false,
			menuTyoe: "default"
		};
	}

	menuRightClick(e) {
		console.log(e)
		this
	}

	onSelect() {
		console.log("Trigger Select");
	}

	onExpand() {
		console.log("Trigger Expand");
	}

	onDragEnd(events) {
		console.log(events)
	}

	onCollapse(collapse) {
		this.setState({
			collapse
		});
	}

	render() {
		return (
			<ContextMenuTrigger id="sideContextMenu" holdToDisplay={-1} collapsedWidth={50}>
				<Sider className="tree" collapsible={true}
					onCollapse={this.onCollapse.bind(this)}>
					<p style={{ height: "21px", marginBottom: "0" }}></p>

					<ContextMenuTrigger id="inner" holdToDisplay={-1} collapsedWidth={50}>
						<DirectoryTree
							multiple
							defaultExpandAll
							draggable={true}
							onDragEnd={this.onDragEnd}
							onSelect={this.onSelect}
							onExpand={this.onExpand}
							onRightClick={this.menuRightClick.bind(this)}
							className={this.state.collapse ? "treeCollapse" : "treeExpend"}
						>
							<TreeNode title="Scene" key="0-0">
								<TreeNode title="Camera" key="0-0-0" isLeaf icon={<Icon type="camera" />} />
								<TreeNode title="Light" key="0-0-1" isLeaf icon={<Icon type="bulb" />} />
								<TreeNode title="Box" key="0-0-2" isLeaf icon={<CubeIcon />} />
								<TreeNode title="Group" key="0-0-3" isLeaf icon={<GroupIcon />}>
									<TreeNode title="Box" key="0-0-3-0" isLeaf icon={<CubeIcon />} />
									<TreeNode
										title="Box"
										key="0-0-3-1"
										isLeaf
										icon={<CubeIcon />}
									/>
								</TreeNode>
							</TreeNode>
						</DirectoryTree>
					</ContextMenuTrigger>
				</Sider>
				<ContextMenu id="sideContextMenu" style={{ zIndex: 2 }}>
					<TreeMenu />
				</ContextMenu>
				<ContextMenu id="inner">
					<ObjectMenu />
				</ContextMenu>
			</ContextMenuTrigger>
		);
	}
}
