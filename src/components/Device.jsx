import Screen from './Screen';
import '../styles/components/device.scss'
import '../images/bt-dormir.svg'
import '../images/bt-comer.svg'
import '../images/bt-jugar.svg'


function Device ({ initMenu, itemGif, characterGif, actionId, renderMenu,  menuList, selectMenu, renderElement}){

/*     const handleClick = (ev) => {
        const btId = ev.currentTarget.id;  
        initScreen(btId);
    }; */

    const handleClickMenu = (ev) => {
        const btId = ev.currentTarget.id;  
        initMenu(btId);
    };


    return (
        <>
            <section className="screen-container">

                <Screen renderMenu={renderMenu} itemGif={itemGif} characterGif={characterGif} actionId={actionId} menuList={menuList} selectMenu={selectMenu} renderElement={renderElement} />

                <div className="screen-buttons">
                    <button id="sleep" onClick={handleClickMenu}className="screen-buttons__button">
                        <img className="screen-buttons__img" src="src/images/bt-dormir.svg" />
                    </button>
                    <button id="eat"  onClick={handleClickMenu}className="screen-buttons__button"> 
                        <img className="screen-buttons__img" src="src/images/bt-comer.svg" />
                    </button>

                    <button id="play" onClick={handleClickMenu}className="screen-buttons__button">
                         <img className="screen-buttons__img" src="src/images/bt-jugar.svg" />
                    </button>

                </div>
            </section>
        </>
    ); 
}

export default Device