import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {styles} from './Item.styles';

const Item = props => {
  return (
    <TouchableOpacity onPress={() => props.showDialog(props.item.id)}>
      <View style={styles.container}>
        <Image source={props.item.image} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>{props.item.name}</Text>
          {!!props.item.description && (
            <Text style={styles.subtitle}>{props.item.description}</Text>
          )}
          <Text style={styles.title}>{props.item.price}</Text>
          <Text style={styles.rating}>{props.item.rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Item;
