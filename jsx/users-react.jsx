var React = require('react'),
    User = require('./user-react');

module.exports = React.createClass({
  getInitialState: function() {
    return {items: this.props.items, disabled: true}
  },
 
  componentDidMount: function() {
    this.setState({disabled: false})
  },

  render: function() {
    return (
      <div>
        <div>
          Users List
        </div>
        <div>
          {
            this.props.users.map(function(item) {
              var name = item.name;
              return <User key={name} name={name} />
            })
          }
        </div>
      </div>
    );
  },
})