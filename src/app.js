import React from 'react';
import ReactDOM from 'react-dom';
import './app.scss';
import CanvasComponent from './canvas';
import ToolBox from './tools/toolbox';
import SizeBar from './tools/sizebar';
import ColorBox from './tools/colorbox';
import MenuButton from './menu-btn';

class SketchApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tool: 'Pencil',
      color: '#000000',
      size: 5,
      menuExpand: false
    },
    this.expandMenu = this.expandMenu.bind(this),
    this.changeSize = this.changeSize.bind(this),
    this.changeColor = this.changeColor.bind(this),
    this.changeTool = this.changeTool.bind(this)
  }

  expandMenu() {
    this.setState({
      menuExpand: !this.state.menuExpand
    })
  }

  changeTool(newTool) {
    this.setState({
      tool: newTool
    })
  }

  changeSize(newSize) {
    this.setState({
      size: newSize
    })
  }

  changeColor(newColor) {
    this.setState({
      color: newColor
    })
  }

  render() {
    let toolMenu;
    if(!this.state.menuExpand) {
      toolMenu = "toolbox hide";
    } else {
      toolMenu = "toolbox show";
    }
    return (
      <div>
        <div className="header">
          <MenuButton onClick={this.expandMenu} />
          <p>Canvas Playground!</p>
        </div>
        <div className={toolMenu} >
          <ToolBox onChange={this.changeTool}/>
          <SizeBar onChange={this.changeSize} />
          <ColorBox onChange={this.changeColor}/>
        </div>
        <CanvasComponent
          tool={this.state.tool}
          color={this.state.color}
          size={this.state.size}
          width={window.innerWidth}
          height={window.innerHeight} />
      </div>
    );
  }
}

ReactDOM.render(
  <SketchApp />,
  document.getElementById('root')
);
