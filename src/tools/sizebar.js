import React from 'react';

class SizeBar extends React.Component {
  constructor() {
    super();
    this.state = {
      size: 5
    },
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const size = e.target.value
    this.setState({
      size: size
    });
    this.props.onChange(size);
  }

  render() {
    return (
      <div className="sizebar">
        <p className="toolhead">
          Line size: <span> {this.state.size}px</span>
        </p>
        <input
          type="range"
          min="1"
          max="50"
          value={this.state.size}
          onChange={this.handleChange} />
      </div>
    );
  }
}

module.exports = SizeBar;
