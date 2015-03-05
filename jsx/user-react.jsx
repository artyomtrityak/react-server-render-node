var React = require('react');
  
module.exports = React.createClass({
  getDefaultProps: function() {
    return {name: 'No name'};
  },

  handleClick: function() {
    alert('click: user-', this.props.name);
  },
  
  render: function() {
    return (
      <div style={{color: 'red'}} onClick={this.handleClick}>{this.props.name}</div>
    );
  },
})