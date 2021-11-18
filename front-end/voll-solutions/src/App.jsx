import { useState, useEffect } from 'react'
import { io } from 'socket.io-client';
const ENDPOINT = "http://localhost:3001";
const socket = io(ENDPOINT);
const client = 'Adriano Forcellini'

function App() {
  const [message, setMessage] = useState("")
  const [lastMessages, setLastMessages] = useState([])
  
  const getMessages = async () => {
    const fetchMessages = await fetch(`${ENDPOINT}/getMessages`);
    const listMessages = await fetchMessages.json();
    setLastMessages(listMessages);
  }
  
  useEffect( () => {
    getMessages();
    socket.on('getMessages', () => {
      setTimeout(() => {
        console.log('oi')
        getMessages()}, 200);
    })
  }, []);
  

  const handleChange = (e) => {
    setMessage(e.target.value)
  }
  
  const sendMessage = () => {
    socket.emit('clientMessage',{client, message} )
  }

  const renderMessages = (item) => {
    return  (
      <div>
      ({item.time}) {item.client} : {item.message} 
     </div>
    )
  }

  return (
    <div>
    {lastMessages?.map((item) => renderMessages(item))}
    <input className="messageInput" onChange={handleChange} />
    <button onClick={sendMessage}>Send</button>
    </div>
  );
}


export default App
