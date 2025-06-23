import '../styles/components/screen.scss'
import characterDefault from '../images/character-default.png'
import characterEating from '../images/character-eating.gif'

import foodGif from '../images/item-food.gif'
import itemEmpty from '../images/item-empty.png'



function Screen ({renderAction, itemGif, characterGif}){

    return (
        <>
            <div className="screen">
                <img className="screen__item" 
                    src={renderAction ? itemGif : itemEmpty } />
                    <img className="screen__character" 
                    src={renderAction ? characterGif : characterDefault } />
            </div>
        </>
    ); 
}

export default Screen