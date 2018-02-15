import React from 'react'
// import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import HomeAppBarComponent from './HomeAppBarComponent'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import {blue900} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#002b5a',
    // primary2Color: '#5472d3',
    // primary3Color: grey400,
  //   // accent1Color: pinkA200,
  //   // accent2Color: grey100,
  //   // accent3Color: grey500,
  //   // textColor: darkBlack,
  //   // alternateTextColor: white,
  //   // canvasColor: white,
  //   // borderColor: grey300,
  //   // disabledColor: fade(darkBlack, 0.3),
  //   // pickerHeaderColor: cyan500,
  //   // clockCircleColor: fade(darkBlack, 0.07),
  //   // shadowColor: fullBlack,
  // },
  // appBar: {
  //   height: 50,
  }
});


export const PageLayout = ({ children }) => (
  <div>
  <MuiThemeProvider muiTheme={muiTheme}>
    <HomeAppBarComponent/>
  </MuiThemeProvider>
  <div className='container text-center'>
    {/* <IndexLink to='/' activeClassName='page-layout__nav-item--active'>Home</IndexLink>
    {' · '}
    <Link to='/counter' activeClassName='page-layout__nav-item--active'>Counter</Link> */}
    <div className='page-layout__viewport'>
      {children}
    </div>
    </div>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
