import React from 'react';

class MenuButton extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onClick();
  }

  render() {
    return (
      <div className="menu-btn" onClick={this.onClick}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    );
  }
}

module.exports = MenuButton;
