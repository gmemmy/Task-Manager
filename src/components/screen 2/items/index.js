import React, { Component, Fragment } from 'react';
import {
	 View, Text, TouchableHighlight
   } from 'react-native';
import { Card } from 'react-native-elements';
import styles from './styles';

// Icons
import { Entypo, Feather, AntDesign } from '@expo/vector-icons';

class Content extends Component {
  render() {
    return (
      <Fragment>
        <Card containerStyle={styles.firstCard}>
          <View style={styles.cardLayout}>
            <Entypo name='key' size={20} style={styles.key}/>
            <Text style={styles.firstText}>Waking up in the morning</Text>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>100gm</Text>
          </View>
        </Card>
        <Card containerStyle={styles.contentCard}>
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
              <View style={{ 
                flexDirection: 'row', 
                justifyContent: 'center', 
                width: 314
                }}>
                <Text style={{
                  color: '#316EC4',
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginRight: 10
                }}>
                  014
                  </Text>
                <Text
                style={{ 
                  fontSize: 15, 
                  fontWeight: 'bold',
                  color: '#316EC4',
                  marginRight: 10
                }}>
                  Draw everyday challenge
                </Text>
                 <AntDesign 
                 name='arrowright' 
                 size={25}
                 style={{ 
                   color: '#316EC4',
                   marginLeft: 24
                   }}/>
              </View>
            </Card>
          </View>
        </Card>
        <Card containerStyle={styles.contentCard}>
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
              <View style={{ 
                flexDirection: 'row', 
                justifyContent: 'center', 
                width: 314
                }}>
                <Text style={{
                  color: '#316EC4',
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginRight: 10
                }}>
                  014
                  </Text>
                <Text
                style={{ 
                  fontSize: 15, 
                  fontWeight: 'bold',
                  color: '#316EC4',
                  marginRight: 10
                }}>
                  Draw everyday challenge
                </Text>
                 <AntDesign 
                 name='arrowright' 
                 size={25}
                 style={{ 
                   color: '#316EC4',
                   marginLeft: 24
                   }}/>
              </View>
            </Card>
          </View>
        </Card>
      </Fragment>
    )
  }
}

export default Content;