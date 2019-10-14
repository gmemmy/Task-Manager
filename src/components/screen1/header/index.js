import React, { Fragment } from 'react';
import {Text, TouchableHighlight, TouchableOpacity
	 } from 'react-native';
import styles from './styles';

// Icons
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

function Header() {
    return (
      <Fragment>
				<TouchableOpacity>
					<Entypo
						name="dots-three-horizontal"
						size={27}
						color="white"
						style={styles.threeHorizontalDots} 
						/>
					</TouchableOpacity>
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

export default Header;