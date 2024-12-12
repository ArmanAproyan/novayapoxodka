'use client'
import styles from './style.module.scss';
import { useEffect, useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Menu } from '../Menu/Menu';
import { FaKeycdn } from "react-icons/fa";

interface IheraderProp {
    handleScroll: (scrollName: string) => void
}

export const Header: React.FC<IheraderProp> = ({ handleScroll }) => {

    const [isSmall, setIsSmall] = useState<boolean>(false); 
    const [isScroll, setIsScroll] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const handleResize = () => {
                setIsSmall(window.innerWidth < 768);

                if (window.innerWidth > 768) {
                    setIsMenuOpen(false);
                }
            };

            const handleScroll = () => {
                setIsScroll(window.scrollY > 0);
            };

            handleResize();
            handleScroll();

            window.addEventListener("resize", handleResize);
            window.addEventListener("scroll", handleScroll);

            return () => {
                window.removeEventListener("resize", handleResize);
                window.removeEventListener("scroll", handleScroll);
            };
        }
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <>
            <header className={`${styles.wrapper} ${isScroll || isMenuOpen ? styles.headerScroll : ""}`}>
                <div className={`container ${styles.header}`}>
                    <div className={styles.header__logo}>
               
                        <h2 style={{color: 'white'}} onClick={() => handleScroll('main')}>
                            <FaKeycdn color='white' fontSize={'20px'}/> Лого
                        </h2>
                    </div>
                    {
                        !isSmall ?
                            <nav className={styles.header__menu}>
                                <ul className={styles.menu__list}>
                                    <li className={styles.list__item}>
                                        <p onClick={() => handleScroll('services')}>Услуги</p>
                                    </li>
                                    <li onClick={() => handleScroll('price')} className={styles.list__item}>
                                        <p>Цены</p>
                                    </li>
                                    <li className={styles.list__item}>
                                        <p>Наши работы</p>
                                    </li>
                                    <li onClick={() => handleScroll('contacts')} className={styles.list__item}>
                                        <p>Контакты</p>
                                    </li>
                                </ul>
                            </nav>
                            :
                            (isMenuOpen ? <IoMdClose color='#d7ccc8' size={25} onClick={toggleMenu} /> : <IoMenu color='#d7ccc8' size={25} onClick={toggleMenu} />)
                    }
                </div>
            </header>
            <Menu toggleMenu={toggleMenu} handleScroll={handleScroll} isOpen={isMenuOpen} />
        </>
    )
}
