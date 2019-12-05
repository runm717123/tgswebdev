import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

const Button = ({title, onPress, style, txtColor = 'black'}) => (
  <TouchableOpacity
    style={{
      width: 150,
      height: 30,
      borderWidth: 1,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center',
      ...style,
    }}
    onPress={onPress}>
    <Text style={{color: txtColor}}>{title}</Text>
  </TouchableOpacity>
);

const LinkButton = ({title, onPress, style, txtColor = 'skyblue'}) => (
  <TouchableOpacity
    style={{
      width: 150,
      height: 30,
      alignItems: 'center',
      justifyContent: 'center',
      ...style,
    }}
    onPress={onPress}>
    <Text
      style={{
        color: txtColor,
        textDecorationLine: 'underline',
        textDecorationColor: txtColor,
      }}>
      {title}
    </Text>
  </TouchableOpacity>
);

export {Button, LinkButton};
