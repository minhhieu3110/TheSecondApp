import {image} from '@assets';
import {Block, HeaderTitle, Image, Pressable, Text} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {commonRoot} from 'navigation/navigationRef';
import LinearGradient from 'react-native-linear-gradient';

export default function Housework() {
  return (
    <Block flex backgroundColor={COLORS.gradient5}>
      <LinearGradient style={{flex: 1}} colors={COLORS.gradient5}>
        <Block height={53}>
          <HeaderTitle
            background
            colorIcon={COLORS.white}
            colorText={COLORS.white}
            title={'Chọn dịch vụ'}
            canGoBack
          />
        </Block>
        <Pressable
          onPress={() => commonRoot.navigate(router.HOUSEWORK_ODD_SHIFT)}
          width={width - 24}
          marginHorizontal={12}
          marginTop={10}>
          <Block
            paddingBottom={23}
            backgroundColor={COLORS.white}
            radius={15}
            alignCenter>
            <Image
              source={image.image_housework_1}
              marginTop={30}
              width={width - 178}
              height={157.79}
            />
            <Text marginTop={34.2} fontSize={15} semiBold color={COLORS.red4}>
              Dịch vụ theo ca lẻ
            </Text>
            <Text
              marginHorizontal={15}
              marginTop={15}
              fontSize={15}
              regular
              color={COLORS.black1}>
              Giúp khách hàng linh hoạt lựa chọn cần buổi nào đặt lịch buổi đó,
              nhanh chóng tiện lợi. Chỉ với 60s đăng việc, linh hoạt 4 hoặc 8
              tiếng
            </Text>
          </Block>
        </Pressable>
        <Pressable
          onPress={() => commonRoot.navigate(router.HOUSEWORK_MONTH)}
          width={width - 24}
          marginHorizontal={12}
          marginTop={12}>
          <Block
            paddingBottom={23}
            backgroundColor={COLORS.white}
            radius={15}
            alignCenter>
            <Image
              source={image.image_housework_2}
              marginTop={30}
              width={width - 178}
              height={157.79}
            />
            <Text marginTop={34.2} fontSize={15} semiBold color={COLORS.red4}>
              Dịch vụ theo tháng
            </Text>
            <Text
              marginHorizontal={15}
              marginTop={15}
              fontSize={15}
              regular
              color={COLORS.black1}>
              Linh hoạt xếp lịch làm việc cố định theo thời gian quý khách. Tiết
              kiệm thời gian đăng việc, tránh thanh toán nhiều lần
            </Text>
          </Block>
        </Pressable>
      </LinearGradient>
    </Block>
  );
}
