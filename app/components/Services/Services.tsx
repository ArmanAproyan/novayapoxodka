import styles from "./style.module.scss";
import { IoKeyOutline } from "react-icons/io5";
import { PiBoot } from "react-icons/pi";
import { MdOutlineCleanHands } from "react-icons/md";
import { FaKeycdn } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";

interface IservicesProp {
    scrollRef: React.RefObject<HTMLDivElement>
};


export const Services: React.FC<IservicesProp> = ({scrollRef}) => {

    return (
        <section ref={scrollRef} className={styles.wrapper}>
            <div className={`container ${styles.services}`}>
                <div className={styles.services__text}>
                    <h2 className={`title ${styles.text__title}`}>Наши услуги</h2>
                    <p className={`subtitle ${styles.text__subtitle}`}>
                    Мы предлагаем: ремонт обуви, чистку и полировку, изготовление и ремонт ключей.
                    </p>
                </div>

                <div className={styles.services__info}>
                    <div className={styles.info__block}>
                        <div className={styles.block__header}>
                            <div className={styles.header__icon}>
                                <PiBoot fontSize={'70px'}/>
                            </div>
                            <h3 className={styles.header__title}>Ремонт обуви</h3>
                        </div>
                        <div className={styles.block__text}>
                            <p>Ремонт обуви быстро и качественно. Восстановление внешнего вида и функциональности.ы</p>
                        </div>
                    </div>

                    <div className={styles.info__block}>
                        <div className={styles.block__header}>
                            <div className={styles.header__icon}>
                                <IoKeyOutline fontSize={'70px'} style={{marginTop: '10px'}}/>
                            </div>
                            <h3 className={styles.header__title}>Изготовление ключей</h3>
                        </div>
                        <div className={styles.block__text}>
                            <p>Изготовление ключей быстро и качественно. Восстановление работоспособности любых типов ключей</p>
                        </div>
                    </div>

                    <div className={styles.info__block}>
                        <div className={styles.block__header}>
                            <div className={styles.header__icon}>
                                <MdOutlineCleanHands fontSize={'70px'}/>
                            </div>
                            <h3 className={styles.header__title}>Химчистка и покраска обуви</h3>
                        </div>
                        <div className={styles.block__text}>
                           <p>Химистка и полировка обуви. Уход, восстановление блеска и свежести.</p>
                        </div>
                    </div>

                    <div className={styles.info__block}>
                        <div className={styles.block__header}>
                            <div className={styles.header__icon}>
                                <FaKeycdn fontSize={'70px'}/>
                            </div>
                            <h3 className={styles.header__title}>Изготовление ключей для домофонов</h3>
                        </div>
                        <div className={styles.block__text}>
                            <p>Изготовление ключей для домофонов быстро и надежно. Гарантия совместимости и качества</p>
                        </div>
                    </div>
                    <div className={styles.info__block}>
                        <div className={styles.block__header}>
                            <div className={styles.header__icon}>
                                <IoBagOutline fontSize={'70px'}/>
                            </div>
                            <h3 className={styles.header__title}>Ремонт сумок и чемоданов</h3>
                        </div>
                        <div className={styles.block__text}>
                           <p>Восстановление и реставрация аксессуаров, возвращение им прежнего вида и функциональности</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
