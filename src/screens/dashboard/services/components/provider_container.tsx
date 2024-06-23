import {
  AppFlatListBottomSheet,
  Box,
  Gap,
  Row,
  UrlImageOrNameInitials,
} from '@root/src/components';
import {
  alignHorizontalToFlexAlign,
  alignVerticalToFlexAlign,
} from '@root/src/design_system/layout/alignment';
import {
  getComputedHeight,
  getComputedWidth,
} from '@root/src/design_system/layout/responsiveness';
import {useAppTheme} from '@root/src/design_system/theme/theme';
import {ServiceProvider} from '@root/src/domians/airtime/types';
import {useBottomModalRef} from '@root/src/hooks/bottomsheet';
import {Pressable, StyleSheet} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AirtimeBox from './airtime_components/airtime_box';
import {useGetServiceProviderPlansMutation} from '@root/src/domians/airtime';
import {useState} from 'react';
import {defaultImage} from '@root/src/utils/constants';

export interface ProviderBoxProps {
  data: ServiceProvider[] | undefined;
  onSelectProvider: ({
    name,
    id,
  }: {
    name: string | null;
    id: string | null;
  }) => void;
}

function ProviderBox({data, onSelectProvider}: ProviderBoxProps) {
  const {colors} = useAppTheme();
  const [ref, {open, close}] = useBottomModalRef();
  const [providerData, setProviderData] = useState({
    providerBanner: data?.at(0)?.display_picture,
    providerName: data?.at(0)?.name,
  });
  return (
    <Pressable onPress={open}>
      <Box backgroundColor={colors.white} {...styles.container}>
        <Row {...styles.row}>
          <UrlImageOrNameInitials
            imageUrl={providerData.providerBanner ?? ''}
            name={providerData.providerName ?? 'N'}
            urlImageStyle={styles.image}
          />
          <Entypo name="chevron-down" size={18} color={colors.black} />
        </Row>
      </Box>
      <AppFlatListBottomSheet
        ref={ref}
        //@ts-ignore
        data={data}
        renderItem={({item, index}: {item: ServiceProvider; index: number}) => {
          return (
            <AirtimeBox
              id={item.network_id ?? ''}
              provider={item.name ?? ''}
              providerPhoto={item.display_picture ?? ''}
              onTap={() => {
                close();
                onSelectProvider({name: item.name, id: item.network_id});
                setProviderData({
                  providerName: item.name,
                  providerBanner: item.display_picture,
                });
                console.log(
                  `provider name and id ${item.name}`,
                  item.network_id,
                );
              }}
            />
          );
        }}
        keyExtractor={(item: ServiceProvider) => item.network_id ?? ''}
        itemSeperator={() => <Gap height={getComputedHeight(16)} />}
      />
    </Pressable>
  );
}

export default ProviderBox;

const styles = StyleSheet.create({
  container: {
    justifyContent: alignHorizontalToFlexAlign.center,
    height: getComputedHeight(56),
    borderRadius: 20,
    rowGap: 0,
    columnGap: 0,
    width: getComputedWidth(91),
  },
  image: {
    height: 20,
    width: 20,
    borderRadius: 20,
  },
  row: {
    rowGap: 0,
    columnGap: 0,
    flexWrap: 'nowrap',
    paddingRight: getComputedWidth(9),
    justifyContent: alignVerticalToFlexAlign['space-between'],
  },
});
