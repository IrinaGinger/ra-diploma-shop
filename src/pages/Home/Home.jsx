//компоненты (components)
import { Preloader } from '../../components/Preloader/Preloader';

//страницы (pages)
import { Catalog } from '../Catalog/Catalog';

import './Home.css'; 

export function Home() {
    return (
        <>  
            <section className="top-sales">
                <h2 className="text-center">Хиты продаж!</h2>
                <Preloader />              
            </section>
            <Catalog />
        </>
    );
}
