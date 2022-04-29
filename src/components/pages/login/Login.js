import { useState } from 'react';
import './Login.css';
import userIcon from './user-circle.svg';
import localProvaider from '../../../providers/localstorage';
import { Link } from "react-router-dom";

function Login() {

    const [user, setUser] = useState('');
    const onValueChange = (event) => {
        setUser(event.target.value);
    }

    const handleClick = () => {
        localProvaider.saveUser();
        localProvaider.saveCategory();
        localProvaider.saveScore();
    }

    return(
        <div className={'container'}>
            <div className={'login-container'}>
                <div className={'login-card'}>
                    <h1>¡Acertados!</h1>
                    <div className={'form-group'}>
                        <div className={'input-name'}>
                            <img src={userIcon} alt='user-icon'/>
                            <input type={'text'} id={'username'} placeholder='Ingresa un nombre' value={user} onChange={onValueChange}></input>
                        </div>
                        <button id={'new-game'} onClick={handleClick} >
                            <Link className={'link'} to="/game">Iniciar Juego</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;