import React from 'react';

const SendMessageForm = props => {
  return (
    <form onSubmit={props.send}>
      <div className="input-group mb-3">
        <input onChange={props.author} type="text" required className="form-control" placeholder="Enter Author"/>
        <input onChange={props.input} type="text" required className="form-control" placeholder="Enter Message"/>
        <div className="input-group-append">
          <button onClick={props.click} className="btn btn-outline-secondary" type="submit">Send</button>
        </div>
      </div>
    </form>
  )
}

export default SendMessageForm;