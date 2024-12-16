import { IpriceList } from '../../constants/priceList';
import styles from './style.module.scss';


interface IpriceListProp {
  prices: IpriceList[];
  scrollRef: React.RefObject<HTMLDivElement>
};


const PriceList: React.FC<IpriceListProp> = ({ prices, scrollRef }) => {
  return (
    <div ref={scrollRef} className={styles.tableContainer}>
      <h1 className={styles.title}>Прейскурант на услуги по ремонту обуви</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Наименование</th>
            <th>Ед.изм</th>
            <th>Цена</th>
          </tr>
        </thead>
        <tbody>
          {prices.map((item, index) => (
            <tr key={index}>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.percent_information}>
        <span>Процент за сложность и эксклюзив 30%</span>
        <br/>
        <span>Процент за восстановление 30%</span>
        <br />
        <span>Процент за срочность 30%</span>
        <h3>Гарантия на работу 2 недели</h3>
      </div>

    </div>
  );
};

export default PriceList;
