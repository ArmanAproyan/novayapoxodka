import styles from './style.module.scss';
import { priceList, keyRepairPriceList } from '../../constants/priceList';
import { useState } from 'react';

interface IpriceListProp {
    scrollRef: React.RefObject<HTMLDivElement>,
    title: string
};

const PriceList: React.FC<IpriceListProp> = ({scrollRef, title}) => {

    const [showList,setShowList] = useState(priceList);

    return <div ref={scrollRef} className={styles.container}>
        <div className={styles.block}>

            <div className={styles.block__name}>
                <h1>Цены на {title}</h1>
            </div>
            <div className={styles.block__price_container}>
                {showList.map((val) => {
                    return (
                        <div key={val.title} className={styles.block__price_container__items}>
                            <div className={styles.block__price_container__items__text_block}>
                                <h2>{val.title}</h2>
                                <span>{val.description}</span>
                            </div>
                            <div className={styles.block__price_container__items__price_block}>
                                <h1>{val.price} Р</h1>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>

    </div>
};


export default PriceList;