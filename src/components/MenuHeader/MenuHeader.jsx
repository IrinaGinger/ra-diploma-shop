import PropTypes from 'prop-types'; 

import { Menu } from "../Menu/Menu"; 

import "./MenuHeader.css";

// обертка строки меню в шапке
export function MenuHeader(props) {
    return (
        <div className="collapse navbar-collapse" id="navbarMain">
            <Menu classMenu={props.classMenu} menuItems={props.menuItems} />
        </div>
    );
};

MenuHeader.propTypes = {
    classMenu: PropTypes.string,
    menuItems: PropTypes.array,
}

