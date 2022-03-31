import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

// Code Content
function TabPanel(props) {
  const { children, value, index, id, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={id}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  id : PropTypes.string.isRequired,
};

export default function CodeTab({jsxCode, cssCode}) {
  const [value, setValue] = React.useState('0');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', height : '500px', overflow : 'scroll' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs  value={value} onChange={handleChange}>
          <Tab style={{color : 'white'}} label="JSX" id='jsxCode'/>
          <Tab style={{color : 'white'}} label="CSS" id='cssCode' />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} id="jsxCode">
        {jsxCode}
      </TabPanel>
      <TabPanel value={value} index={1} id="cssCode">
        {cssCode}
      </TabPanel>
    </Box>
  );
}
