import './Option.css';

function Option() {
    return (
        <div className={'buttons-container'}>
            <div className={'container-leave'}>
                <button id={'leave'}>Rendirse</button>
            </div>
            <div className='container-next'>
                <button id={'next'}>Siguiente</button>
            </div>         
        </div>
    ) 
}

export default Option;