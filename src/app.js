import React from 'react';
import ReactDOM from 'react-dom';
import './app.scss';
import CanvasComponent from './canvas';
import ToolBox from './tools/toolbox';
import SizeBar from './tools/sizebar';
import ColorBox from './tools/colorbox';

class SketchApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tool: 'brush',
      color: '#000000',
      size: 5
    },
    this.changeSize = this.changeSize.bind(this),
    this.changeColor = this.changeColor.bind(this),
    this.changeTool = this.changeTool.bind(this)
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
    return (
      <div>
        <div className="toolbox">
          <ToolBox tools={['Brush', 'Line', 'Eraser']} onChange={this.changeTool}/>
          <SizeBar onChange={this.changeSize} />
          <ColorBox onChange={this.changeColor}/>
        </div>
        <CanvasComponent
          tool={this.state.tool}
          color={this.state.color}
          size={this.state.size} />
      </div>
    );
  }
}

ReactDOM.render(
  <SketchApp />,
  document.getElementById('root')
);
