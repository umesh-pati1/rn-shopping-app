import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, Pressable, Alert} from 'react-native';
import {useSelector} from 'react-redux';

import {globalStyles} from '../styles/GlobalStyles';
import {Colors} from '../styles/Colors';

import ItemList from '../components/ItemList';
const CartBox = props => {
  return (
    <View style={cartBox.container}>
      <View
        style={{
          marginBottom: 16,
          flexDirection: 'row',
        }}>
        <Image
          source={require('./../assets/icons/chatbox-icon.png')}
          style={cartBox.icon}
        />
        <Text
          style={[
            globalStyles.fontRegular,
            globalStyles.regular,
            {color: Colors.snowman, flexShrink: 1},
          ]}>
          {`You have ${props.count} items in shopping cart, check out now.`}
        </Text>
      </View>
      <Pressable
        style={[globalStyles.button, globalStyles.buttonTransparent]}
        onPress={() => props.onPress()}>
        <Text
          style={[
            globalStyles.fontRegular,
            globalStyles.semiBold,
            {color: 'white'},
          ]}>
          Check out now
        </Text>
      </Pressable>
    </View>
  );
};

const Home = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const cartIds = useSelector(state => state.cart.ids);

  const pressHandler = () => {
    navigation.navigate('ShoppingCart');
  };

  const toggleModalVisible = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <View style={styles.container}>
      <ItemList></ItemList>
      <CartBox
        count={cartIds.length}
        toggleModalVisible={toggleModalVisible}
        onPress={pressHandler}></CartBox>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const cartBox = StyleSheet.create({
  container: {
    margin: 16,
    padding: 16,
    backgroundColor: 'rgb(255, 135, 84)',
    borderRadius: 8,
    elevation: 4,
  },
  icon: {
    height: 24,
    width: 24,
    marginRight: 8,
  },
});
