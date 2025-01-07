'use client';

import { Header } from '../Header/Header';
import Main from '../main/Main';
import { Services } from '../Services/Services';
import Footer from '../Footer/Footer';
import { useEffect, useRef, useState } from 'react';
import PriceList from '../PriceList/PriceList';
import { priceList } from '@/app/constants/priceList';
import { ToastContainer } from 'react-toastify';
import AccardionAnswer from '../AccardionAnswer/AccardionAnswer.';
import ReviewForm from '../ReviewForm/ReviewForm';
import 'react-toastify/dist/ReactToastify.css';
import SliderBlock from '../SliderBlock/SliderBlock';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

const NavigateSocial = dynamic(() => import('../NavigateSocial/NavigateSocial'));

import styles from './style.module.scss';

const MainPage = () => {
  const serviceScrollRef = useRef<HTMLDivElement>(null);
  const mainScrollRef = useRef<HTMLDivElement>(null);
  const priceScrollRef = useRef<HTMLDivElement>(null);
  const contactsScrollRef = useRef<HTMLDivElement>(null);
  const reviewsScrollRef = useRef<HTMLDivElement>(null);
  const beforeAfterScrollRef = useRef<HTMLDivElement>(null);
  const [currentPosition, setCurrentPosition] = useState(0);

  const [isScrolls, setIsScrolls] = useState([
    { id: 1, name: 'services', start: false, ref: serviceScrollRef },
    { id: 2, name: 'main', start: false, ref: mainScrollRef },
    { id: 3, name: 'price', start: false, ref: priceScrollRef },
    { id: 4, name: 'contacts', start: false, ref: contactsScrollRef },
    { id: 5, name: 'reviews', start: false, ref: reviewsScrollRef },
    { id: 6, name: 'beforeAfter', start: false, ref: beforeAfterScrollRef },
  ]);


  const handleScroll = (scrollName: string) => {
    const findedElement = isScrolls.find((element) => element.name === scrollName);
    const y = findedElement?.ref.current?.offsetTop;
    if (y !== undefined) {
      window.scrollTo({ top: y - 100, behavior: 'smooth' });
      setCurrentPosition(y - 100);
    }
  };

  return (
    <>
      <Head>
        <title>Ремонт обуви и изготовление ключей | Новая Походка</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta
          name="description"
          content="Мы предоставляем услуги по ремонту обуви и изготовлению ключей. Работает с 11:00 до 20:00 без выходных."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Ремонт обуви и изготовление ключей | Новая Походка"
        />
        <meta
          property="og:description"
          content="Мы предоставляем услуги по ремонту обуви и изготовлению ключей. Работает с 11:00 до 20:00 без выходных."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yoursite.com" />
        <meta property="og:image" content="/images/logo.png" />
      </Head>

      <div className={styles.wrapper}>
        <Header handleScroll={handleScroll} />
        <Main scrollRef={mainScrollRef} handleScroll={handleScroll} />
        <Services scrollRef={serviceScrollRef} />
        <SliderBlock scrollRef={beforeAfterScrollRef} />
        <NavigateSocial />
        <PriceList scrollRef={priceScrollRef} prices={priceList} />
        <AccardionAnswer />
        <VideoPlayer/>
        <ReviewForm scrollRef={reviewsScrollRef} />
        <Footer scrollRef={contactsScrollRef} />
        <ToastContainer />
      </div>
    </>
  );
};

export default MainPage;
