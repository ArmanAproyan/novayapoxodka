'use client';

import styles from './style.module.scss';
import { useEffect, useState, useRef } from 'react';
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import logo from '../../assets/logo/logo.png';
import Image from 'next/image';
import Head from 'next/head';
import { motion } from 'framer-motion'

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

interface IheraderProp {
    handleScroll: (scrollName: string) => void
}

export const Header: React.FC<IheraderProp> = ({ handleScroll }) => {

    const [isOpenMenue, setIsOpenMenue] = useState<boolean>(true);
    const [isScroll, setIsScroll] = useState<boolean>(false);
    const modalRef = useRef<HTMLUListElement | null>(null);

    useEffect(() => {
        if (isOpenMenue && modalRef.current) {
            const firstItem = modalRef.current.querySelector('li');
            if (firstItem) {
                (firstItem as HTMLElement).focus();
            }
        }
    }, [isOpenMenue]);

    useEffect(() => {
        if (typeof window !== "undefined") {

            const handleScroll = () => {
                setIsScroll(window.scrollY > 0);
            };

            handleScroll();

            window.addEventListener("scroll", handleScroll);

            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }
    }, []);


    const closeMenue = () => {
        const menue = document.querySelector(`.${styles.header_menu_active}`);

        if (menue) {
            menue.classList.add(styles.close_menu);

            setTimeout(() => {
                setIsOpenMenue(true);
                menue.classList.remove(styles.close_menu);
            }, 500);
        }
    };

    const toggleMenu = () => {
        if (isOpenMenue) {
            setIsOpenMenue(false);
        } else {
            closeMenue()
        }
    };



    return (
        <>
            <Head>
                <title>Новая Походка - Главная страница</title>
                <meta name="description" content="Добро пожаловать на сайт Новая Походка. Мы предоставляем услуги по преобразованию и уходу за обувью." />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Новая Походка - Главная страница" />
                <meta property="og:description" content="Добро пожаловать на сайт Новая Походка. Мы предоставляем услуги по преобразованию и уходу за обувью." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.yoursite.com" />
                <meta property="og:image" content="/path/to/logo.png" />
            </Head>

            <header className={`${styles.wrapper} ${isScroll || isOpenMenue ? styles.headerScroll : ""}`}>
                <div className={`container ${styles.header}`}>
                    <div className={styles.header__logo}>
                        <h2 style={{ color: 'white' }} onClick={() => handleScroll('main')}>
                            <div className={styles.header__logo}>
                                <motion.div
                                    initial={{ scale: 0.9, rotate: -10 }}
                                    animate={{ scale: 1, rotate: 10 }}
                                    transition={{
                                        duration: 4,
                                        delay: 2,
                                        type: 'spring',
                                        stiffness: 80,
                                        damping: 35,
                                        repeat: Infinity,
                                        repeatType: 'reverse',
                                    }}
                                >
                                    <Image
                                        width={58}
                                        height={50}
                                        alt="Logo"
                                        src={logo}
                                        className={styles.logo__img}
                                    />
                                </motion.div>
                                <span className={styles.logo__text}>Новая Походка</span>
                            </div>
                        </h2>
                    </div>
                    {
                        <nav className={isOpenMenue ? styles.header__menu : styles.header_menu_active}>
                            <ul ref={modalRef} className={isOpenMenue ? styles.menu__list : styles.active}>

                                {menuItems.map((val) => {
                                    return (
                                        <li key={val.name} className={styles.list__item}
                                            role="menuitem">
                                            <p onClick={() => {
                                                handleScroll(val.scrollName)
                                                closeMenue()
                                            }}>{val.name}</p>
                                        </li>
                                    )
                                })}
                            </ul>

                        </nav>
                    }
                </div>
                <div className={styles.mobile_menue}>
                    {
                        isOpenMenue ? <IoMenu className={styles.open_menue_item} color='#d7ccc8' size={25} onClick={toggleMenu} /> :
                            <IoMdClose className={styles.menue_toggle_item} color='#d7ccc8' size={25} onClick={toggleMenu} />

                    }

                </div>
            </header>
        </>
    )
}
