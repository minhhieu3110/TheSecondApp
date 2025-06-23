import {Block} from '@components';
import {COLORS} from '@theme';
import React from 'react';
import {ActivityIndicator, Modal, TouchableOpacity} from 'react-native';
import {SkypeIndicator} from 'react-native-indicators';

const Loading = ({
  width = 250,
  height = 250,
  containerProps,
  backgroundColor = 'rgba(0,0,0,0.2)',
}) => {
  return (
    // <Block
    //   absoluteFillObject
    //   zIndex={99}
    //   justifyCenter
    //   alignCenter
    //   backgroundColor={backgroundColor}
    //   {...containerProps}>
    //   <Block
    //     shadow3
    //     alignCenter
    //     justifyCenter
    //     height={70}
    //     width={70}
    //     radius={5}
    //     backgroundColor="white">
    //     <SkypeIndicator size={30} color={COLORS.red} />
    //   </Block>
    // </Block>
    <Modal visible={true} transparent={true} animationType="fade">
      <TouchableOpacity
        activeOpacity={1}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.6)',
        }}>
        <Block
          shadow3
          alignCenter
          justifyCenter
          height={70}
          width={70}
          radius={5}
          backgroundColor="white">
          <SkypeIndicator size={30} color={COLORS.red} />
        </Block>
      </TouchableOpacity>
    </Modal>
  );
};

export default Loading;
