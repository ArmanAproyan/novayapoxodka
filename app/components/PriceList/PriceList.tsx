import { useState, useEffect } from 'react';
import { IpriceList } from '../../constants/priceList';
import styles from './style.module.scss';

const PriceList = ({ prices }: { prices: IpriceList[] }) => {
  const [visiblePrices, setVisiblePrices] = useState<IpriceList[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Запускаем анимацию
    setIsAnimating(true);

    // Обновляем видимые цены
    setVisiblePrices(prices);

    // Через 500ms снимаем анимацию
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 1000); // Длительность анимации

    // Очистка таймера при размонтировании компонента
    return () => {
      clearTimeout(timer);
    };
  }, [prices]); // Запускается при изменении prices

  return (
    <div className={styles.container}>
      <div className={`${styles.block} ${isAnimating ? styles.animate : ''}`}>
        <div className={styles.block__name}>
          <h1>Меню</h1>
        </div>
        <div className={styles.block__price_container}>
          {visiblePrices &&
            visiblePrices.map((val) => (
              <div key={val.title} className={styles.block__price_container__items}>
                <div className={styles.block__price_container__items__text_block}>
                  <h2>{val.title}</h2>
                  <span>{val.description}</span>
                </div>
                <div className={styles.block__price_container__items__price_block}>
                  <h1>{val.price} Р</h1>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PriceList;
