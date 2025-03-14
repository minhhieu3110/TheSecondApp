import {icon, image} from '@assets';
import {Block, Image, Text} from '@components';
import {width} from '@responsive';
import {COLORS} from '@theme';
import {ScrollView} from 'react-native';

export default function NotificationScreen() {
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <Block width={width} height={53} backgroundColor={COLORS.white}>
        <Text
          marginLeft={12}
          marginTop={20}
          fontSize={15}
          semiBold
          color={COLORS.black1}>
          Thông báo
        </Text>
      </Block>
      <Block width={width - 24} marginLeft={12} marginTop={15}>
        <ScrollView
          contentContainerStyle={{paddingBottom: 300}}
          showsVerticalScrollIndicator={false}>
          {Array.from({length: 5}).map((_, index) => (
            <Block
              key={index}
              height={108}
              radius={8}
              backgroundColor={COLORS.white}
              paddingBottom={12}
              marginBottom={12}>
              <Block
                marginLeft={12}
                marginTop={12}
                height={77}
                row
                paddingBottom={12}>
                <Block width={60} height={60}>
                  <Image
                    source={icon.icon_notification_1}
                    width={'100%'}
                    height={'100%'}
                    resizeMode="contain"
                  />
                </Block>
                <Block width={294} height={67} marginTop={10} marginLeft={12}>
                  <Text fontSize={15} semiBold color={COLORS.black2}>
                    Khuyến mãi 30% tất cả dịch vụ
                  </Text>
                  <Text
                    fontSize={14}
                    regular
                    color={COLORS.black1}
                    marginBottom={14}
                    numberOfLines={1}>
                    Nhân dịp Giỗ tổ Hùng Vương, chúng tôi...Nhân dịp Giỗ tổ Hùng
                    Vương, chúng tôi...
                  </Text>
                  <Text fontSize={14} regular color={COLORS.placeholder}>
                    13:45, 22/02/2025
                  </Text>
                </Block>
              </Block>
            </Block>
          ))}
        </ScrollView>
      </Block>
    </Block>
  );
}
