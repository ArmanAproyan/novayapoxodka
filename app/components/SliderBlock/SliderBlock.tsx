import styles from './style.module.scss';
import Slider from '../Slider/Slider';
import before1 from '../../assets/sliderImages/before1.jpg'
import after1 from '../../assets/sliderImages/after1.jpg'
import before2 from '../../assets/sliderImages/before2.png'
import after2 from '../../assets/sliderImages/after2.jpg'
import before4 from '../../assets/sliderImages/before4.png'
import after4 from '../../assets/sliderImages/after4.png'
import before3 from '../../assets/sliderImages/before3.jpg'
import after3 from '../../assets/sliderImages/after3.jpg'
import React from 'react';

interface IsliderBlockProp {
    scrollRef: React.RefObject<HTMLDivElement>
};


const SliderBlock: React.FC<IsliderBlockProp> = ({scrollRef}) => {
    return (
        <div ref={scrollRef} className={styles.container}>
            <div className={styles.text_block}>
                <h1 style={{textTransform: 'uppercase'}}>Наши работы</h1>
                <span>Перетащите ползунок влево или вправо, чтобы увидеть результат "до" и "после"</span>
            </div>
            <Slider before={before4.src} after={after4.src}/>
            <Slider before={before1.src} after={after1.src}/>
            <Slider before={before2.src} after={after2.src}/>
            <Slider before={before3.src} after={after3.src}/>
        </div>
    )
};


export default SliderBlock;