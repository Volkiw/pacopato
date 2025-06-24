import '../styles/components/screen-nav.scss'



function ScreenNav({menuList, selectMenu}) {

    const handleClickSelectMenu = (ev) => {
        const btId = ev.currentTarget.id; 
        const btData = ev.currentTarget.dataset.action;
        selectMenu(btId, btData);
    };

    return(
        <>
            <div className="menu">
                <p className="menu__title">¿Qué te apetece?</p>
                <ul className="menu__ul">
                    {menuList.map( 
                        el => 
                         <li key={el.id} id={el.id} data-action={el.action} className="menu__li" onClick={handleClickSelectMenu}><span className="menu__flecha">➤</span> {el.food}</li>
                    ) }
                </ul>
            </div>
        </>
    )
}

export default ScreenNav