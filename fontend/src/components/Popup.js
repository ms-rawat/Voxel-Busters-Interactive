import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import BookIcon from '@mui/icons-material/Book';
import ListAltIcon from '@mui/icons-material/ListAlt';
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShowChartIcon from '@mui/icons-material/ShowChart';

import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Popup = ({ data, children }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {children({ handleOpenModal })}
      <Modal
        open={isOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <IconButton
            edge="end"
            
            color="inherit"
            onClick={handleCloseModal}
            aria-label="close"
            sx={{ position: 'absolute', top: 0, right: 0 ,'margin-right':'3px'}}
          >
            <CloseIcon />
          </IconButton>
          <Typography id="modal-modal-title" variant="h6" component="h2" className='flex flex-row  justify-between'>
          <div> <BookIcon fontSize="small" sx={{ mr: 2 }} />
            {data.StartupName}
            </div>
            <div>
             Established: {data.Date}
            </div>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div>
              <BusinessIcon fontSize="small" sx={{ mr: 2 }} />
              Industry: {data.IndustryVertical}
            </div>
            <div>
              <ListAltIcon fontSize="small" sx={{ mr: 2 }} />
              SubVertical: {data.SubVertical}
            </div>
            <div>
              <LocationOnIcon fontSize="small" sx={{ mr: 2 }} />
              Location: {data.CityLocation}
            </div>
            <div>
              <PersonOutlineIcon fontSize="small" sx={{ mr: 2 }} />
              Investor: {data.InvestorsName}
            </div>
            <div>
              <HeadsetMicIcon fontSize="small" sx={{ mr: 2 }} />
              Investment Type: {data.InvestmentType}
            </div>
            <div>
              <AttachMoneyIcon  fontSize="small" sx={{ mr: 2 }} />
              Amount: {data.AmountInUSD} USD
            </div>
            <div>
              <ShowChartIcon fontSize="small" sx={{ mr: 2 }} />
              Investment Growth: {data.GrowthRate}%
            </div>
            <div>
              <ChatBubbleOutlineIcon fontSize="small" sx={{ mr: 2 }} />
              Remark: {data.Remark}
            </div>
            <div>
              <LightbulbIcon fontSize="small" sx={{ mr: 2 }} />
              Key Takeaways: {data.KeyTakeaways}
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default Popup;
