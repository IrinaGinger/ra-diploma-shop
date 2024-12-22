import PropTypes from 'prop-types'; 

import { NavLink } from "react-router-dom";

import "./MenuItem.css";

export function MenuItem(props) {
    const { label, link } = props;

    return (
        <li className="nav-item">
            <NavLink className="nav-link" to={link}>
                {label}
            </NavLink>
        </li>
    );
};

MenuItem.propTypes = {
    label: PropTypes.string,
    link: PropTypes.string,
}
