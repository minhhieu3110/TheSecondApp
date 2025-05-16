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

export default function MethodPay({top, payData = [], voucherData = []}) {
  const [methodPay, setMethodPay] = useState(0);
  const [voucher, setVoucher] = useState(0);
  return (
    <Block marginTop={top}>
      <Text fontSize={15} semiBold color={COLORS.black2}>
        Phương thức thanh toán
      </Text>
      <Block marginTop={15} row columnGap={12} height={73}>
        <Pressable
          onPress={() => setMethodPay(!methodPay)}
          width={(width - 24) / 2 - 6}
          backgroundColor={COLORS.white}
          radius={8}
          paddingBottom={12}>
          <Block marginTop={16} marginLeft={12} marginRight={9}>
            <Text fontSize={14} regular color={COLORS.black1}>
              Phương thức thanh toán
            </Text>
            <Block marginTop={9}>
              <Text fontSize={15} medium color={COLORS.red4}>
                Tiền mặt
              </Text>
              <Block absolute right={0}>
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
          backgroundColor={COLORS.white}
          radius={8}
          paddingBottom={12}>
          <Block marginTop={16} marginLeft={12} marginRight={9}>
            <Text fontSize={14} regular color={COLORS.black1}>
              Chọn mã khuyến mãi
            </Text>
            <Block marginTop={9}>
              <Text fontSize={15} medium color={COLORS.red4}>
                Chọn Voucher
              </Text>
              <Block absolute right={0}>
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
      />
      <ModalVoucher
        visible={voucher}
        close={() => setVoucher(false)}
        data={voucherData}
      />
    </Block>
  );
}
