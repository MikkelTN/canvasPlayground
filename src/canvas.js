import React from 'react';

class CanvasComponent extends React.Component {
  constructor () {
    super();
    this.state = {
      isDrawing: false,
      imgData: {},
      X: 0,
      Y: 0
    },
    this.handleStart = this.handleStart.bind(this),
    this.handleStop = this.handleStop.bind(this),
    this.handleMove = this.handleMove.bind(this),
    this.draw = this.draw.bind(this)
    this.line = this.line.bind(this)
  }

  componentDidMount() {
    this.ctx = this.refs.canvas.getContext('2d');
  }

  handleStart(e) {
    const x = e.nativeEvent.offsetX || e.touches[0].pageX,
          y = e.nativeEvent.offsetY || e.touches[0].pageY;
    this.setState({
      isDrawing: true,
      imgData: this.ctx.getImageData(0, 0, this.props.width, this.props.height),
      X: x,
      Y: y
    });
  }

  handleStop() {
    this.setState({isDrawing: false});
  }

  handleMove(e) {
    e.stopPropagation();
    if (!this.state.isDrawing) {
			return;
		}
    const x = e.nativeEvent.offsetX || e.touches[0].pageX,
          y = e.nativeEvent.offsetY || e.touches[0].pageY;
    this.ctx.lineWidth = this.props.size;
    this.ctx.strokeStyle = this.props.tool == 'Eraser' ? '#FFF' : this.props.color;
    this.ctx.lineJoin = 'round';
	  this.ctx.lineCap = 'round';
    switch (this.props.tool) {
      case 'Line':
        this.line(x, y);
        break;
      default:
        this.draw(x, y);
    }
  }

  line(x, y) {
    this.ctx.putImageData(this.state.imgData, 0, 0);
    this.ctx.beginPath();
    this.ctx.moveTo(this.state.X, this.state.Y);
    this.ctx.lineTo(x, y);
    this.ctx.stroke();
  }

  draw(x, y) {
	  this.ctx.beginPath();
    this.ctx.moveTo(this.state.X, this.state.Y);
    this.ctx.lineTo(x, y);
    this.ctx.stroke();
    this.setState({
      X: x,
      Y: y
    })
  }

  render() {
    return (
      <canvas
        ref="canvas"
        width={this.props.width}
        height={this.props.height}
        onMouseDown={this.handleStart}
        onMouseMove={this.handleMove}
        onMouseUp={this.handleStop}
        onMouseOut={this.handleStop}
        onTouchStart={this.handleStart}
        onTouchEnd={this.handleStop}
        onTouchMove={this.handleMove} />
    );
  }
}
module.exports = CanvasComponent;
