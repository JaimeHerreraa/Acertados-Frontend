import './Login.css';
import userIcon from './user-circle.svg';

function Login() {
    return(
        <div className={'login-container'}>
            <div className={'login-card'}>
                <h1>¡Acertados!</h1>
                <div className={'form-group'}>
                    <div className={'input-name'}>
                        <img src={userIcon} alt='user-icon'/>
                        <input type={'text'} id={'username'} placeholder='Ingresa un nombre'></input>
                    </div>
                    <button id={'new-game'}>Iniciar Juego</button>
                </div>
            </div>
        </div>
    )
}

export default Login;