import './EndGame.css';
import localProvider from '../../../providers/localstorage';
import { Link } from 'react-router-dom';

function EndGame() {
    const user = localProvider.getUser();
    const score = localProvider.getScore();
    const message = localProvider.getMessage();

    return (
        <div className={'container'}>
            <div className={'endgame-container'}>
                <div className={'endgame-card'}>
                    <p>Message: {message}</p>
                    <p>User: {user}</p>
                    <p>Score: {score}</p>
                    <button className={'newGame'}><Link className={'link'} to="/">Nuevo Juego</Link></button>
                </div>
            </div>
        </div>
    )
}

export default EndGame;