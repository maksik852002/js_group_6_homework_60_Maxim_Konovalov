import React, {Component, Fragment} from 'react';
import SendMessageForm from '../components/SendMessageForm/SendMessageForm';
import Messages from '../components/Messages/Messages'

const mainUrl = 'http://146.185.154.90:8000/messages';
const data = new URLSearchParams();
let dateTime = '';
let interval= null;

class Chat extends Component {

    constructor (props) {
    super(props);
      this.state = {
      messages:[],
      input:'',
      author:'',
    }
  }

  componentDidMount () {
    interval = setInterval(this.getMessage,2000);
  };

  componentWillUnmount () {
    clearInterval(interval);
  }

  getMessage = async () => {
    let messages = [...this.state.messages];
    await fetch(mainUrl + dateTime)
    .then(response => response.json())
    .then(result => {
      result.length!==0 && (dateTime = `?datetime=${result[result.length-1].datetime}`)
      this.state.messages === 0
      ? messages = result
      : result.map(message => messages.push(message))
      this.setState({messages})
    })
  };

  sendMessage = (e) => {
    // clearInterval(interval);
    e.preventDefault();
    data.set('message', `${this.state.input}`);
    data.set('author', `${this.state.author}`); 
    fetch(mainUrl, {method:'post', body:data})
    // this.getMessage()
  }

  render = () => {
    // console.log(this.state.messages)
    return (
      <Fragment>
        <SendMessageForm
          send = {(e) => this.sendMessage(e)}
          input = {(e) => this.setState({input:e.target.value})}
          author = {(e) => this.setState({author:e.target.value})}
        />
        {this.state.messages.map(el => (
         <Messages
            key={el._id}
            author={el.author}
            date={el.datetime}
            message={el.message}
          />
        )).reverse()}
      </Fragment>
    )
  }
};
export default Chat;