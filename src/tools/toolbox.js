import React from 'react';

class ToolBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'Pencil'
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const tool = e.target.value;
    this.setState({
      selected: tool
    });
    this.props.onChange(tool);
  }

  render() {
    return (
      <div>
        <span className="toolhead">
          Tools:
        </span>
        <div className="tools">
          <div className="tool" key="Pencil">
            <input type="radio"
                   name="tools"
                   value="Pencil"
                   checked={this.state.selected=="Pencil"}
                   onChange={this.handleChange} />
            <label>Pencil</label>
          </div>

          <div className="tool" key="Line">
            <input type="radio"
                   name="tools"
                   value="Line"
                   checked={this.state.selected=="Line"}
                   onChange={this.handleChange} />
            <label>Line</label>
          </div>

          <div className="tool" key="Eraser">
            <input type="radio"
                   name="tools"
                   value="Eraser"
                   checked={this.state.selected=="Eraser"}
                   onChange={this.handleChange} />
            <label>Eraser</label>
          </div>
        </div>
      </div>
    );
  }
}


module.exports = ToolBox;
