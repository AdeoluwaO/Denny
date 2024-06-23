import React from 'react';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import { StatusBar} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import theme from 'src/design_system/theme/theme';
import {Route} from 'src/routes/route';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {QueryClientProvider} from '@tanstack/react-query';
import {queryClient} from './src/config/internals/react_query';
import {AuthContextProvider} from './src/context/auth_context';

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: FLEX}}>
      <AuthContextProvider>
        <QueryClientProvider client={queryClient}>
          <PaperProvider theme={theme}>
            <StatusBar
              backgroundColor={'transparent'}
              barStyle={'light-content'}
              translucent
            />
            <BottomSheetModalProvider>
              <Route />
            </BottomSheetModalProvider>
          </PaperProvider>
        </QueryClientProvider>
      </AuthContextProvider>
    </GestureHandlerRootView>
  );
}

export default App;

export const FLEX = 1;
