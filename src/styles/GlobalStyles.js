import {StyleSheet} from 'react-native';
import {Colors} from './Colors';

export const globalStyles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonOpen: {
    backgroundColor: Colors.peach,
  },
  buttonClose: {
    backgroundColor: Colors.karl,
  },
  buttonTransparent: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  textStyle: {
    fontSize: 17,
    lineHeight: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  whiteText: {
    color: 'white',
  },
  peachText: {
    color: Colors.peach,
  },
  modalTitle: {
    marginBottom: 16,
    fontSize: 22,
    lineHeight: 28,
    fontWeight: '600',
    color: Colors.teflon,
    textAlign: 'center',
  },
  modalDescription: {
    marginBottom: 36,
    textAlign: 'center',
    color: Colors.gandalf,
    fontWeight: '400',
    fontSize: 17,
    lineHeight: 22,
  },
  mt16: {
    marginTop: 16,
  },
  fontRegular: {
    fontSize: 17,
    lineHeight: 22,
  },
  semiBold: {
    fontWeight: '600',
  },
  regular: {
    fontWeight: '500',
  },
  bold: {
    fontWeight: '700',
  },
});
