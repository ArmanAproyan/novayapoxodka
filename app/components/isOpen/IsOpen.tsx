'use client'
import { useEffect, useState } from 'react';
import styles from './style.module.scss';

const IsOpen = ({openTime,closeTime}: {openTime: number, closeTime: number}) => {
    const [open, setOpen] = useState<string>('...');


    useEffect(() => {
        const timeNow = new Date().getHours();
        if (timeNow < closeTime && timeNow > openTime) {
            setOpen('Открыто')
        } else {
            setOpen('Закрыто')
        }
    }, [])
    return (
        <div className={styles.is_open_text}>
            <span
                
                style={{ color: open == 'Открыто' ? 'green' : 'red' }}>
                {open}
            </span>
        </div>
    )
};


export default IsOpen;