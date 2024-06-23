import {AppText, Box} from '@root/src/components';
import {
  getComputedHeight,
  getComputedWidth,
} from '@root/src/design_system/layout/responsiveness';
import { useState } from 'react';
import {Pressable, StyleSheet} from 'react-native';


/*THIS IS USED FOR AIRTIME TYPES AND DATA TYPES */
function TypeContainerBox({onSelectType,isActiveBackgroundColor,  title}: {onSelectType(selectedType: string): void; isActiveBackgroundColor: string; title: string}) {
  return (
    <Pressable onPress={() => {
      onSelectType(title.toLocaleLowerCase())
    }}>
      <Box {...style.conatainer} backgroundColor={isActiveBackgroundColor}>
        <AppText text={title} weight="larger" color="black" />
      </Box>
    </Pressable>
  );
}

export default TypeContainerBox;

const style = StyleSheet.create({
  conatainer: {
    width: getComputedWidth(100),
    height: getComputedHeight(36),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
    padding: 8
  },
});
