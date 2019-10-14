import { StyleSheet, Dimensions } from 'react-native'

const styles =  StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    width: 350,
    height: 210,
    shadowColor: '#0000',
    marginTop: 20
  },
  cardHeader: {
    color: '#DE5F6E',
    fontSize: 16,
    fontWeight: 'bold'
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
  lowerContent: {
    marginTop: 30,
    alignItems: 'center'
  },
  locationText: {
    color: '#D0D0D0',
    marginRight: 175
  },
  progressCard: {
    backgroundColor: '#FEF2F2',
    borderRadius: 5,
    width: 340,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center'
  },
  progressCardView: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    width: 314
  },
  progressCardViewText: {
    fontSize: 15, 
    fontWeight: 'bold',
    marginTop: 15
  }
});

export default styles;
