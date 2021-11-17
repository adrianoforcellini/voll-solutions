import { useState, useEffect } from 'react'
import { io } from 'socket.io-client';

function App() {
  const ENDPOINT = "http://localhost:3001";

  useEffect(() => {
    const socket = io(ENDPOINT);
  }, []);

  return (
    <div>
    </div>
  );
}


export default App
