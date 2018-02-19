/** @jsx React.DOM */

var React = require('react');
var Popup = require('./Popup.react.js');

module.exports = Tweet = React.createClass({
  render: function(){
    var tweet = this.props.tweet;
    return (
      <li className={"tweet" + (tweet.active ? ' active' : '')}>
        <img src={tweet.avatar} className="avatar"/>
        <blockquote>
          <cite>
            <a href={"http://www.twitter.com/" + tweet.screenname}>{tweet.author}</a> 
            <span className="screen-name">@{tweet.screenname}</span> 
          </cite>
          <span className="content">{tweet.body}</span><br></br>
          <a href='#'onClick={this._handleClick.bind(this)}><img src="svg/reply.svg" /></a>
          </blockquote>
      </li>
    )
  },
  _handleClick: function(value) {
    console.log("####################################"+value);
    <Popup />
  }
});