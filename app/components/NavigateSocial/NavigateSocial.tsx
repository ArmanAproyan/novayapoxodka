import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SpeedDial, { SpeedDialProps } from '@mui/material/SpeedDial';
import { useState } from 'react';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { FaWhatsapp, FaTelegramPlane, FaViber } from "react-icons/fa";

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
  },
}));

const actions = [
  { icon: <FaWhatsapp style={{ fontSize: '30px', color: 'green' }} />, name: 'Whatsapp' },
  { icon: <FaTelegramPlane style={{ fontSize: '30px', color: 'blue' }} />, name: 'Telegram' },
  { icon: <FaViber style={{ fontSize: '30px', color: 'purple' }} />, name: 'Viber' }
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
      window.location.href = 'https://wa.me/+37477224095?text=%D0%97%D0%B4%D1%80%D0%B0%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%20%D1%85%D0%BE%D1%87%D1%83%20%D1%81%D0%BF%D1%80%D0%BE%D1%81%D0%B8%D1%82%D1%8C';
    }
    if (name == 'Viber') {
      window.location.href = 'viber://chat?number=%2B37477224095';
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
