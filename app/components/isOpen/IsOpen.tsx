'use client'
import { useEffect, useState } from 'react';

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
        <div>
            <span
                style={{ color: open == 'Открыто' ? 'green' : 'red', fontWeight: 700, fontSize: '8px' }}>
                <b style={{ color: 'white' }}> </b>
                {open}
            </span>
        </div>
    )
};


export default IsOpen;