import '../styles/components/screen.scss'
import ScreenNav from './ScreenNav';
import characterDefault from '../images/character-default.png'
import itemEmpty from '../images/item-empty.png'



function Screen ({renderMenu, itemGif, characterGif, menuList, selectMenu, renderElement}){

    return (
        <>
            <div className="screen">
                <img className="screen__item" 
                src={renderElement ? itemGif : itemEmpty } />
                <img className="screen__character" 
                src={renderElement ? characterGif : characterDefault } />
             
            {renderMenu ? <ScreenNav menuList={menuList} selectMenu={selectMenu}  /> : ""} 
            </div>
        </>
    ); 
}

export default Screen