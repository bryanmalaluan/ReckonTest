/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, Text, View} from 'react-native';
import StockItem from './StockItem';
import styles from '../styles';
import {useStockContext} from '../context/StockContext';
import {StockItem as StockItemType} from '../types';

const Header = () => {
  const {stocks} = useStockContext();

  const renderItem = React.useCallback(({item}: {item: StockItemType}) => {
    return <StockItem item={item} />;
  }, []);

  return (
    <View style={styles.listHeader}>
      <Text style={styles.summaryText}>Summary</Text>

      <View style={styles.col}>
        <View style={styles.stockContainer}>
          <Text style={styles.stockTitle}>Stock</Text>
          <Text style={styles.stockTitle}>Starting</Text>
          <Text style={styles.stockTitle}>Lowest</Text>
          <Text style={styles.stockTitle}>Highest</Text>
          <Text style={styles.stockTitle}>Current</Text>
        </View>

        <FlatList
          data={stocks}
          renderItem={renderItem}
          keyExtractor={(item, index) => `key-${item.code}${index}`}
          scrollEventThrottle={16}
          contentContainerStyle={{flexGrow: 1, paddingBottom: 120}}
        />
      </View>
    </View>
  );
};

export default Header;
