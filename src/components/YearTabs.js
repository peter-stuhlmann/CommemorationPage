import React, { useRef, Fragment } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Container } from './Container';
import Box from '@material-ui/core/Box';
import ArchiveTable from './ArchiveTable';
import { colors, font, screen } from '../helpers/variables';

function TabPanel(props) {
  const { children, value, index } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const StyledAppBar = styled(AppBar)({
  backgroundColor: 'white',
  position: 'sticky',
  top: (props) =>
    window.innerWidth >= parseInt(screen.desktop) || props.shownavbar === 'true'
      ? '64px'
      : '0px',
  zIndex: '1010',
  transition: 'top 0.1s ease-out',
  left: 0,
  right: 0,
  '& button': {
    boxShadow: 'none',
  },
});

const StyledTabs = styled(Tabs)({
  '& .MuiTab-textColorInherit': {
    color: font.color.primary,
    opacity: 1,
  },
  '& .Mui-selected': {
    color: font.color.secondary,
  },
  '& .MuiTabs-indicator': {
    backgroundColor: colors.secondary,
  },
});

export default function ScrollableTabsButtonAuto(props) {
  const { years, showNavbar } = props;
  const [value, setValue] = React.useState(0);
  const yearTabBar = useRef(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Fragment>
      <StyledAppBar
        color="default"
        ref={yearTabBar}
        shownavbar={showNavbar.toString()}
        onClick={() => {
          window.scrollTo(0, 200);
        }}
      >
        <StyledTabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          aria-label="scrollable year tabs"
        >
          {years.map((year, index) => (
            <Tab label={year} {...a11yProps(index)} key={year} />
          ))}
        </StyledTabs>
      </StyledAppBar>
      {years.map((year, index) => (
        <TabPanel value={value} key={year} index={index}>
          <Container full>
            <ArchiveTable year={year} />
          </Container>
        </TabPanel>
      ))}
    </Fragment>
  );
}
