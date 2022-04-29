import './Game.css';
import Header from './header/Header';
import Content from './content/Content';
import localProvider from '../../../providers/localstorage';
import DataProvider from '../../../providers/questionprovider';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Game() {
    const user = localProvider.getUser();
    const score = localProvider.getScore();
    const category = localProvider.getCategory();

    const [question, setQuestion] = useState({})
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    const answerQuestion = async (choice, questionId) => {
        if(category === 5){
            localProvider.updatePoints();
            await DataProvider.saveUserScore()
            navigate('/endgame')
        } else {
            const response = await DataProvider.checkAnswer(choice, questionId);
            if (response === 'good job!') {
                localProvider.updateCategory();
                localProvider.updatePoints();
                setLoading(true)
            } else {
                localProvider.saveScore();
                localProvider.saveMessage("Has perdido")
                await DataProvider.saveUserScore()
                navigate('/endgame')
            }
        }
        
    } 

    useEffect(() => {
        DataProvider.fetchQuestions()
            .then(question => {
                console.log(question)
                setLoading(false)
                setQuestion(question)
            })
    }, [loading])

    if (loading) {
        return <div></div>
    }
    return (
        <div className={'game'}>
            <Header user={user} score={score}/>
            <Content question={question} handleAnswer={answerQuestion}/>
        </div>
    )
}

export default Game;