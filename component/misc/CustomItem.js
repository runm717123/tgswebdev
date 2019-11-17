import React from 'react';
import {StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {Text, Card} from 'native-base';

const BtCard = ({item}) => (
  // <TouchableOpacity onPress={item.click}>
  <TouchableOpacity onPress={item.click}>
    <Card style={styles.card}>
      <Text style={styles.cardBodyTitle}>{item.title}</Text>
    </Card>
  </TouchableOpacity>
);

export const MyList = ({list}) => (
  <FlatList
    data={list}
    renderItem={({item}) => <BtCard item={item} />}
    keyExtractor={(item, i) => i.toString()}
  />
);

const styles = StyleSheet.create({
  card: {
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
  },
  cardBodyTitle: {
    color: '#000',
    textAlign: 'center',
  },
});
