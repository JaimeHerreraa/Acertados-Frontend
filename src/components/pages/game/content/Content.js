import { useState } from 'react';
import './Content.css';
import Option from '../option/Option';

function Content() {
    const [selectedValue, setSelectedValue] = useState()
    const onValueChange = (event) => {
        setSelectedValue(event.target.value);
    }
    return (
        <div className={'questions-container'}>
            <div className={'question'}>
                <p className={'description'}>Javascript es un lenguaje: </p>
                <form className={'options'}>

                    <div className={'choice-group'}>
                        <input type={'radio'} id={'choice-one'} value={'Compilado'}  checked={selectedValue === 'Compilado'} onChange={onValueChange}/>
                        <label htmlFor={'choice-one'}>Compilado</label>
                    </div>

                    <div className={'choice-group'}>
                        <input type={'radio'} id={'choice-two'} value={'Interpretado'}  checked={selectedValue === 'Interpretado'} onChange={onValueChange}/>
                        <label htmlFor={'choice-two'}>Interpretado</label>
                    </div>

                    <div className={'choice-group'}>
                        <input type={'radio'} id={'choice-three'}value={'Hibrido'}  checked={selectedValue === 'Hibrido'} onChange={onValueChange}/>
                        <label htmlFor={'choice-three'}>Hibrido</label>
                    </div>

                    <div className={'choice-group'}>
                        <input type={'radio'} id={'choice-four'} value={'No Compilado'} checked={selectedValue === 'No Compilado'} onChange={onValueChange}/>
                        <label htmlFor={'choice-four'}>No compilado</label>
                    </div>

                    <Option/>
                </form>
            </div>
        </div>
    )
}

export default Content;