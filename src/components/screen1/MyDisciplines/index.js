import React, { Component, Fragment } from 'react';
import {
	 View, Text, TouchableHighlight, TouchableOpacity, TouchableOpacityComponent
	 } from 'react-native';
import { Card } from 'react-native-elements';
import styles from './styles';

// Icons
import { Feather, AntDesign } from '@expo/vector-icons'

const MyDisciplines = (props) => {
    return (
      <Fragment>
        <TouchableOpacity onPress={() => props.pressed.navigate('TaskDisplay')}>
          <Card containerStyle={styles.card}>
            <View style={styles.upperContent}>
              <View>
                <Text style={styles.cardHeader}>2 years and 13 days</Text>
                <Text style={styles.contentText}>Becoming an Artist</Text>
              </View>
              <View style={styles.upperContent2}>
                <TouchableHighlight style={styles.touchableHighlight}>
                  <Feather
                    name='award'
                    size={27} />
                </TouchableHighlight>
              </View>
            </View>
            <View style={styles.lowerContent}>
              <Text style={styles.locationText}>
                CURRENT LOCATION
              </Text>
              <Card containerStyle={styles.progressCard}>
                <View style={styles.progressCardView}>  
                  <Text
                  style={styles.progressCardViewText}>
                    Draw everyday challenge
                  </Text>
                  <Card containerStyle={{
                    width: 80,
                    marginTop: 5,
                    borderRadius: 20
                  }}>
                  </Card>
                  <AntDesign 
                  name='arrowright' 
                  size={25}
                  style={{ 
                    marginTop: 12
                    }}/>
                </View>
              </Card>
            </View>
          </Card>
        </TouchableOpacity>
      </Fragment>
    )
}

export default MyDisciplines;