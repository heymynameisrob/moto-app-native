import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {colour, fontSize, spacing, borders} from '../styles/tokens';

export const Heading = ({children, ...props}) => {    
  const { type = 'largeTitle' } = props;
  return (
    <Text style={{ fontSize: fontSize[type].size, lineHeight: fontSize[type].lineHeight, fontWeight: fontSize[type].weight, color: colour.text['high']  }}>
      {children}
    </Text>
  );
}

export const Body = ({children, ...props}) => {    
  const { type = 'body' } = props;
  return (
    <Text style={{ fontSize: fontSize[type].size, lineHeight: fontSize[type].lineHeight, fontWeight: fontSize[type].weight, color: colour.text['medium']  }}>
      {children}
    </Text>
  );
}

const TextStyles = StyleSheet.create({
  text: {
    fontSize: fontSize.largeTitle.size,
    lineHeight: fontSize.largeTitle.lineHeight,
    fontWeight: fontSize.largeTitle.weight,
    color: colour.grey[0]
  }
});
