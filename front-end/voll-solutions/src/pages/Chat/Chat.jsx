import { useState, useEffect } from 'react'
import { io } from 'socket.io-client';
import './Chat.css'

const ENDPOINT = "http://localhost:3001";
const socket = io(ENDPOINT);

const Chat = () => {
  const [message, setMessage] = useState("")
  const [client, setClient] = useState("")
  const [lastMessages, setLastMessages] = useState([])

  useEffect(() => {
    setClient(localStorage.getItem('client'))
    socket.emit('sendMeMessages')
    socket.on('last30Messages', (listOfMessages) => {
      setLastMessages(listOfMessages)
    })
    socket.on('getMessages', () => {
      setTimeout(() => {
        socket.emit('sendMeMessages')
      }, 180);
    })
  }, []);


  const handleChange = (e) => {
    setMessage(e.target.value)
  }

  const sendMessage = () => {
    socket.emit('clientMessage', { client, message })
  }


  const renderMessages = (item) => {
    return (
      <div className="message">
        ({item.time}) {item.client} : {item.message}
      </div>
    )
  }

  return (
    <div className="chatePage">
      <div className="chatContainer">
        <div className="messageContainer">
          {lastMessages?.map((item) => renderMessages(item))}
        </div>
        <section className="inputAndButtonChat">
          <input className="messageInput" onChange={handleChange} />
          <button className="sendMessageButton" onClick={sendMessage}>Send</button>
        </section>
      </div>
    </div>
  );
}


export default Chat
