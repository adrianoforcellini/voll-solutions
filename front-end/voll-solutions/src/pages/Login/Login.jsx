import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css'
import rocket from '../../../images/rocket.png';
import logovoll from '../../../images/logovoll.png'

const Login = () => {
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
    <div className="loginContainer">
      <div className="transparenteContainer">
        <section className="inputAndButtonsLogin">
          <input className="clientNameInput" onChange={handleChange} placeholder="Nick Name" />
          <button className="loginButton" onClick={handleClick}>Go to Chat</button>
        </section>
        <section className="logoAndImages">
          <img className="logoVoll" src={logovoll} />
          <img className="rocketImage" src={rocket} />
        </section>
      </div>
    </div>
  );
}


export default Login
