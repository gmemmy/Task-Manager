import React, { Component, Fragment } from 'react';
import {
	 View, Text,
	 } from 'react-native';
import { Card } from 'react-native-elements';
import styles from './styles';

class ToDoBox extends Component {
  render() {
    return (
      <Fragment>
      	<View style={styles.title}>
							<Text style={styles.todaysGoal}>Today's Goal</Text>
							<Text style={styles.titleNumber}>3</Text>
						</View>
						<View style={styles.checkBox}>
							<Card 
							  containerStyle={ styles.card }>
							  <Text	style={ styles.cardText }>
                  Draw apple for five minutes
								</Text>
							</Card>
							<Card
                containerStyle={ styles.card }>
							  <Text	style={ styles.cardText }>
                  Go out to Libros coffee
								</Text>
              </Card>
							<Card
                containerStyle={ styles.card }>
							  <Text	style={ styles.cardText }>
                  Check out updates on email
								</Text>
              </Card>
              <View style={styles.title2}>
                <Text style={styles.todaysGoal}>My disciplines</Text>
                <Text style={styles.title2Number}>3</Text>
						  </View>
              </View>
      </Fragment>
    )
  }
}

export default ToDoBox;