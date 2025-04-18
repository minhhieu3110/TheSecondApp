import {Block, Modal, Pressable, Text} from '@components';
import {COLORS, GRADIENTS} from '@theme';
import React, {useState} from 'react';
import DTPicker from '@react-native-community/datetimepicker';
import {Platform} from 'react-native';
import {useTranslation} from 'react-i18next';
import LinearGradient from 'react-native-linear-gradient';

const DateTimePickerIOS = ({
  maximumDate,
  minimumDate,
  mode,
  onCancel,
  onConfirm,
  date,
  ...pickerProps
}) => {
  const [_date, setDate] = useState(date || new Date());
  const {t} = useTranslation();

  return (
    <Modal hideModal={onCancel} position="bottom">
      <Block
        safeAreaBottom
        backgroundColor="white"
        marginHorizontal={15}
        radius={10}
        paddingVertical={15}>
        <DTPicker
          textColor="black"
          maximumDate={maximumDate}
          minimumDate={minimumDate}
          value={_date}
          mode={mode}
          display={mode === 'date' ? 'inline' : 'spinner'}
          onChange={(_, v) => {
            setDate(v);
          }}
          {...pickerProps}
        />
        <Block row paddingHorizontal={10}>
          <Pressable
            height={40}
            marginRight={10}
            radius={10}
            backgroundColor={COLORS.lineBreak}
            flex
            justifyCenter
            alignCenter
            onPress={onCancel}>
            <Text color={'white'} semiBold>
              {t('common.cancel')}
            </Text>
          </Pressable>
          <LinearGradient
            style={{
              flex: 1,
              borderRadius: 10,
            }}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={GRADIENTS.primary}>
            <Pressable
              height={40}
              radius={10}
              flex
              justifyCenter
              alignCenter
              onPress={() => {
                onConfirm(_date);
                onCancel();
              }}>
              <Text color={'white'} semiBold>
                {t('common.confirm')}
              </Text>
            </Pressable>
          </LinearGradient>
        </Block>
      </Block>
    </Modal>
  );
};

const DateTimePickerAndroid = ({
  maximumDate,
  minimumDate,
  mode,
  onCancel,
  onConfirm,
  date,
  ...pickerProps
}) => {
  return (
    <DTPicker
      maximumDate={maximumDate}
      minimumDate={minimumDate}
      value={date || new Date()}
      mode={mode}
      onChange={(e, v) => {
        e.type === 'set' && onConfirm(v);
        onCancel();
      }}
      {...pickerProps}
    />
  );
};

const DateTimePicker = ({
  maximumDate,
  minimumDate,
  mode,
  onCancel,
  onConfirm,
  date,
  ...pickerProps
}) => {
  if (Platform.OS === 'ios') {
    return (
      <DateTimePickerIOS
        {...{
          maximumDate,
          minimumDate,
          mode,
          onCancel,
          onConfirm,
          date,
          ...pickerProps,
        }}
      />
    );
  }

  return (
    <DateTimePickerAndroid
      {...{
        maximumDate,
        minimumDate,
        mode,
        onCancel,
        onConfirm,
        date,
        ...pickerProps,
      }}
    />
  );
};

export default DateTimePicker;
