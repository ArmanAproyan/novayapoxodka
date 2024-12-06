'use client'
import { useEffect, useState } from 'react';

const IsOpen = () => {
    const [open, setOpen] = useState<string>('...');


    useEffect(() => {
        const time = new Date().getHours();
        if (time < 20 && time > 8) {
            setOpen('Открыто')
        } else {
            setOpen('Закрыто')
        }
    }, [])
    return (
        <div>
            <span
                style={{ color: open == 'Открыто' ? 'green' : 'red', fontWeight: 700, fontSize: '10px' }}>
                <b style={{ color: 'white' }}>сейчась </b>
                {open}
            </span>
        </div>
    )
};


export default IsOpen;