import { useState } from 'react'
import { useNavigate } from 'react-router-dom'; 

const Login = () =>  {
  const [client, setClient] = useState("")
  const navigate = useNavigate();

  const handleChange = (e) => {
    setClient(e.target.value)
  }

  const handleClick = () => {
    localStorage.setItem('client', client);
    navigate('/chat')
  }

  return (
    <div>
    <input className="clientNameInput" onChange={handleChange} placeholder="Nick Name"/>
    <button onClick={handleClick}>Go to Chat</button>
    </div>
  );
}


export default Login
