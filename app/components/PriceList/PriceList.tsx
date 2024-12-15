import { useState, useEffect } from 'react';
import { IpriceList } from '../../constants/priceList';
import styles from './style.module.scss';

import React from "react";
// import styles from "./PriceTable.module.scss"; // Создайте модуль стилей или замените на свои

// Интерфейс для данных прайс-листа


// Пример прайс-листа

const PriceList = ({ prices }: { prices: IpriceList[] }) => {
  return (
    <div className={styles.tableContainer}>
      <h1 className={styles.title}>Прайс-лист</h1>
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
      </div>

    </div>
  );
};

export default PriceList;
