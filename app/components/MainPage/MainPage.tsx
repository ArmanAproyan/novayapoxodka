'use client'
import { Header } from '../Header/Header';
import Main from '../main/Main';
import { Services } from '../Services/Services';
import Footer from '../Footer/Footer';
import { useRef, useState } from 'react';
import PriceList from '../PriceList/PriceList';
import { ToastContainer } from 'react-toastify';
import AccardionAnswer from '../AccardionAnswer/AccardionAnswer.';
import ReviewForm from '../ReviewForm/ReviewForm';
import 'react-toastify/dist/ReactToastify.css';

// import NavigateSocial from '../NavigateSocial/NavigateSocial';
import dynamic from 'next/dynamic';
const NavigateSocial = dynamic(() => import('../NavigateSocial/NavigateSocial'),{
  ssr: false
});
import PriceListNav from '../PriceListNav/PriceListNav';

import styles from './style.module.scss';
const MainPage = () => {
  const serviceScrollRef = useRef<null | HTMLDivElement>(null);
  const mainScrollRef = useRef<null | HTMLDivElement>(null);
  const priceScrollRef = useRef<null | HTMLDivElement>(null);
  const contactsScrollRef = useRef<null | HTMLDivElement>(null);
  const reviewsScrollRef = useRef<null | HTMLDivElement>(null);
  const [currentPosition, setCurrentPosition] = useState(0)

  const [isScrolls, setIsScrolls] = useState([
    { name: 'services', start: false, ref: serviceScrollRef },
    { name: 'main', start: false, ref: mainScrollRef },
    { name: 'price', start: false, ref: priceScrollRef },
    { name: 'contacts', start: false, ref: contactsScrollRef },
    { name: 'reviews', start: false, ref: reviewsScrollRef}
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
    <div className={styles.wrapper}>
      <Header handleScroll={handleScroll} />
      <Main scrollRef={mainScrollRef} handleScroll={handleScroll} />
      <Services scrollRef={serviceScrollRef} />
      <PriceListNav scrollRef={priceScrollRef}/>
      <AccardionAnswer/>
      <NavigateSocial/>
      <ReviewForm scrollRef={reviewsScrollRef}/>
      <Footer scrollRef={contactsScrollRef} />
      <ToastContainer />
    </div>
  )
}

export default MainPage;