import PropTypes from "prop-types";
import Link from 'next/link';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgChevronLeft } from 'react-icons/cg';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  backgroundColor : '#0C0F17',
  color : 'white',
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const AccordionStyle = styled(Accordion)(({ theme }) => ({
  boxShadow : 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
  borderRadius : 'none',
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummaryStyle = styled(AccordionSummary)(({ theme }) => ({
  backgroundColor:'rgba(0, 0, 0, .03)',
  '& .AccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .AccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}))

function Layout({children}) {
  // const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Box sx={{ display: 'flex', margin : '0 200px'}}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <GiHamburgerMenu/>
          </IconButton>
          <Link href="/"><a style={{color : 'white'}}><h3>NWAI-UI</h3></a></Link>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <CgChevronLeft/>
          </IconButton>
        </DrawerHeader>

        <Divider />

        <List>
          <ListItem button>
            <Link href="/getstart"><a><ListItemText primary="시작하기" /></a></Link>
          </ListItem>
        </List>

        <List>      
          <AccordionStyle>
          <AccordionSummaryStyle
            expandIcon={<CgChevronLeft />}
            aria-controls="componentsPaneld-content" 
            id="componentsPaneld-header">
            <div>Components</div>
          </AccordionSummaryStyle>
          <AccordionDetails>
            <ListItem button>
              <Link href="/components/theme"><a><ListItemText primary="테마 및 컬러" /></a></Link>
            </ListItem>
            </AccordionDetails>
          </AccordionStyle>
        </List>

        <List>      
          <AccordionStyle>
          <AccordionSummaryStyle 
            expandIcon={<CgChevronLeft />}
            aria-controls="examplesPaneld-content" 
            id="examplesPaneld-header">
            <div>Examples</div>
          </AccordionSummaryStyle>
          <AccordionDetails>
            <ListItem button>
              <Link href="/examples/login"><a><ListItemText primary="로그인" /></a></Link>
            </ListItem>
            </AccordionDetails>
          </AccordionStyle>
        </List>

        
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
    </div>
  )
}

Layout.propTypes = {
  children : PropTypes.node.isRequired,
}
export default Layout;