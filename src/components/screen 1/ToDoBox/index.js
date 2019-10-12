import React, { Component, Fragment } from 'react';
import {
	 View, Text,
	 } from 'react-native';
import { Card, CheckBox } from 'react-native-elements';
import styles from './styles';

class ToDoBox extends Component {
	constructor() {
		super()
		this.state = {
			checked: false
		}
	}
	pressed = () => {
		const { checked } = this.state;
		if(checked) {
			this.setState({
				checked: false
			})
		}
		else {
			this.setState({
				checked: true
			})
		}
	}
  render() {
    return (
      <Fragment>
      	<View style={styles.title}>
							<Text style={styles.todaysGoal}>Today's Goal</Text>
							<Text style={styles.titleNumber}>3</Text>
						</View>
						<View style={styles.todo}>
							<Card 
							  containerStyle={ styles.card }>
									<View style={styles.cardLayout}>
											<CheckBox
												containerStyle={styles.checkbox}
												onPress={this.pressed}
												checked={this.state.checked}
												size={25}
												/>
											<Text	style={ styles.cardText }>
												Draw apple for five minutes
											</Text>
									</View>
							</Card>
							<Card
                containerStyle={ styles.card }>
								<View style={styles.cardLayout}>
										<CheckBox
											containerStyle={styles.checkbox}
											onPress={this.pressed}
											checked={this.state.checked}
											size={25}
											/>		
										<Text	style={ styles.cardText }>
											Go out to Libros coffee an...
										</Text>							
								</View>
              </Card>
							<Card
                containerStyle={ styles.card }>
									<View style={styles.cardLayout}>
										<CheckBox
											containerStyle={styles.checkbox}
											onPress={this.pressed}
											checked={this.state.checked}
											size={25}
										/>
									<Text	style={ styles.cardText }>
										Check out updates on email
									</Text>
									</View>
              </Card>
              </View>
      </Fragment>
    )
  }
}

export default ToDoBox;