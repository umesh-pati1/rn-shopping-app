import React, {useState} from 'react';
import {SafeAreaView, FlatList, StyleSheet, StatusBar} from 'react-native';
import {addCartItem} from '../store/redux/cart';
import {useSelector, useDispatch} from 'react-redux';

import DATA from '../api-data';
import Item from './Item/Item';
import ItemDialog from './ItemDialog';

const ItemList = () => {
  const dispatch = useDispatch();
  const cartIds = useSelector(state => state.cart.ids);

  const [dialogVisible, setDialogVisible] = useState(false);
  const [selectedId, setSelectedId] = useState(-1);

  const toggleDialogVisible = canAdd => {
    if (canAdd)
      if (!cartIds.includes(selectedId)) {
        dispatch(addCartItem(selectedId));
      } else {
        alert('Item is already exists in cart');
      }
    setDialogVisible(!dialogVisible);
  };

  const showDialog = id => {
    setDialogVisible(true);
    setSelectedId(id);
  };

  const renderItem = ({item}) => <Item item={item} showDialog={showDialog} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <ItemDialog
        dialogVisible={dialogVisible}
        toggleDialogVisible={toggleDialogVisible}
        title="Add this item to cart"
        btnText="Yes, Add"></ItemDialog>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default ItemList;
