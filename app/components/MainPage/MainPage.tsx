'use client';

import { Header } from '../Header/Header';
import Main from '../main/Main';
import { Services } from '../Services/Services';
import Footer from '../Footer/Footer';
import { useRef, useCallback } from 'react';
import PriceList from '../PriceList/PriceList';
import { priceList } from '@/app/constants/priceList';
import { ToastContainer } from 'react-toastify';
import AccardionAnswer from '../AccardionAnswer/AccardionAnswer.';
import ReviewForm from '../ReviewForm/ReviewForm';
import 'react-toastify/dist/ReactToastify.css';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import { Suspense } from 'react';
import NavigateSocial from '../NavigateSocial/NavigateSocial';

const SliderBlock = dynamic(() => import('../SliderBlock/SliderBlock'), {
  ssr: true,
  loading: () => <p>Загрузка...</p>,
});

import styles from './style.module.scss';

const MainPage = () => {
  const serviceScrollRef = useRef<HTMLDivElement>(null);
  const mainScrollRef = useRef<HTMLDivElement>(null);
  const priceScrollRef = useRef<HTMLDivElement>(null);
  const contactsScrollRef = useRef<HTMLDivElement>(null);
  const reviewsScrollRef = useRef<HTMLDivElement>(null);
  const beforeAfterScrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback((scrollName: string) => {
    const findedElement = [
      { name: 'services', ref: serviceScrollRef },
      { name: 'main', ref: mainScrollRef },
      { name: 'price', ref: priceScrollRef },
      { name: 'contacts', ref: contactsScrollRef },
      { name: 'reviews', ref: reviewsScrollRef },
      { name: 'beforeAfter', ref: beforeAfterScrollRef },
    ].find((element) => element.name === scrollName);

    if (findedElement && findedElement.ref.current) {
      const y = findedElement.ref.current.offsetTop;
      window.scrollTo({ top: y - 100, behavior: 'smooth' });
    }
  }, []);

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
        <Suspense fallback={'Загрузка...'}>
          <SliderBlock scrollRef={beforeAfterScrollRef} />
        </Suspense>
        <NavigateSocial />
        <PriceList scrollRef={priceScrollRef} prices={priceList} />
        <AccardionAnswer />
        <VideoPlayer />
        <ReviewForm scrollRef={reviewsScrollRef} />
        <Footer scrollRef={contactsScrollRef} />
        <ToastContainer />
      </div>
    </>
  );
};

export default MainPage;
