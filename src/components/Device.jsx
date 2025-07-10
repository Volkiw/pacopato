import Screen from './Screen';
import '../styles/components/device.scss'
import '../images/bt-dormir.png'
import '../images/bt-comer.png'
import '../images/bt-jugar.png'


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
            <section className="computer">

                <Screen renderMenu={renderMenu} itemGif={itemGif} characterGif={characterGif} actionId={actionId} menuList={menuList} selectMenu={selectMenu} renderElement={renderElement} />
                <div className="computer__deco">
                </div>
                <div className="buttons">
                     <div className="buttons__left">
                        <button id="" className="buttons__button--small"> 
                        *</button>
                     </div>
                    <div className="buttons__right">
                        <div className="screen-buttons">
                    <button id="eat"  onClick={handleClickMenu}className="screen-buttons__button"> 
                        <img className="screen-buttons__img" src="src/images/bt-comer.png" />
                    </button>

                    <button id="sleep" onClick={handleClickMenu}className="screen-buttons__button">
                        <img className="screen-buttons__img" src="src/images/bt-dormir.png" />
                    </button>

                    <button id="play" onClick={handleClickMenu}className="screen-buttons__button">
                         <img className="screen-buttons__img" src="src/images/bt-jugar.png" />
                    </button>

                </div>
                    </div>
                </div>
                
            </section>
            <div className="section-deco">
                <div className="section-deco__top"></div>
                <div className="section-deco__bottom"></div>
            </div>
        </>
    ); 
}

export default Device