import React, { Fragment } from 'react';
import {
	 View, Text, TouchableHighlight, TouchableOpacity
   } from 'react-native';
import { Card } from 'react-native-elements';
import styles from './styles';

// Icons
import { Entypo, Feather, AntDesign } from '@expo/vector-icons';

function Content() {
    return (
      <Fragment>
        <Card containerStyle={styles.firstCard}>
          <View style={styles.cardLayout}>
            <Entypo name='key' size={20} style={styles.key}/>
            <Text style={styles.firstText}>Waking up in the morning</Text>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>100gm</Text>
          </View>
        </Card>
        <TouchableOpacity>
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
                <View style={styles.progressCardView}>
                  <Text style={styles.progressCardText1}>
                    014
                  </Text>
                  <Text style={styles.progressCardText2}>
                    Draw everyday challenge
                  </Text>
                  <AntDesign 
                  name='arrowright' 
                  size={25}
                  style={styles.arrowIcon}/>
                </View>
              </Card>
            </View>
          </Card>
        </TouchableOpacity>
       <TouchableOpacity>
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
                <View style={styles.progressCardView}>
                  <Text style={styles.progressCardText1}>
                    014
                  </Text>
                  <Text style={styles.progressCardText2}>
                    Draw everyday challenge
                  </Text>
                  <AntDesign 
                  name='arrowright' 
                  size={25}
                  style={styles.arrowIcon}/>
                </View>
              </Card>
            </View>
          </Card>
       </TouchableOpacity>
       
      </Fragment>
    )
}

export default Content;