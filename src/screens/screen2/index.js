import React, { Component } from 'react';
import {
	 View, Text
	 } from 'react-native';
import styles from './styles';

// Components
import Header from '../../components/screen2/header/index';
import Content from '../../components/screen2/items/index';

class TaskDisplay extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header pressed={this.props.navigation} />
        </View>
        <View style={styles.content}>
          <Content />
        </View>
      </View>
    )
  }
}

export default TaskDisplay