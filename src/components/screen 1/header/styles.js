import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  threeHorizontalDots: {
    marginLeft: 350,
    marginTop: 60
  },
  header: {
    color: 'white',
    fontSize: 25,
    marginLeft: 100,
    marginTop: 61,
    fontWeight: 'bold',
    position: 'absolute'
  },
  touchableHighlight: {
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    width: Dimensions.get('window').width * 0.1,
    height: Dimensions.get('window').width * 0.1,
    marginLeft: 45,
    marginTop: 55,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: '#FFAF78',
  },
})

export default styles;