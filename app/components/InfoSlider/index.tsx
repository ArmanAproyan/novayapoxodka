import { 
    defaultSettings,
    firstSliderData
} from "@/app/constants/slider/slidersSettings";
import Slider from "react-slick";

import styles from './infoSlider.module.scss';

const InfoSlider = () => {
    return (
        <div className={styles.info__slider__wrapper}>
            <Slider { ...defaultSettings }>
                {
                    firstSliderData.map(slider => {
                        return <div className={styles.slider__element__wrapper}>
                            <div className={styles.left__wrapper}>
                                <h3>{slider.title}</h3>
                                <span>{slider.description}</span>
                            </div>
                            <div className={styles.right__wrapper}>
                                <img src={slider.imgSrc} alt="slider image" />
                            </div>
                        </div>
                    })
                }
            </Slider>
        </div>
    )
};

export default InfoSlider;