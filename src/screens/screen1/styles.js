import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upperHalf: {
    flex: 0.5,
    backgroundColor: '#ff3c53'
  },
  upperHalf2: {
    flex: 0.8, 
    marginTop: 18,
  },
  lowerHalf: {
    flex: 0.53,
  },
  lowerHalf1: {
    flex: 0.57,
    backgroundColor: '#ff3c53',
    alignItems: 'center',
    justifyContent: 'center'
  },
  lowerHalf2: {
    flex: 0.2,
    marginTop: 140,
    alignItems: 'center',
   
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    width: 350,
    height: 210,
  },
  title2: {
    flexDirection: 'row',
   marginTop: 150
  },
  mydisciplines: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
 title2Number: {
    color: '#D51E33',
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 145,
  },
})

export default styles;