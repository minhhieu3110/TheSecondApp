import {image} from '@assets';
import {
  Block,
  HeaderTitle,
  Image,
  Text,
  Pressable,
  ScrollView,
} from '@components';
import {width} from '@responsive';
import {COLORS} from '@theme';
import LinearGradient from 'react-native-linear-gradient';
import {commonRoot} from 'navigation/navigationRef';
import router from '@router';
export default function CareSicker({route}) {
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
        <Block width={width - 24} marginHorizontal={12} marginTop={10}>
          <ScrollView contentContainerStyle={{paddingBottom: 100}}>
            <Pressable
              onPress={() =>
                commonRoot.navigate(router.SICKER_SERVICE_DURATION_DAY, {
                  addressId: route?.params?.addressId,
                  service_id: route?.params?.service_id,
                })
              }
              paddingBottom={23}
              backgroundColor={COLORS.white}
              radius={15}
              alignCenter>
              <Image
                source={image.image_care_elederly_1}
                marginTop={30}
                width={width - 178}
                height={157.79}
              />
              <Text marginTop={34.2} fontSize={15} semiBold color={COLORS.red4}>
                Dịch vụ theo buổi/ngày
              </Text>
              <Text
                marginHorizontal={15}
                marginTop={15}
                fontSize={15}
                regular
                color={COLORS.black1}>
                Giúp khách hàng linh hoạt lựa chọn cần buổi nào đặt lịch buổi
                đó, nhanh chóng tiện lợi. Chỉ với 60s đăng việc, linh hoạt 4
                hoặc 8 tiếng
              </Text>
            </Pressable>
            <Pressable
              onPress={() =>
                commonRoot.navigate(router.SICKER_SERVICE_DURATION_MONTH, {
                  addressId: route?.params?.addressId,
                  service_id: route?.params?.service_id,
                  service_sub_id: 6,
                })
              }
              marginTop={12}
              paddingBottom={23}
              backgroundColor={COLORS.white}
              radius={15}
              alignCenter>
              <Image
                source={image.image_care_elederly_2}
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
                Linh hoạt xếp lịch làm việc cố định theo thời gian quý khách.
                Tiết kiệm thời gian đăng việc, tránh thanh toán nhiều lần
              </Text>
            </Pressable>
          </ScrollView>
        </Block>
      </LinearGradient>
    </Block>
  );
}
