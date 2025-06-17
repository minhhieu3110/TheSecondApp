import {image} from '@assets';
import {
  Block,
  HeaderTitle,
  Image,
  Text,
  Pressable,
  ScrollView,
  StatusBar,
} from '@components';
import {height, width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {commonRoot} from 'navigation/navigationRef';
import LinearGradient from 'react-native-linear-gradient';

export default function CareElederly({route}) {
  return (
    <Block flex backgroundColor={COLORS.gradient5}>
      <StatusBar />
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
        <Block height={'94.29%'}>
          <ScrollView contentContainerStyle={{paddingBottom: 181}}>
            <Pressable
              onPress={() =>
                commonRoot.navigate(router.ELEDERLY_SERVICE_DURATION_DAY, {
                  addressId: route?.params?.addressId,
                  service_id: route?.params?.service_id,
                })
              }
              paddingBottom={15}
              backgroundColor={COLORS.white}
              radius={15}
              marginHorizontal={12}
              alignCenter>
              <Image
                source={image.image_care_elederly_1}
                marginTop={30}
                width={'50%'}
                height={'47.08%'}
              />
              <Text fontSize={15} semiBold color={COLORS.red4} marginTop={34.2}>
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
                commonRoot.navigate(router.ELEDERLY_SERVICE_DURATION_MONTH, {
                  addressId: route?.params?.addressId,
                  service_id: route?.params?.service_id,
                  service_sub_id: 4,
                })
              }
              marginTop={12}
              paddingBottom={15}
              backgroundColor={COLORS.white}
              marginHorizontal={12}
              radius={15}
              alignCenter>
              <Image
                source={image.image_care_elederly_2}
                marginTop={30}
                width={'50%'}
                height={'47.08%'}
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
