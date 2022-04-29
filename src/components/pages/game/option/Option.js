import { Link } from 'react-router-dom';
import './Option.css';
import localProvider from '../../../../providers/localstorage';
import DataProvider from '../../../../providers/questionprovider'

function Option({choiceValue, questionId, handleAnswer}) {

    const handleLeave = () => {
        DataProvider.saveUserScore()
       localProvider.saveMessage("Te has rendido");
    }

    const handleNext = (event) => {
        event.preventDefault();
        handleAnswer(choiceValue, questionId)
    }

    return (
        <div className={'buttons-container'}>
            <div className={'container-leave'}>
                <button id={'leave'} onClick={handleLeave}><Link to='/endgame'>
                Rendirse
                </Link></button>
            </div>
            <div className='container-next'>
                <button onClick={handleNext} id={'next'}>Siguiente</button>
            </div>         
        </div>
    ) 
}

export default Option;