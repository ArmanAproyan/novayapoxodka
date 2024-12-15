'use client';

import styles from './style.module.scss';
import IsOpen from '../isOpen/IsOpen';
import Head from 'next/head';

interface IheroProp {
    handleScroll: (scrollName: string) => void,
    scrollRef: React.RefObject<HTMLDivElement>
};

const Main: React.FC<IheroProp> = ({ scrollRef, handleScroll }) => {
    return (
        <>
            <Head>
                <title>Ремонт и реставрация обуви, изготовление ключей</title>
                <meta name="description" content="Предлагаем услуги по ремонту и реставрации обуви, а также изготовление ключей. График работы с 11:00 до 20:00 без выходных." />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Ремонт и реставрация обуви, изготовление ключей" />
                <meta property="og:description" content="Предлагаем услуги по ремонту и реставрации обуви, а также изготовление ключей. График работы с 11:00 до 20:00 без выходных." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.yoursite.com" />
                <meta property="og:image" content="/path/to/logo.png" />
            </Head>

            <main>
                <div className={styles.background}>
                    <div className={styles.layer}></div>
                </div>

                <section ref={scrollRef} className={`container ${styles.hero}`}>
                    <div className={styles.hero__content}>
                        <h1 className={styles.hero__title}>Ремонт и реставрация обуви, изготовление ключей</h1>
                        <p className={styles.hero__subtitle}>График работы с 11:00 до 20:00 без выходных</p>

                        <div className={styles.hero_isOpen}>
                            <IsOpen />
                        </div>

                        <div
                            onClick={() => handleScroll('services')}
                            className={styles.hero__btn}
                        >
                            Посмотреть услуги
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Main;
