import {Block, HeaderTitle, Image, Text, ScrollView} from '@components';
import {COLORS, FONTS} from '@theme';
import {width} from '@responsive';
import {icon} from '@assets';
export default function HistoryPoint() {
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderTitle canGoBack title={'Xem lịch sử điểm thưởng'} />
      <Block width={width - 24} marginLeft={12} marginTop={15}>
        <ScrollView contentContainerStyle={{paddingBottom: 171}}>
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
                  Nhận điểm từ dịch vụ
                </Text>
                <Text
                  fontSize={14}
                  regular
                  color={COLORS.placeholder}
                  marginTop={15}
                  marginBottom={14}>
                  #ACBNM123
                </Text>
                <Text fontSize={14} regular color={COLORS.green5}>
                  +2000 điểm
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
