/** @jsx React.DOM */

var React = require('react');

module.exports = Popup = React.createClass ({
  render:function() {
    console.log('fired ok');
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>some Text</h1>
        <button>close me</button>
        </div>
      </div>
    );
  }
});