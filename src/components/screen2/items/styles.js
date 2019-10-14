import { StyleSheet, Dimensions }  from 'react-native';

const styles = StyleSheet.create({
  firstCard: {
    backgroundColor: '#447CD6',
    borderRadius: 10,
    marginLeft: 40,
    marginTop: 15,
    width: 330,
    borderWidth: 0,
  },
  cardLayout: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  key: {
    marginRight: 20,
    color: 'white',
  },
  firstText: {
    marginRight: 40,
    color: 'white',
    fontWeight: 'bold'
  },
  contentCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    width: 330,
    height: 210,
    shadowColor: '#0000',
    marginTop: 20,
    marginLeft: 40,
  },
  cardHeader: {
    color: '#C7C7C7',
    fontSize: 13,
    fontWeight: 'bold',
    marginLeft: 8
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
    fontSize: 23,
    marginLeft: 8
  },
  touchableHighlight: {
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    width: Dimensions.get('window').width * 0.15,
    height: Dimensions.get('window').width * 0.15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E9F2FF',
  },
  lowerContent: {
    marginTop: 30,
    alignItems: 'center'
  },
  locationText: {
    color: '#6097DB',
    marginRight: 160
  },
  progressCard: {
    backgroundColor: '#E9F2FF',
    borderRadius: 5,
    width: 310,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center'
  },
  progressCardView: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    width: 314
  },
  progressCardText1: {
    color: '#316EC4',
    fontSize: 15,
    fontWeight: 'bold',
    marginRight: 10
  },
  progressCardText2: {
    fontSize: 15, 
    fontWeight: 'bold',
    color: '#316EC4',
    marginRight: 10
  },
  arrowIcon: {
   color: '#316EC4',
   marginLeft: 24
  }
})

export default styles;
