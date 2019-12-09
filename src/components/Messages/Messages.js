import React, {Component} from 'react';

class Messages extends Component {
 
  shouldComponentUpdate (nextProps) {
    return this.props.author !== nextProps.author || this.props.message !== nextProps.message
  }

  render = () => {
    console.log('[mes] render')
    return (
      <div className="toast" style={{opacity:'1', maxWidth:'100%'}}>
        <div className="toast-header">
          <strong className="mr-auto">{this.props.author}</strong>
          <small>{this.props.date}</small>
        </div>
        <div className="toast-body">
          {this.props.message}
        </div>
      </div>
    )
  }
};

export default Messages;