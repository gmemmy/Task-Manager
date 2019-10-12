import React, { Component, Fragment } from 'react';
import {
	 View, Text
	 } from 'react-native';
import styles from './styles';

// Icons
import { AntDesign } from '@expo/vector-icons';

class Header extends Component {
  render() {
    return (
      <Fragment>
        <AntDesign 
        name='arrowleft' 
        size={25}
        color='white'
        style={styles.backArrow} />
        
        <Text style={styles.title}>My disciplines</Text>
        <Text style={styles.subTitle}>Ongoing treatment</Text>
      </Fragment>
    )
  }
}

export default Header;