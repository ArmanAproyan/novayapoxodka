'use client'
import styles from './style.module.scss';
import { Header } from '../Header/Header';
import Main from '../main/Main';
import { Services } from '../Services/Services';
import Footer from '../Footer/Footer';
import { useEffect, useRef, useState } from 'react';
import PriceList from '../PriceList/PriceList';

 const MainPage = () => {
  const serviceScrollRef = useRef<null | HTMLDivElement>(null);
  const mainScrollRef = useRef<null | HTMLDivElement>(null);
  const priceScrollRef = useRef<null | HTMLDivElement>(null);
  const contactsScrollRef = useRef<null | HTMLDivElement>(null);

  const [isScrolls, setIsScrolls] = useState([
    { name: 'services', start: false, ref: serviceScrollRef },
    { name: 'main', start: false, ref: mainScrollRef },
    { name: 'price', start: false, ref: priceScrollRef},
    { name: 'contacts', start: false, ref: contactsScrollRef}
  ]);

  const handleScroll = (scrollName: string) => {
    const updateScrolls = isScrolls.map((val) => {
      if (scrollName == val.name) {
        return { ...val, start: true }
      }
      return { ...val }
    })
    setIsScrolls(updateScrolls)
    setTimeout(() => {
      setIsScrolls(isScrolls.map((val) => {
        return { ...val, start: false }
      }))
    }, 500)
  };

  useEffect(() => {
    isScrolls.forEach((val) => {
      if (val.start == true && val.ref.current) {
        val.ref.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
        setTimeout(() => {
          window.scrollBy({ top: -100, behavior: 'smooth' });
        }, 700);
      }
    })
  }, [isScrolls])

  return (
    <div className={styles.wrapper}>
      <Header handleScroll={handleScroll} />
      <Main scrollRef={mainScrollRef} handleScroll={handleScroll} />
      {/* <About /> */}
      <Services scrollRef={serviceScrollRef} />
      <PriceList title='Ремонт Обуви' scrollRef={priceScrollRef}/>
      <PriceList title='Ремонт Ключей' scrollRef={priceScrollRef}/>
      <div className={styles.ddd}></div>
      <Footer scrollRef={contactsScrollRef} />
    </div>
  )
}

export default MainPage;