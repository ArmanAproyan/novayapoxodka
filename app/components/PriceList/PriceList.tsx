import styles from './style.module.scss';
import { priceList, keyRepairPriceList } from '../../constants/priceList';
import { useState } from 'react';

interface IpriceListProp {
    scrollRef: React.RefObject<HTMLDivElement>
};

const PriceList: React.FC<IpriceListProp> = ({scrollRef}) => {

    const [slide,setSlide] = useState<string>('shooze');
    const [showList,setShowList] = useState(priceList);

    const handleChangeSlide = () => {
        if(slide == 'shooze') {
            setSlide('key')
            setShowList(keyRepairPriceList)
        } 
        if(slide == 'key') {
            setSlide('shooze')
            setShowList(priceList)
        }
    };


    return <div ref={scrollRef} className={styles.container}>
        <div className={styles.container__control} onClick={handleChangeSlide}>{'<'}</div>
        <div className={styles.block}>

            <div className={styles.block__name}>
                <h1>Цены на {slide == 'shooze' ? 'ремонт обуви': 'ремонт ключей'}</h1>
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
        <div className={styles.container__control} onClick={handleChangeSlide}>{'>'}</div>

    </div>
};


export default PriceList;