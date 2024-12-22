import { Link } from "react-router-dom";

import "./Controls.css";

// управляющие кнопки (поиск и значок корзины)
export function Controls() {
    return (
        <div>
            <div className="header-controls-pics">
                <div data-id="search-expander" className="header-controls-pic header-controls-search">                    
                </div>
                <div className="header-controls-pic header-controls-cart">
                    <div className="header-controls-cart-full">0</div>
                    <div>
                        <Link className="header-controls-cart-menu" to="/cart" />
                    </div>
                </div>
            </div>
            <form data-id="search-form" className="header-controls-search-form form-inline invisible">
                <input className="form-control" placeholder="Поиск" />
            </form>
        </div>
    );
};
