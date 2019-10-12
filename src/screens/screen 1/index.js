import React, { Component } from 'react';
import {
	 View, Text, TouchableOpacity, Dimensions, TouchableHighlight
	 } from 'react-native';
import { Card } from 'react-native-elements';
import styles from './styles';
import cardStyles from '../../components/screen 1/MyDisciplines/styles';

// Components
import Header from '../../components/screen 1/header/index';
import ToDoBox from '../../components/screen 1/ToDoBox/index';
import MyDisciplines from '../../components/screen 1/MyDisciplines/index';

class Home extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.upperHalf}>
					<Header />
					<View style={styles.upperHalf2}>
						<ToDoBox />
					</View>
				</View>
				<View style={styles.lowerHalf}>
					<View style={styles.lowerHalf1}>
						<MyDisciplines />
					</View>
					<View style={styles.lowerHalf2}>
						<Card containerStyle={styles.card} />
					</View>
				</View>
			</View>
		)
	}
}

export default Home