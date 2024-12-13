import styles from './style.module.scss';
import Slider from '../Slider/Slider';
import before from '../../assets/sliderImages/do.jpg'
import after from '../../assets/sliderImages/posle.avif'
import React from 'react';

interface IsliderBlockProp {
    scrollRef: React.RefObject<HTMLDivElement>
};


const SliderBlock: React.FC<IsliderBlockProp> = ({scrollRef}) => {
    return (
        <div ref={scrollRef} className={styles.container}>
            <div className={styles.text_block}>
                <h1>Наши работы</h1>
                <span>Перетащите ползунок влево или вправо, чтобы увидеть результат "до" и "после"</span>
            </div>
            <Slider before={before.src} after={after.src}/>
            <Slider before={before.src} after={after.src}/>
            <Slider before={before.src} after={after.src}/>
            <Slider before={before.src} after={after.src}/>
        </div>
    )
};


export default SliderBlock;