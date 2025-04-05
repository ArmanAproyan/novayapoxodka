import * as React from 'react';
import Head from 'next/head'; 
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { acardionAnswerInfo } from '@/app/constants/acardionInfo';
import { FaArrowDown } from "react-icons/fa";
import styles from './style.module.scss';

const AccardionAnswer = () => {
  return (
    <>
      <Head>
        <title>Часто задаваемые вопросы - Название вашего сайта</title>
        <meta name="description" content="Часто задаваемые вопросы о наших услугах. Узнайте ответы на популярные вопросы!" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Часто задаваемые вопросы" />
        <meta property="og:description" content="Часто задаваемые вопросы о наших услугах. Узнайте ответы на популярные вопросы!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yoursite.com/faq" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Часто задаваемые вопросы" />
        <meta name="twitter:description" content="Часто задаваемые вопросы о наших услугах. Узнайте ответы на популярные вопросы!" />
      </Head>

      <div className={styles.container}>
        <div className={styles.container__text_block}>
            <h1 style={{fontSize: '1.6rem', textTransform: 'uppercase'}}>Часто задаваемые вопросы</h1>
        </div>
        {acardionAnswerInfo.map((val, index) => {
            return (
                <div style={{marginTop: '20px'}} key={index}>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<FaArrowDown />}
                      aria-controls={`panel${index}-content`}
                      id={`panel${index}-header`}  
                    >
                      <span className={styles.question_text}>{val.question}</span>
                    </AccordionSummary>
                    <AccordionDetails>
                      <span className={styles.answer_text}>{val.answer}</span>
                    </AccordionDetails>
                  </Accordion>
                </div>
            );
        })}
      </div>
    </>
  );
};

export default AccardionAnswer;
