import {icon} from '@assets';
import {Block, Button, HeaderTitle, Image, Pressable, Text} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {commonRoot} from 'navigation/navigationRef';

export default function Address() {
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderTitle title={'Chọn địa điểm'} canGoBack />
      <Text
        fontSize={15}
        semiBold
        color={COLORS.black2}
        marginLeft={12}
        marginTop={19}>
        Danh sách địa điểm
      </Text>
      <Block
        width={width - 24}
        marginHorizontal={12}
        marginTop={15}
        spaceBetween>
        {Array.from({length: 5}).map((_, index) => (
          <Pressable
            key={index}
            height={101}
            radius={8}
            backgroundColor={COLORS.white}
            paddingBottom={19}
            marginBottom={12}>
            <Block marginLeft={10} marginTop={12} height={25} row alignCenter>
              <Image
                source={icon.icon_position_address}
                width={25}
                height={25}
              />
              <Text
                marginLeft={4}
                fontSize={14}
                regular
                color={COLORS.placeholder}>
                Nhà riêng
              </Text>
            </Block>
            <Text
              fontSize={14}
              regular
              color={COLORS.placeholder}
              numberOfLines={2}
              marginLeft={39}
              marginTop={9}>
              107 đường Cộng Hòa, Phường 12, quận Tân Bình, Tp.HCM
            </Text>
          </Pressable>
        ))}
      </Block>
      <Button
        title="Thêm mới"
        onPress={() => commonRoot.navigate(router.ADD_NEW_ADDRESS)}
      />
    </Block>
  );
}
