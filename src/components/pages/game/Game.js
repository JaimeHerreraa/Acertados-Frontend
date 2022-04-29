import './Game.css';
import Header from './header/Header';
import Content from './content/Content';

function Game() {
    return (
        <div className={'game'}>
            <Header/>
            <Content/>
        </div>
    )
}

export default Game;