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
        <h3 className="toolhead">
          Line size: {this.state.size}
        </h3>
        <input
          type="range"
          min="1"
          max="50"
          onChange={this.handleChange} />
      </div>
    );
  }
}

module.exports = SizeBar;
