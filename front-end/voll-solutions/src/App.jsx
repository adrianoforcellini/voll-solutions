import { useState, useEffect } from 'react'
import { io } from 'socket.io-client';
const ENDPOINT = "http://localhost:3001";
const socket = io(ENDPOINT);
const client = 'Adriano Forcellini'
function App() {
  const [message, setMessage] = useState("")
  
  useEffect(() => {
  }, [message]);
  
  const handleChange = (e) => {
    setMessage(e.target.value)
  }
  
  const sendMessage = () => {
    socket.emit('clientMessage',{client, message} )
  }

  return (
    <div>
    <input className="messageInput" onChange={handleChange} />
    <button onClick={sendMessage}>Send</button>
    </div>
  );
}


export default App
