import PropTypes from 'prop-types'; 

import { MenuItem } from "../MenuItem/MenuItem";

import "./Menu.css";

// строка меню в шапке и столбец с меню в подвале
export function Menu(props) {
    const { classMenu, menuItems } = props;

    return (
        <ul className={classMenu}>
            {menuItems.map(({ id, label, link }) => (
                <MenuItem key={id} label={label} link={link} />
            ))}
        </ul>
    );
};

Menu.propTypes = {
    classMenu: PropTypes.string,
    menuItems: PropTypes.array,
}

