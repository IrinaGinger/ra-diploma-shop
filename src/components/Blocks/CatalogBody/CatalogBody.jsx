// import PropTypes from 'prop-types'; 
import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

//компоненты (components)
import { Preloader } from '../../UI/Preloader/Preloader';
import { LoadMoreBtn } from '../../UI/Buttons/LoadMoreBtn';
import { Alert } from '../../UI/Alert/Alert';
import { Menu } from '../Menu/Menu';
import { CardsBlock } from "../CardsBlock/CardsBlock";

//утилиты и хуки
import { useGetData } from '../../../hooks/useGetData';

// тело каталога (блок на главной странице и на странице Каталог)
export function CatalogBody() {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loadingError, setLoadingError] = useState(null);
    const [lastLength, setLastLength] = useState(0);
    const { getProducts, getCategories } = useGetData();
    const shownCards = 6;

    const classCategories = "catalog-categories nav justify-content-center";

    function handleLoadMoreBtnClick() {
        const prevSearchParams = Object.fromEntries(searchParams.entries());
        const currentOffset = searchParams.get('offset');
        const offset = currentOffset ? Number(currentOffset) + shownCards : shownCards;

        setSearchParams({ ...prevSearchParams, offset });
    }

    useEffect(() => {
        setLoadingError(null);
        const offset = searchParams.get('offset');

        if (!offset) {
            Promise.all([getCategories(), getProducts(searchParams)])
                .then((data) => {
                    const [categories, products] = data;
                    setLastLength(products.length);
                    setCategories(categories);
                    setProducts(products);
                })
                .catch((error) => setLoadingError(error));
        } else {
            getProducts(searchParams)
                .then((data) => {
                    setLastLength(data.length);
                    setProducts((prevState) => [...prevState, ...data]);
                })
                .catch((error) => setLoadingError(error));
        }
    }, [searchParams]);

    const categoriesAll = [{ id: 999999, title: "Все" }, ...categories];

    let catalogBodyData;

    if (products === 'Нет данных для просмотра') {
        catalogBodyData = <Alert type="warning" text={products} />;
    } else {
        catalogBodyData = <CardsBlock products={products} />;
    };

    const loadMoreButtonStyle = {
        display:
            ((lastLength >= shownCards) && (products !== 'Нет данных для просмотра'))
                ? 'block'
                : 'none'
    };

    const loadMoreButton = <LoadMoreBtn
        btnStyle={loadMoreButtonStyle}
        onButtonClick={handleLoadMoreBtnClick}
    />

    const errorView = loadingError && <Alert type="danger" text={loadingError} />;

    const catalog = (        
        (getCategories.loading || getProducts.loading)
            ? <Preloader />
            : errorView || (<>
                <Menu
                    typeMenu="categories"
                    classMenu={classCategories}
                    menuItems={categoriesAll}
                    activePage={searchParams.get('categoryId')}
                    query={searchParams.get('q')}
                />
                {catalogBodyData}
                {loadingError || loadMoreButton}
            </>)
    );

    const isNotFound = loadingError && typeof loadingError === 'object';

    return isNotFound ? navigate('/404') : catalog;
}