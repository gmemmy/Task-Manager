import React, { Fragment } from 'react';
import {
	 View, Text, TouchableOpacity, TouchableOpacityComponent
	 } from 'react-native';
import styles from './styles';

// Icons
import { AntDesign } from '@expo/vector-icons';

const Header = (props) => {
    return (
      <Fragment>
        <TouchableOpacity onPress={() => props.pressed.navigate('Home')}>
          <AntDesign 
          name='arrowleft' 
          size={25}
          color='white'
          style={styles.backArrow} />
        </TouchableOpacity>    
        <Text style={styles.title}>My disciplines</Text>
        <Text style={styles.subTitle}>Ongoing treatment</Text>
      </Fragment>
    )
}

export default Header;