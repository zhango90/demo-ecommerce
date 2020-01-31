import React from 'react';


import Directory from '../../components/directory/directory.component';
import { HomePageCointainer } from './homepage.styles'
//import './homepage.styles.scss';

const HomePage = () => (
  <HomePageCointainer className='homepage'>
    <Directory />
  </HomePageCointainer>
);

export default HomePage;
