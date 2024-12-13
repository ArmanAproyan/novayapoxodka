import React from 'react';
import CompareImage from 'react-compare-image'; 
import styles from './style.module.scss';

interface ISliderProps {
    before: string,
    after: string
}

const Slider: React.FC<ISliderProps> = ({before,after}) => {
  return (
    <div className={styles.container}>
        <div className={styles.text_block}>
          
        </div>
    <div className={styles.container__wraperr}>
      <CompareImage
        leftImage={before} 
        rightImage={after} 
        sliderLineColor="rgba(255, 255, 255, 0.8)" 
        sliderLineWidth={4}
      />

    </div>
    </div>
  );
};

export default Slider;
