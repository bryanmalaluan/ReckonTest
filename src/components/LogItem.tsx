/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import styles from '../styles';
import {Stock} from '../types';

interface Props {
  updatedAt: string;
  stocks: Array<Stock>;
}

const LogItem = ({updatedAt = '', stocks = []}: Props) => {
  return (
    <View style={[styles.col, {width: '100%', marginVertical: 8}]}>
      <Text style={styles.logText}>{`Updates for ${updatedAt}`}</Text>

      {stocks.map((item, index) => {
        return (
          <Text key={`item-${item.code}${index}`} style={styles.logText}>
            {`${item.code}: $${item.price}`}
          </Text>
        );
      })}
    </View>
  );
};

const arePropsEqual = (prevProps: Props, nextProps: Props) => {
  return prevProps.updatedAt === nextProps.updatedAt;
};

export default React.memo(LogItem, arePropsEqual);
