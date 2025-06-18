import {Block} from '@components';
import {COLORS} from '@theme';
import React from 'react';
import {StatusBar as RNStatusBar} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const StatusBar = ({
  translucent = true,
  backgroundColor = 'black',
  barStyle = 'dark-content',
  ...props
}) => {
  const {top} = useSafeAreaInsets();

  return (
    <Block>
      <RNStatusBar
        barStyle={barStyle}
        translucent={translucent}
        backgroundColor={backgroundColor}
        {...props}
      />
    </Block>
  );
};

export default StatusBar;
