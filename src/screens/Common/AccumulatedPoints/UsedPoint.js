import {Block, Image, Text} from '@components';
import {COLORS} from '@theme';
import {icon} from '@assets';
import {width} from '@responsive';
import {ScrollView} from 'react-native';
export default function ReceivePoint() {
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <Block width={width - 24} marginLeft={12} marginTop={15.3}>
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
                  source={icon.icon_withdraw_success}
                  width={'100%'}
                  height={'100%'}
                  resizeMode="cover"
                />
              </Block>
              <Block marginLeft={12} marginTop={9}>
                <Text fontSize={15} semiBold color={COLORS.textColor}>
                  Sử dụng dịch vụ
                </Text>
                <Text fontSize={14} regular color={COLORS.red4} marginTop={16}>
                  -1500 điểm
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
