import React from 'react';

class ColorBox extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const color = e.target.value
    this.props.onChange(color);
  }

  render() {
    return (
      <div className="sizebar">
        <span className="toolhead">
          Line color:
        </span>
        <input
          type="color"
          onChange={this.handleChange} />
      </div>
    );
  }
}

module.exports = ColorBox;
