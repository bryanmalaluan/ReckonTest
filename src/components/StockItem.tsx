/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import styles from '../styles';
import {StockItem as StockItemType} from '../types';

interface Props {
  item: StockItemType;
}

const StockItem = ({item}: Props) => {
  return (
    <View style={[styles.stockContainer, {marginTop: 0, marginBottom: 8}]}>
      <Text style={[styles.stockTitle, {fontWeight: '400'}]}>{item.code}</Text>

      <Text
        style={[
          styles.stockTitle,
          {fontWeight: '400'},
        ]}>{`$${item.starting}`}</Text>

      <Text
        style={[
          styles.stockTitle,
          {fontWeight: '400'},
        ]}>{`$${item.lowest}`}</Text>

      <Text
        style={[
          styles.stockTitle,
          {fontWeight: '400'},
        ]}>{`$${item.highest}`}</Text>

      <Text
        style={[
          styles.stockTitle,
          {fontWeight: '400'},
        ]}>{`$${item.current}`}</Text>
    </View>
  );
};

export default StockItem;
