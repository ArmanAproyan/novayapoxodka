import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SpeedDial, { SpeedDialProps } from '@mui/material/SpeedDial';
import { useState } from 'react';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { FaWhatsapp, FaViber } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";


const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: 'absolute',
  '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
    top: theme.spacing(2),
    left: theme.spacing(2),
  },
  '& .MuiSpeedDial-fab': {
    backgroundColor: 'green',
    color: 'white',
  }
}));


const navigationSocial = {
  whatsapp: 'https://wa.me/79112760414',
  viber: 'viber://chat?number=79112760414',
  email: 'mailto:aaproyan@bk.ru'
};


const actions = [
  { icon: <FaWhatsapp style={{ fontSize: '30px', color: 'green' }} />, name: 'Whatsapp' },
  { icon: <FaViber style={{ fontSize: '30px', color: 'purple' }} />, name: 'Viber' },
  { icon: <MdOutlineAlternateEmail style={{fontSize: '30px', color: 'blue'}}/>, name: 'email'}
];

const NavigateSocial = () => {
  const [direction, setDirection] = useState<SpeedDialProps['direction']>('up');
  const [hidden, setHidden] = useState<boolean>(false);

  const handleDirectionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDirection(
      (event.target as HTMLInputElement).value as SpeedDialProps['direction'],
    );
  };

  const handleNavigate = (name: string) => {
    if (name == 'Whatsapp') {
      window.location.href = navigationSocial.whatsapp;
    }
    if (name == 'Viber') {
      window.location.href = navigationSocial.viber;
    }
    if(name == 'email') {
      window.location.href = navigationSocial.email
    }
  };

  return (
    <div style={{ position: 'fixed', bottom: '0', right: '5px', zIndex: '1' }}>
      <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
        <Box sx={{ position: 'relative', mt: 3, height: 320, background: 'green' }}>
          <StyledSpeedDial
            ariaLabel="SpeedDial playground example"
            hidden={hidden}
            icon={<FaWhatsapp style={{ fontSize: '40px' }} />}
            direction={direction}
          >
            {actions.map((action) => (
              <SpeedDialAction
                style={{ zIndex: '333' }}
                onClick={() => handleNavigate(action.name)}
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
              />
            ))}
          </StyledSpeedDial>
        </Box>
      </Box>
    </div>
  );
};

export default NavigateSocial;
