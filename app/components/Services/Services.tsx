import styles from "./style.module.scss";
import { IoKeyOutline } from "react-icons/io5";
import { PiBoot } from "react-icons/pi";
import { MdOutlineCleanHands } from "react-icons/md";
import { FaKeycdn } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { PiCarBattery } from "react-icons/pi";
import { GiBeltArmor } from "react-icons/gi";

interface IservicesProp {
    scrollRef: React.RefObject<HTMLDivElement>;
}

const servicesData = [
    {
        icon: <PiBoot fontSize={'70px'} />,
        title: 'Ремонт обуви',
        description: 'Ремонт обуви быстро и качественно. Восстановление внешнего вида и функциональности.',
    },
    {
        icon: <IoKeyOutline fontSize={'70px'} style={{ marginTop: '10px' }} />,
        title: 'Изготовление ключей',
        description: 'Изготовление ключей быстро и качественно. Восстановление работоспособности любых типов ключей.',
    },
    {
        icon: <MdOutlineCleanHands fontSize={'70px'} />,
        title: 'Химчистка и покраска обуви',
        description: 'Химчистка и полировка обуви. Уход, восстановление блеска и свежести.',
    },
    {
        icon: <FaKeycdn fontSize={'70px'} />,
        title: 'Изготовление ключей для домофонов',
        description: 'Изготовление ключей для домофонов быстро и надежно. Гарантия совместимости и качества.',
    },
    {
        icon: <IoBagOutline fontSize={'70px'} />,
        title: 'Ремонт сумок и чемоданов',
        description: 'Восстановление и реставрация аксессуаров, возвращение им прежнего вида и функциональности.',
    },
    {
        icon: <PiCarBattery fontSize={'70px'} />,
        title: 'Замена батареек',
        description: 'Предлагаем услугу Замена батареек.',
    },
    {
        icon: <GiBeltArmor fontSize={'70px'} />,
        title: 'Замена ремешков на часах',
        description: 'Замена ремешков на часах для восстановления их внешнего вида и удобства ношения.',
    }
];

export const Services: React.FC<IservicesProp> = ({ scrollRef }) => {

    return (
        <section ref={scrollRef} className={styles.wrapper}>
            <div className={`container ${styles.services}`}>
                <div className={styles.services__text}>
                    <h2 style={{ textTransform: 'uppercase' }} className={`title ${styles.text__title}`}>Наши услуги</h2>
                    <div className={styles.subtitle_wrapper}>
                        <p className={`subtitle ${styles.text__subtitle}`}>
                            Мы предлагаем: ремонт обуви, Химчистка и покраска обуви, Изготовление ключей, Ремонт сумок и чемоданов, Замена батареек,Замена ремешков на часах.
                        </p>
                    </div>

                </div>

                <div className={styles.services__info}>
                    {servicesData.map((service, index) => (
                        <div key={index} className={styles.info__block}>
                            <div className={styles.block__header}>
                                <div className={styles.header__icon}>
                                    {service.icon}
                                </div>
                                <h3 className={styles.header__title}>{service.title}</h3>
                            </div>
                            <div className={styles.block__text}>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
