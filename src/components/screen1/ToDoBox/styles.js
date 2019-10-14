import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
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
  titleNumber: {
    color: '#D51E33',
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 162,
  },
  todo: {
    flex: 0.5,
    marginTop: 1
  },
  card: {
    backgroundColor: '#E82C41',
    borderRadius: 15,
    marginLeft: 40,
    marginTop: 5,
    width: 330,
    borderWidth: 0,
  },
  cardText: {
    color: 'white',
    fontSize: 18,
    marginRight: 60,
    marginTop: 15
  },
  title2Number: {
    color: '#D51E33',
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 145,
  },
  checkbox: {
    position: 'relative',
  },
  cardLayout: {
    flexDirection: 'row',
    justifyContent: 'center',
  }
})

export default styles;