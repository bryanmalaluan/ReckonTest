import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainerStyle: {
    flexGrow: 1,
    paddingHorizontal: 8,
    paddingBottom: 40,
  },
  listHeader: {
    flex: 0.8,
    width: '100%',
    paddingHorizontal: 8,
    backgroundColor: '#fff',
  },
  summaryText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  col: {
    width: '100%',
  },
  stockContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },
  stockTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
  logContainer: {
    flex: 0.2,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e7e9ed',
    paddingHorizontal: 8,
  },
  button: {
    height: 40,
    minWidth: 100,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
    backgroundColor: '#00bd9d',
    borderRadius: 16,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#fff',
  },
  logText: {
    fontSize: 16,
    marginBottom: 4,
  },
});

export default styles;
