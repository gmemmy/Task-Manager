import React, { Component } from 'react';
import {
	 View, Text, TouchableOpacity, Dimensions, TouchableHighlight
	 } from 'react-native';
import { Card } from 'react-native-elements';
import styles from './styles';

// Icons
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

class Home extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.upperHalf}>
					<Entypo
					 name="dots-three-horizontal"
					 size={27} color="white"
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

					<View style={styles.upperHalf2}>
						<View style={styles.title}>
							<Text style={styles.todaysGoal}>Today's Goal</Text>
							<Text style={styles.number}>3</Text>
						</View>
						<View style={styles.checkBox}>
							<Card 
							containerStyle={{ 
								backgroundColor: '#E82C41',
								borderRadius: 8,
								marginLeft: 40,
								marginTop: 0,
								width: 330
							 }}>
								<Text	style={{ 
								 color: 'white',
								 fontSize: 18,
								 marginLeft: 60 }}>
									Draw apple for 5 minutes
									</Text>
							</Card>
							<Card />
							<Card />
						</View>
					</View>
				</View>
				<View style={styles.lowerHalf}>

				</View>
			</View>
		)
	}
}

export default Home