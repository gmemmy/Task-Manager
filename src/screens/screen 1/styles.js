import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upperHalf: {
    flex: 0.58,
    backgroundColor: '#ff3c53'
  },
  threeHorizontalDots: {
    marginLeft: 350,
    marginTop: 75
  },
  header: {
    color: 'white',
    fontSize: 25,
    marginLeft: 100,
    marginTop: 76,
    fontWeight: 'bold',
    position: 'absolute'
  },
  touchableHighlight: {
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    width: Dimensions.get('window').width * 0.1,
    height: Dimensions.get('window').width * 0.1,
    marginLeft: 45,
    marginTop: 70,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: '#FFAF78',
  },
  upperHalf2: {
    flex: 0.8, 
    marginTop: 70,
  },
  title: {
    flex: 0.15,
    flexDirection: 'row',
  },
  todaysGoal: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 40,
  },
  number: {
    color: '#D51E33',
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 162,
  },
  checkBox: {
    flex: 0.5,
    marginTop: 1
  },
 
})

export default styles;