'use client'
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { acardionAnswerInfo } from '@/app/constants/acardionInfo';
import { FaArrowDown } from "react-icons/fa";
import styles from './style.module.scss'

const AccardionAnswer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.container__text_block}>
            <h1 style={{fontSize: '1.4rem'}}>Часто Задоваемые Вопросы</h1>
        </div>
        {acardionAnswerInfo.map((val,index) => {
            return (
                <div key={index}>
                <Accordion>
                <AccordionSummary
                  expandIcon={<FaArrowDown/>}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <span className={styles.question_text}>{val.question}</span>
                </AccordionSummary>
                <AccordionDetails>
                 <span className={styles.answer_text}>{val.answer}</span>
                </AccordionDetails>
              </Accordion>
              </div>
            )
        })}
    </div>
  );
};

export default AccardionAnswer;