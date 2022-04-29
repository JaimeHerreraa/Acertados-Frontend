import './Header.css';
import awardIcon from './award.svg';
import userIcon from './user-circle.svg';

function Header() {
    return (
        <header className={'header-container'}>
            <div className={'player-info'}>
                <div className={'name-group'}>
                    <img src={userIcon} alt={'user-icon'}/>
                    <p className={'nickname'}>Usuario: {'Jaime'}</p>
                </div>
                <div className={'score-group'}>
                    <img src={awardIcon} alt={'user-award'}/>
                    <p className={'score'}>Puntos: {0}</p>
                </div>
            </div>
        </header>
    )
}

export default Header;