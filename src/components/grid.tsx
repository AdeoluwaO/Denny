import React from 'react';
import {View, FlatList, Text, StyleSheet, Dimensions} from 'react-native';
import {Row} from './row';
import {alignHorizontalToFlexAlign} from '../design_system/layout/alignment';
import {
  getComputedHeight,
  getComputedWidth,
} from '../design_system/layout/responsiveness';
import ServiceAdBox from '../screens/dashboard/services/components/service_ad_box';
import {Box} from './Box';

export function GridView({children}: {children: React.ReactNode}) {
  const test = [
    {
      price: '50',
      'cash-back': 5.0,
    },
    {
      price: '100',
      'cash-back': 5.0,
    },
    {
      price: '200',
      'cash-back': 5.0,
    },
    {
      price: '500',
      'cash-back': 5.0,
    },
  ];
  return (
    <Box {...style.container}>
      {test.map((item, index) => {
        return (
          <Box key={index} width={`${100 / 3}%`}>
            <Box paddingHorizontal={5} paddingVertical={5}>
              <ServiceAdBox
                amount={item.price}
                cashbackAmouunt={item['cash-back'].toString()}
              />
            </Box>
          </Box>
        );
      })}
    </Box>
  );
  // </Row>;
}

const style = StyleSheet.create({
  container: {
    // width: '100%',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
