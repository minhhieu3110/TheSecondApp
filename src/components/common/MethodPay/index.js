import {
  Block,
  Text,
  Icon,
  ModalMethodPay,
  ModalVoucher,
  Pressable,
} from '@components';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '@theme';
import {width} from '@responsive';
import {useState} from 'react';

export default function MethodPay({
  top,
  payData = [],
  titlePay,
  voucherData = [],
  onPressPay,
  onPressVoucher,
}) {
  const [methodPay, setMethodPay] = useState(0);
  const [voucher, setVoucher] = useState(0);
  return (
    <Block marginTop={top}>
      <Text fontSize={15} semiBold color={COLORS.black2}>
        Phương thức thanh toán
      </Text>
      <Block marginTop={15} row spaceBetween>
        <Pressable
          onPress={() => setMethodPay(!methodPay)}
          width={(width - 24) / 2 - 6}
          paddingBottom={12}
          backgroundColor={COLORS.white}
          radius={8}>
          <Block marginLeft={4} marginTop={16} marginRight={17}>
            <Text fontSize={14} regular color={COLORS.black2} numberOfLines={1}>
              Phương thức thanh toán
            </Text>
            <Block marginTop={9} rowCenter spaceBetween>
              <Text fontSize={15} medium color={COLORS.red4}>
                {titlePay ? titlePay : 'Chọn phương thức'}
              </Text>
              <Block>
                <Icon
                  IconType={MaterialIcons}
                  iconName={'keyboard-arrow-right'}
                  iconColor={COLORS.red4}
                  iconSize={22}
                />
              </Block>
            </Block>
          </Block>
        </Pressable>
        <Pressable
          onPress={() => setVoucher(!voucher)}
          width={(width - 24) / 2 - 6}
          paddingBottom={12}
          backgroundColor={COLORS.white}
          radius={8}>
          <Block marginLeft={4} marginTop={16} marginRight={17}>
            <Text fontSize={14} regular color={COLORS.black2}>
              Chọn mã khuyến mãi
            </Text>
            <Block marginTop={9} rowCenter spaceBetween>
              <Text fontSize={15} medium color={COLORS.red4}>
                Chọn voucher
              </Text>
              <Block>
                <Icon
                  IconType={MaterialIcons}
                  iconName={'keyboard-arrow-right'}
                  iconColor={COLORS.red4}
                  iconSize={22}
                />
              </Block>
            </Block>
          </Block>
        </Pressable>
      </Block>
      <ModalMethodPay
        visible={methodPay}
        close={() => setMethodPay(false)}
        data={payData}
        onPress={onPressPay}
      />
      <ModalVoucher
        onPress={onPressVoucher}
        visible={voucher}
        close={() => setVoucher(false)}
        data={voucherData}
      />
    </Block>
  );
}
