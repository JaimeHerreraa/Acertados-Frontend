import { useState } from 'react';
import './Content.css';
import Option from '../option/Option';


function Content({question, handleAnswer}) {
    const [selectedValue, setSelectedValue] = useState(question.choices[0])
    const onValueChange = (event) => { 
        const {name, value} = event.target;
        setSelectedValue({
            id: value,
            value: name
        });
    }

    return (
        <div className={'questions-container'}>
            <div className={'question'}>
                <p className={'description'}>{question.description}</p>
                <form className={'options'}>
                    {question.choices.map(choice => {
                        return <div className={'choice-group'}  key={choice.id}>
                                    <input type={'radio'} id={choice.id} value={choice.id} name={choice.value} checked={selectedValue.id == choice.id} onChange={onValueChange}/>
                                    <label htmlFor={choice.id}>{choice.value}</label>
                                </div>
                    })}
                    <Option choiceValue={selectedValue} questionId={question.id} handleAnswer={handleAnswer}/>
                </form>
            </div>
        </div>
    )
}

export default Content;