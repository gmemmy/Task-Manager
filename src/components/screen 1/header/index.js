import React, { Component, Fragment } from 'react';
import {
	 View, Text, TouchableHighlight
	 } from 'react-native';
import styles from './styles';

// Icons
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

class Header extends Component {
  render() {
    return (
      <Fragment>
        	<Entypo
					 name="dots-three-horizontal"
					 size={27}
					 color="white"
					 style={styles.threeHorizontalDots} 
					/>
					<TouchableHighlight style={styles.touchableHighlight}>
						<MaterialCommunityIcons
							name="infinity"
							size={35}
							color='black'
							style={styles.headerIcon}
						/>
					</TouchableHighlight>
					<Text style={styles.header}>Sasha Ruletik</Text>
      </Fragment>
    )
  }
}

export default Header;