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

const menuItems: IMenuItem[] = [
    { name: 'Услуги', scrollName: 'services' },
    { name: 'Цены', scrollName: 'price' },
    { name: 'Наши работы', scrollName: '#' },
    { name: 'Контакты', scrollName: 'contacts' }
];

export const Menu = ({ isOpen, handleScroll, toggleMenu }: IProps) => {
    const modalRef = useRef<HTMLDivElement | null>(null);

    const handleItemClick = (scrollName: string) => {
        handleScroll(scrollName);
        toggleMenu();
    };

    return (
        <div
            className={`${styles.modal} ${isOpen ? styles.open : styles.close}`}
            ref={modalRef}
        >
            {isOpen && (
                <div className={styles.wrapper}>
                    <nav className={styles.menu}>
                        <ul className={styles.menu__list}>
                            {menuItems.map((item, index) => (
                                <li
                                    key={item.name}
                                    className={styles.list__item}
                                    style={{ '--i': index } as React.CSSProperties}
                                >
                                    <span
                                        onClick={() => handleItemClick(item.scrollName)}
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
