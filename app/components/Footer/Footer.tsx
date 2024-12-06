'use client'
import styles from './style.module.scss';
import React, { useState } from 'react';
import Map from '../Map/Map';

interface IfooterProp {
    scrollRef: React.RefObject<HTMLDivElement>
};


const Footer: React.FC<IfooterProp> = ({scrollRef}) => {

    const [isCopied, setIsCopied] = useState<boolean>(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('+7 (911) 276-04-14')
            .then(() => {
                setIsCopied(true);
                setTimeout(() => setIsCopied(false), 2000);
            })
            .catch((err) => console.error('Ошибка копирования: ', err));
    };

    return (
        <footer ref={scrollRef} className={styles.footer}>
            <div className={styles.footer__container}>
                <div className={styles.footer__section}>
                    <h4 className={styles.footer__title}>Адрес</h4>
                    <p className={styles.footer__text}>
                        Санкт-Петербург, ул.12/4
                        <br />
                        Санкт-Петербург, Улянка, ул.1
                    </p>
                </div>
                <div className={styles.footer__section}>
                    <h4 className={styles.footer__title}>Контакты</h4>
                    <ul className={styles.footer__list}>
                        <li className={styles.footer__item}>Email: armanaproyan114@gmai.com</li>
                        <li onClick={handleCopy} className={styles.footer__item}>
                            Телефон: +7 (911) 276-04-14
                            {isCopied && <span className={styles.footer__copiedMessage}> — Номер скопирован!</span>}
                        </li>
                    </ul>
                </div>
            </div>
            <Map />

            <div className={styles.footer_container2}>
            <div className={styles.footer__section}>
                <h4 className={styles.footer__title}>Следите за нами</h4>
                <div className={styles.footer__socials}>
                    <a href="#" className={styles.footer__link}>Facebook</a>
                    <a href="#" className={styles.footer__link}>Twitter</a>
                    <a href="#" className={styles.footer__link}>Instagram</a>
                </div>
            </div>
            </div>
            <div className={styles.footer__copyright}>
                &copy; 2024 Все права защищены.
            </div>
        </footer>
    );
};

export default Footer;
