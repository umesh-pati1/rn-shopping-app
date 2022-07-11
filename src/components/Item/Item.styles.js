import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
    shadowColor: 'rgb(247, 247, 247)',
    shadowOffset: {
      height: 1,
      width: 0,
    },
    borderBottomWidth: 1,
    borderBottomColor: '#ede8e8',
  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 6,
  },
  content: {
    paddingLeft: 16,
  },
  title: {
    fontSize: 17,
    lineHeight: 22,
    color: 'rgb(85, 77, 86)',
    fontWeight: '700',
    paddingBottom: 4,
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 20,
    color: 'rgb(151, 145, 151)',
    fontWeight: '600',
    paddingBottom: 4,
  },
  rating: {
    fontSize: 11,
    lineHeight: 13,
    color: 'rgb(151, 145, 151)',
    fontWeight: '600',
    paddingTop: 4,
  },
});
