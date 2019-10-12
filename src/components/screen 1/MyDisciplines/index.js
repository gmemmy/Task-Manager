import React, { Component, Fragment } from 'react';
import {
	 View, Text, TouchableHighlight
	 } from 'react-native';
import { Card } from 'react-native-elements';
import styles from './styles';

class MyDisciplines extends Component {
  render() {
    return (
      <Fragment>
        <Card containerStyle={styles.card}>
          <View style={styles.upperContent}>
            <View>
              <Text style={styles.cardHeader}>2 years and 13 days</Text>
              <Text style={styles.contentText}>Becoming an Artist</Text>
            </View>
            <View style={styles.upperContent2}>
              <TouchableHighlight style={styles.touchableHighlight}>
                <Text>Hello</Text>
              </TouchableHighlight>
            </View>
          </View>
          <View></View>
        </Card>
      </Fragment>
    )
  }
}

export default MyDisciplines;