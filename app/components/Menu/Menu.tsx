'use client';

import { useRef } from 'react';
import styles from './style.module.scss';

interface IProps {
    isOpen: boolean;
    handleScroll: (scrollName: string) => void;
    toggleMenu: () => void;
}

interface IMenuItem {
    name: string;
    scrollName: string;
}

export const Menu = ({ isOpen, handleScroll, toggleMenu }: IProps) => {
    const modalRef = useRef<HTMLDivElement | null>(null);

    const menuItems: IMenuItem[] = [
        { name: 'Услуги', scrollName: 'services' },
        { name: 'Цены', scrollName: 'price' },
        { name: 'Наши работы', scrollName: '#' },
        { name: 'Контакты', scrollName: 'contacts' }
    ];

    return (
        <div
            className={`${isOpen ? styles.open : styles.close} ${styles.modal}`}
            ref={modalRef}
        >
            {isOpen && (
                <div className={styles.wrapper}>
                    <nav className={styles.menu}>
                        <ul className={styles.menu__list}>
                            {menuItems.map((item, index) => (
                                <li key={index} className={styles.list__item}>
                                    <span
                                        onClick={() => {
                                            handleScroll(item.scrollName);
                                            toggleMenu();
                                        }}
                                    >
                                        {item.name}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            )}
        </div>
    );
};
