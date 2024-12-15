import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PriceList from '../PriceList/PriceList';
import { priceList, keyRepairPriceList } from '@/app/constants/priceList';

interface IpriceListProp {
  scrollRef: React.RefObject<HTMLDivElement>
};


const PriceListNav: React.FC<IpriceListProp> = ({scrollRef}) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box ref={scrollRef} sx={{ width: '100%', background: 'white' }}>
      <Tabs style={{background: 'white'}} value={value} onChange={handleChange} centered>
        <Tab label="Ремонт Обуви" />
        <Tab label="Ремонт Ключей" />
      </Tabs>
      <PriceList prices={value ? keyRepairPriceList : priceList}/>
    </Box>
  );
};

export default PriceListNav;
