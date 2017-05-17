import React from 'react';

class CanvasComponent extends React.Component {
  constructor () {
    super();
    this.state = {
      isDrawing: false,
      X: 0,
      Y: 0
    },
    this.handleStart = this.handleStart.bind(this),
    this.handleStop = this.handleStop.bind(this),
    this.handleDraw = this.handleDraw.bind(this),
    this.handleStartTouch = this.handleStartTouch.bind(this),
    this.handleDrawTouch = this.handleDrawTouch.bind(this)
  }

  componentDidMount() {
    this.ctx = this.refs.canvas.getContext('2d');
    this.ctx.lineJoin = 'round';
	  this.ctx.lineCap = 'round';
  }

  componentDidUpdate() {
    this.ctx.lineWidth = this.props.size;
    this.ctx.strokeStyle = this.props.color;
  }

  handleStart(e) {
    this.setState({
      isDrawing: true,
      X: e.nativeEvent.offsetX,
      Y: e.nativeEvent.offsetY
    });
    console.log(this.state.X);
  }

  handleStop() {
    this.setState({isDrawing: false});
  }

  handleDraw(e) {
    if (!this.state.isDrawing) {
			return;
		}
	  this.ctx.beginPath();
	  this.ctx.moveTo(this.state.X, this.state.Y);
	  this.ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    this.ctx.stroke();
    this.setState({
      X: e.nativeEvent.offsetX,
      Y: e.nativeEvent.offsetY,
    })
  }

  handleStartTouch(e) {
    this.setState({
      isDrawing: true,
      X: e.touches[0].pageX,
      Y: e.touches[0].pageY
    });
  }

  handleDrawTouch(e) {
    if (!this.state.isDrawing) {
			return;
		}
	  this.ctx.beginPath();
	  this.ctx.moveTo(this.state.X, this.state.Y);
	  this.ctx.lineTo(e.touches[0].pageX, e.touches[0].pageY);
    this.ctx.stroke();
    this.setState({
      X: e.touches[0].pageX,
      Y: e.touches[0].pageY,
    })
  }

  render() {
    return (
      <canvas
        ref="canvas"
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseDown={this.handleStart}
        onMouseMove={this.handleDraw}
        onMouseUp={this.handleStop}
        onMouseOut={this.handleStop}
        onTouchStart={this.handleStartTouch}
        onTouchEnd={this.handleStop}
        onTouchMove={this.handleDrawTouch} />
    );
  }
}
module.exports = CanvasComponent;
