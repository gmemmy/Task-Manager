import { StyleSheet, Dimensions } from 'react-native'

const styles =  StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    width: 350,
    height: 210,
  },
  cardHeader: {
    color: '#DE5F6E',
    fontSize: 16
  },
  upperContent: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  upperContent2: {
    justifyContent: 'center',
    marginLeft: 50
  },
  contentText: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 23
  },
  touchableHighlight: {
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    width: Dimensions.get('window').width * 0.15,
    height: Dimensions.get('window').width * 0.15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFAF78',
  },
});

export default styles;
