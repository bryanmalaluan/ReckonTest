/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import dayjs from 'dayjs';
import Header from '../components/Header';
import LogItem from '../components/LogItem';
import {useStockContext} from '../context/StockContext';
import stockService from '../services/stockService';
import styles from '../styles';
import {Log, Stock, StockItem} from '../types';
import useInterval from '../hooks/useInterval';

const HomeScreen = () => {
  const {stocks, logs, setStocks, setLogs} = useStockContext();
  const {count} = useInterval();

  const [pauseLogs, setPauseLogs] = React.useState<boolean>(false);
  const [stopPrices, setStopPrices] = React.useState<boolean>(false);

  /**
   * fetch stocks on mount
   * refetch every 2 seconds to get latest prices
   * */
  React.useEffect(() => {
    fetchStocks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  /** call api service for fetching stock prices */
  const fetchStocks = async () => {
    const ret: Array<Stock> = await stockService.getStocks();

    if (ret && ret.length > 0) {
      storeLogs(ret);
      storeStocks(ret);
    }
  };

  /**
   * store logs
   * push new log in logs context
   * */
  const storeLogs = (data: Array<Stock>) => {
    /** logs has been pause, stop updating */
    if (pauseLogs) {
      return;
    }

    const dateNow = dayjs().format('MM-DD-YYYY HH:mm:ss');

    const newLog = {
      updatedAt: dateNow,
      stocks: data,
    };

    /** insert latest log in the first element */
    const newLogs: Array<Log> = [newLog].concat(logs);

    setLogs(newLogs);
  };

  /**
   * store stocks
   * update stocks price values
   *  */
  const storeStocks = (data: Array<Stock>) => {
    /** stop updating stock prices if logs has been pause */
    if (stopPrices) {
      return;
    }

    if (stocks.length < 1) {
      /** store initial stock prices  */
      const newStocks: Array<StockItem> = [];

      data.forEach(item => {
        const stockItem: StockItem = {
          code: item.code,
          starting: item.price,
          lowest: item.price,
          highest: item.price,
          current: item.price,
        };
        newStocks.push(stockItem);
      });

      setStocks(newStocks);
    } else {
      /** update stock prices (lowest, highest, current) */
      const updateStocks: Array<StockItem> = [...stocks];

      data.forEach(item => {
        const index = updateStocks.findIndex(s => s.code === item.code);
        if (index >= 0) {
          const {lowest, highest} = updateStocks[index];
          updateStocks[index].lowest =
            item.price < lowest ? item.price : lowest;
          updateStocks[index].highest =
            item.price > highest ? item.price : highest;
          updateStocks[index].current = item.price;
        }
      });
      setStocks(updateStocks);
    }
  };

  /** handles pausing of logs and stopping interval */
  const onPressPause = () => {
    setPauseLogs(!pauseLogs);

    /** set stop prices value to true */
    if (pauseLogs) {
      setStopPrices(true);
    }
  };

  /** render logs in flatlist */
  const renderItem = React.useCallback(({item}: {item: Log}) => {
    return <LogItem updatedAt={item.updatedAt} stocks={item.stocks} />;
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header />

      <View style={styles.logContainer}>
        <Text style={styles.summaryText}>Log</Text>

        <TouchableOpacity
          style={[
            styles.button,
            {backgroundColor: !pauseLogs ? '#00bd9d' : '#e7e9ed'},
          ]}
          onPress={onPressPause}>
          <Text
            style={[styles.buttonText, {color: !pauseLogs ? '#fff' : '#000'}]}>
            {!pauseLogs ? 'Pause' : 'Resume'}
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={logs}
        renderItem={renderItem}
        keyExtractor={(item, index) => `key-${item}${index}`}
        scrollEventThrottle={16}
        style={{flex: 1, backgroundColor: '#fff'}}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
