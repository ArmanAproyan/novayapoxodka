'use client';

import { useRef, useEffect } from 'react';
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
    { name: 'Наши работы', scrollName: 'beforeAfter' },
    { name: 'Контакты', scrollName: 'contacts' }
];

export const Menu = ({ isOpen, handleScroll, toggleMenu }: IProps) => {
    const modalRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {


        if (isOpen && modalRef.current) {
            const firstItem = modalRef.current.querySelector('li');
            if (firstItem) {
                (firstItem as HTMLElement).focus();
            }
        }
    }, [isOpen]);

    const handleItemClick = (scrollName: string) => {
        handleScroll(scrollName);
        toggleMenu();
    };

    return (
        <div
            className={`${styles.modal} ${isOpen ? styles.open : styles.close}`}
            ref={modalRef}
            role="menu"  
            aria-hidden={!isOpen} 
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
                                    role="menuitem"  
                                    onClick={() => handleItemClick(item.scrollName)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleItemClick(item.scrollName)} 
                                >
                                    <span>{item.name}</span>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            )}
        </div>
    );
};
