import './Header.css';
import awardIcon from './award.svg';
import userIcon from './user-circle.svg';

function Header({user, score}) {
    
    return (
        <header className={'header-container'}>
            <div className={'player-info'}>
                <div className={'name-group'}>
                    <img src={userIcon} alt={'user-icon'}/>
                    <p className={'nickname'}>Usuario: {user}</p>
                </div>
                <div className={'score-group'}>
                    <img src={awardIcon} alt={'user-award'}/>
                    <p className={'score'}>Puntos: {score}</p>
                </div>
            </div>
        </header>
    )
}

export default Header;