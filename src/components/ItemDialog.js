import React from 'react';
import {Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import {Colors} from '../styles/Colors';

const ItemDialog = props => {
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.dialogVisible}
        onRequestClose={() => {
          props.toggleDialogVisible();
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>{props.title}</Text>
            {!!props.description && (
              <Text style={styles.modalDescription}>{props.description}</Text>
            )}
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => props.toggleDialogVisible(true)}>
              <Text style={[styles.textStyle, styles.peachText]}>
                {props.btnText}
              </Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonOpen, styles.mt16]}
              onPress={() => props.toggleDialogVisible(false)}>
              <Text style={[styles.textStyle, styles.whiteText]}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.modalBackground,
  },
  modalView: {
    margin: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
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
});

export default ItemDialog;
