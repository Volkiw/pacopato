import Screen from './Screen';
import '../styles/components/device.scss'
import '../images/bt-dormir.svg'
import '../images/bt-comer.svg'
import '../images/bt-jugar.svg'
import { useState } from 'react'; //Hooks



function Device ({initScreen, renderAction, itemGif, characterGif}){
   

    const handleClick = (ev) => {
        const btId = ev.currentTarget.id;  
        initScreen(btId);
    };


    return (
        <>
            <section className="screen-container">

                <Screen renderAction={renderAction} itemGif={itemGif} characterGif={characterGif} />

                <div className="screen-buttons">
                    <button id="sleep" onClick={handleClick} className="screen-buttons__button">
                        <img className="screen-buttons__img" src="src/images/bt-dormir.svg" />
                    </button>
                    <button id="eat" onClick={handleClick}className="screen-buttons__button"> 
                        <img className="screen-buttons__img" src="src/images/bt-comer.svg" />
                    </button>
                    <button id="play" onClick={handleClick}className="screen-buttons__button">
                         <img className="screen-buttons__img" src="src/images/bt-jugar.svg" />
                    </button>

                </div>
            </section>
        </>
    ); 
}

export default Device