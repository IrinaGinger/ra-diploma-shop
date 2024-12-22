import { Preloader } from '../../components/Preloader/Preloader';

import './Catalog.css'; 

export function Catalog() {

    return (
        <section className="catalog">
            <h2 className="text-center">Каталог</h2>
            <Preloader />
        </section>
    )
}