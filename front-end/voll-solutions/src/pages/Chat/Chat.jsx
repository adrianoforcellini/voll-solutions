import { useState, useEffect } from 'react'
import { io } from 'socket.io-client';
import './Chat.css'
const ENDPOINT = "http://localhost:3001";
const socket = io(ENDPOINT);

const Chat = () => {
  const [message, setMessage] = useState("")
  const [client, setClient] = useState("")
  const [clientsOn, setClientsOn] = useState([])
  const [lastMessages, setLastMessages] = useState([])

  useEffect(() => {
    let nickName = localStorage.getItem('client') 
    setClient(nickName)
    socket.emit('clientName', {nickName} )
    socket.emit('sendMeMessages')

    socket.on('last30Messages', (listOfMessages) => {
      setLastMessages(listOfMessages)
    })

    socket.on('clientsOn', (clients) => {
      setClientsOn(clients)
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
        <div className="clientsOn">
          <ul className="clientsList">
          {clientsOn?.map(item => <li className="">{item}</li>)}
          </ul>
        </div>
      </div>
        <section className="inputAndButtonChat">
          <input className="messageInput" onChange={handleChange} />
          <button className="sendMessageButton" onClick={sendMessage}>Send</button>
        </section>
    </div>
  );
}


export default Chat
