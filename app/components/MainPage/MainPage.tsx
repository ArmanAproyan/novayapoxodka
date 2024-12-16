'use client';

import { Header } from '../Header/Header';
import Main from '../main/Main';
import { Services } from '../Services/Services';
import Footer from '../Footer/Footer';
import { useRef, useState } from 'react';
import PriceList from '../PriceList/PriceList';
import { priceList } from '@/app/constants/priceList';
import { ToastContainer } from 'react-toastify';
import AccardionAnswer from '../AccardionAnswer/AccardionAnswer.';
import ReviewForm from '../ReviewForm/ReviewForm';
import 'react-toastify/dist/ReactToastify.css';
import SliderBlock from '../SliderBlock/SliderBlock';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const NavigateSocial = dynamic(() => import('../NavigateSocial/NavigateSocial'),{
  ssr: false
});

import styles from './style.module.scss';

const MainPage = () => {
  const serviceScrollRef = useRef<null | HTMLDivElement>(null);
  const mainScrollRef = useRef<null | HTMLDivElement>(null);
  const priceScrollRef = useRef<null | HTMLDivElement>(null);
  const contactsScrollRef = useRef<null | HTMLDivElement>(null);
  const reviewsScrollRef = useRef<null | HTMLDivElement>(null);
  const beforeAfterScrollRef = useRef<null | HTMLDivElement>(null);
  const [currentPosition, setCurrentPosition] = useState(0)

  const [isScrolls, setIsScrolls] = useState([
    { name: 'services', start: false, ref: serviceScrollRef },
    { name: 'main', start: false, ref: mainScrollRef },
    { name: 'price', start: false, ref: priceScrollRef },
    { name: 'contacts', start: false, ref: contactsScrollRef },
    { name: 'reviews', start: false, ref: reviewsScrollRef},
    { name: 'beforeAfter', start: false, ref: beforeAfterScrollRef}
  ]);

  const handleScroll = (scrollName: string) => {
    const findedElement = isScrolls.find((element) => element.name === scrollName);
    const y: number | undefined = findedElement?.ref.current!.offsetTop;
    if (y) {
      window.scrollTo(currentPosition, Math.round(y - 100))
      setCurrentPosition(y - 100)
    }
  };

  return (
    <>
      <Head>
        <title>Ремонт обуви и изготовление ключей | Новая Походка</title>
        <meta name="description" content="Мы предоставляем услуги по ремонту обуви и изготовлению ключей. Работает с 11:00 до 20:00 без выходных." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Ремонт обуви и изготовление ключей | Новая Походка" />
        <meta property="og:description" content="Мы предоставляем услуги по ремонту обуви и изготовлению ключей. Работает с 11:00 до 20:00 без выходных." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yoursite.com" />
        <meta property="og:image" content="/path/to/logo.png" />
      </Head>

      <div className={styles.wrapper}>
        <Header handleScroll={handleScroll} />
        <Main scrollRef={mainScrollRef} handleScroll={handleScroll} />
        <Services scrollRef={serviceScrollRef} />
        <SliderBlock scrollRef={beforeAfterScrollRef}/>
        <NavigateSocial/>
        <PriceList scrollRef={priceScrollRef} prices={priceList}/>
        <AccardionAnswer/>
        <ReviewForm scrollRef={reviewsScrollRef}/>
        <Footer scrollRef={contactsScrollRef} />
        <ToastContainer />
      </div>
    </>
  )
}

export default MainPage;
