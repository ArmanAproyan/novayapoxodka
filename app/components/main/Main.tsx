import styles from './style.module.scss';
import IsOpen from '../isOpen/IsOpen';

interface IheroProp {
    handleScroll: (scrollName: string) => void,
    scrollRef: React.RefObject<HTMLDivElement>
};

const Main: React.FC<IheroProp> = ({scrollRef, handleScroll}) => {
    return (
        <main>
            <div className={styles.background}>
                <div className={styles.layer}></div>
            </div>

            <section ref={scrollRef} className={`container ${styles.hero}`}>
                <div className={styles.hero__content}>
                    <h1 className={styles.hero__title}>Ремонт обуви и ключей</h1>
                    <p className={styles.hero__subtitle}>График работы с 8:00 до 20:00</p>

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
    );
};

export default Main;
