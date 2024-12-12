import styles from './style.module.scss';
import { IoPerson } from "react-icons/io5";
import { MdPerson3 } from "react-icons/md";
import { reviews, Ireviews } from '@/app/constants/reviews';
import { useEffect, useState } from 'react';

interface IreviewsProp {
  scrollRef: React.RefObject<HTMLDivElement>
};



const ReviewForm: React.FC<IreviewsProp> = ({ scrollRef }) => {

  const [showMore, setShowMore] = useState<boolean>(false);
  const [fakeReviews, setFakeReviews] = useState<Ireviews[]>([]);


  useEffect(() => {
    if (!showMore) {
      const updatedReviews = reviews.slice(0, 5);
      setFakeReviews(updatedReviews)
    }
    else {
      setFakeReviews(reviews)
    }
  }, [showMore]);

  const clickTiWriteReview = () => {
    window.location.href = 'mailto:aaproyan@bk.ru'
  };

  const handleChangeShowMore = () => {
    if (showMore) {
      scrollRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })

    }
    setShowMore(!showMore)
  };

  return (
    <div ref={scrollRef} className={styles.reviewForm}>
      <h2 className={styles.reviewForm__title}>Отзывы</h2>
      <div className={styles.reviewForm__reviews}>
        {fakeReviews && fakeReviews.map((item, index) => {
          return (
            <div key={index} className={styles.reviewForm__reviews__item}>
              <div className={styles.reviewForm__authorBlock}>
                <div className={styles.reviewForm__authorBlock__image}>
                  {item.gender == 'male' ? <IoPerson fontSize={'30px'} /> : <MdPerson3 fontSize={'30px'} />}
                </div>
                <div className={styles.reviewForm__authorBlock__name}>{item.name}</div>
              </div>
              <div className={styles.reviewForm__fakeReview}>
                {item.review}
              </div>
            </div>
          );
        })}

      </div>
      <span style={{ cursor: 'pointer', marginTop: '30px' }} onClick={handleChangeShowMore}>{showMore ? "Показать меньше" : "Показать еще"}</span>

      <p style={{ fontWeight: 400 }}>
        Если вы хотите оставить отзыв, нажмите{' '}
        <strong onClick={clickTiWriteReview} style={{ fontWeight: '600', cursor: 'pointer' }}>Здесь</strong>
      </p>
    </div>
  );
};

export default ReviewForm;
