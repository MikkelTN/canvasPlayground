import React from 'react';

const Tool = props => {
  return (
    <input type="radio" name="tools" value={props.value} />
  );
}

const ToolBox = props => {
  const tools = props.tools.map(tool =>
    <div className="tool" key={tool}>
      <Tool value={tool} />
      <label>{tool}</label>
    </div>
  );
  return (
    <div>
      <h3 className="toolhead">
        Tools:
      </h3>
      <div className="tools">
        {tools}
      </div>
    </div>
  );
}

module.exports = ToolBox;
