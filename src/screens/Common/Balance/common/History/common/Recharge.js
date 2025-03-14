import {Block, Text, Image} from '@components';
import {COLORS} from '@theme';
import {width} from '@responsive';
import {icon} from '@assets';
import {ScrollView} from 'react-native';
export default function Recharge() {
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <Block width={width - 24} marginLeft={12} marginTop={15}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 1000}}>
          {Array.from({length: 8}).map((_, index) => (
            <Block
              key={index}
              paddingTop={12}
              paddingBottom={15}
              radius={8}
              backgroundColor={COLORS.white}
              marginBottom={12}
              row>
              <Block width={40} height={40} marginLeft={12}>
                <Image
                  source={icon.icon_recharge_success}
                  width={'100%'}
                  height={'100%'}
                  resizeMode="cover"
                />
              </Block>
              <Block marginLeft={12} marginTop={9}>
                <Text fontSize={15} semiBold color={COLORS.textColor}>
                  Nạp tiền thành công
                </Text>
                <Text
                  fontSize={14}
                  regular
                  color={COLORS.green5}
                  marginTop={16}>
                  +200.000 đ
                </Text>
              </Block>
              <Block absolute top={23} right={11}>
                <Text fontSize={14} regular color={COLORS.placeholder}>
                  15/12/2024
                </Text>
              </Block>
            </Block>
          ))}
        </ScrollView>
      </Block>
    </Block>
  );
}
