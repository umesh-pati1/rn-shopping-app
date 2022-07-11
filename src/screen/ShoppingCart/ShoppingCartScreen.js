import React, {useState} from 'react';
import {Text, ScrollView, SafeAreaView, Pressable} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {removeCartItem} from '../../store/redux/cart';

import DATA from '../../api-data';

import PaymentModal from '../../components/PaymentModal';
import Item from '../../components/Item/Item';
import ItemDialog from '../../components/ItemDialog';

import {styles} from './ShoppingCart.styles';

const ShoppingCart = () => {
  let totalAmount = 0;

  const dispatch = useDispatch();
  const cartIds = useSelector(state => state.cart.ids);
  const cart = DATA.filter(item => cartIds.some(id => id === item.id));
  // const [cart, setCart] = useState(initialCart);
  const [modalVisible, setModalVisible] = useState(false);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [selectedId, setSelectedId] = useState(-1);

  const toggleModalVisible = () => {
    setModalVisible(!modalVisible);
  };

  const toggleDialogVisible = canRemove => {
    canRemove && dispatch(removeCartItem(selectedId));
    setDialogVisible(!dialogVisible);
  };

  const showDialog = id => {
    setDialogVisible(true);
    setSelectedId(id);
  };

  // const removeItem = id => {
  //   const newCart = cart.filter(item => item.id != id);
  //   setCart(newCart);
  // };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.items}>
        {cart.map(item => {
          totalAmount += parseFloat(item.price.replace('$', ''));
          return <Item key={item.id} item={item} showDialog={showDialog} />;
        })}
        <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
          <Text style={styles.buttonTitle}>Pay ${totalAmount.toFixed(2)}</Text>
        </Pressable>
      </ScrollView>

      <ItemDialog
        dialogVisible={dialogVisible}
        toggleDialogVisible={toggleDialogVisible}
        title="Remove this item"
        description="If proceed, all the items saved in this Wishlist will be gone permanently."
        btnText="Yes, remove"></ItemDialog>

      <PaymentModal
        toggleModalVisible={toggleModalVisible}
        modalVisible={modalVisible}></PaymentModal>
    </SafeAreaView>
  );
};

export default ShoppingCart;

// const initialCart = [
//   {
//     id: 1,
//     name: '🌻 Seeds',
//     description: 'For afternoon tea time',
//     price: '$5.99',
//     rating: 4.9,
//     image: require('../../assets/images/item-1.png'),
//   },
//   {
//     id: 2,
//     name: 'Taiyaki',
//     description: 'Japanese ice cream',
//     price: '$3.99',
//     rating: 4.9,
//     image: require('../../assets/images/item-2.png'),
//   },
//   {
//     id: 3,
//     name: 'Simit lovers',
//     description: '',
//     price: '$15.99',
//     rating: 4.9,
//     image: require('../../assets/images/item-3.png'),
//   },
//   {
//     id: 4,
//     name: 'Simit lovers',
//     description: '',
//     price: '$15.99',
//     rating: 4.9,
//     image: require('../../assets/images/item-3.png'),
//   },
//   {
//     id: 5,
//     name: 'Simit lovers',
//     description: '',
//     price: '$100.99',
//     rating: 4.9,
//     image: require('../../assets/images/item-3.png'),
//   },
// ];
