import * as React from 'react';
import styles from './style.module.scss';
import dynamic from 'next/dynamic';
import { toast } from 'react-toastify';
import { FaRegCopy } from "react-icons/fa6";
import Head from 'next/head';

const Map = dynamic(() => import('../Map/Map'), { ssr: false });

interface IfooterProp {
    scrollRef: React.RefObject<HTMLDivElement>;
}

const Footer: React.FC<IfooterProp> = ({ scrollRef }) => {

    const [isCopied, setIsCopied] = React.useState<boolean>(false);


    const navigation = {
        facebook: 'https://www.facebook.com/vahagn.stepanyan.37?locale=ru_RU',
        instagram: 'https://www.instagram.com/stepanyan_vahagn/'
    };

    const handleCopy = () => {
        navigator.clipboard.writeText('+7 (911) 276-04-14')
            .then(() => {
                setIsCopied(true);
                toast.success('Номер скопирован!', { position: "top-right", autoClose: 1200 });
            })
            .catch((err) => console.error('Ошибка копирования: ', err));
    };

    // Структурированные данные для SEO
    const contactSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Новая Походка",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "ул.12/4, ул.16/2, ул.15",
            "addressLocality": "Санкт-Петербург",
            "addressCountry": "Россия"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+7 (911) 276-04-14",
            "contactType": "customer service"
        },
        "sameAs": [
            "https://www.facebook.com/yourprofile",
            "https://www.twitter.com/yourprofile",
            "https://www.instagram.com/yourprofile"
        ]
    };

    return (
        <>
            <Head>
                <title>Контакты - Новая Походка</title>
                <meta name="description" content="Контакты и адрес компании Новая Походка. Узнайте, как с нами связаться." />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Контакты - Новая Походка" />
                <meta property="og:description" content="Контакты и адрес компании Новая Походка. Узнайте, как с нами связаться." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.yoursite.com/contacts" />
                <script type="application/ld+json">{JSON.stringify(contactSchema)}</script>
            </Head>

            <footer ref={scrollRef} className={styles.footer}>
                <div className={styles.footer__container}>
                    <div className={styles.footer__section}>
                        <h4 className={styles.footer__title}>Адрес</h4>
                        <p className={styles.footer__text}>
                            Проспект Ветеранов, 101, 1 этаж, левое крыло
                            <br />
                            Проспект Металлистов, 65
                        </p>
                    </div>
                    <div className={styles.footer__section}>
                        <h4 className={styles.footer__title}>Контакты</h4>
                        <ul className={styles.footer__list}>
                            <li className={styles.footer__item}>Email: vaag-vaag@mail.ru</li>
                            <li onClick={handleCopy} className={styles.footer__item}>
                                Телефон: +7 (911) 276-04-14 <FaRegCopy />
                            </li>
                        </ul>
                    </div>
                </div>
                <Map />

                <div className={styles.footer_container2}>
                    <div className={styles.footer__section}>
                        <h4 className={styles.footer__title}>Следите за нами</h4>
                        <div className={styles.footer__socials}>
                            <a href={navigation.facebook} className={styles.footer__link} target="_blank" rel="noopener noreferrer">Facebook</a>
                            <a href={navigation.instagram} className={styles.footer__link} target="_blank" rel="noopener noreferrer">Instagram</a>
                        </div>
                    </div>
                </div>
                <div className={styles.footer__copyright}>
                    &copy; 2025 Все права защищены.
                </div>
            </footer>
        </>
    );
};

export default Footer;
