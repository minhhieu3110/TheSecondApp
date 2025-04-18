import actions from '@actions';
import {icon} from '@assets';
import {
  Block,
  Button,
  HeaderTitle,
  Image,
  Pressable,
  ScrollView,
  Text,
} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {commonRoot} from 'navigation/navigationRef';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

export default function Address({route}) {
  const [service, setService] = useState(null);
  useEffect(() => {
    if (route.params?.service) {
      setService(route.params?.service);
    }
  }, [route.params?.service]);
  const handleService = () => {
    service === 'elderly_care' && commonRoot.navigate(router.CARE_ELEDERLY);
    service === 'patient_care' && commonRoot.navigate(router.CARE_SICKER);
    service === 'physical_therapy' &&
      commonRoot.navigate(router.PHYSICAL_THERAPY);
    service === 'house_cleaning' && commonRoot.navigate(router.HOUSEWORK);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: actions.GET_ADDRESS_SAVE,
    });
  }, [dispatch]);
  const addressSaved = useSelector(state => state.getAddressSave?.data || []);
  console.log(service);

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
      <ScrollView contentContainerStyle={{paddingBottom: 100}}>
        <Block
          width={width - 24}
          marginHorizontal={12}
          marginTop={15}
          spaceBetween>
          {addressSaved.map(item => (
            <Pressable
              // onPress={() =>
              //   commonRoot.navigate(router.CHOOSE_SERVICE, {
              //     id: route.params?.id,
              //   })
              // }
              onPress={handleService}
              key={item.item_id}
              radius={8}
              backgroundColor={COLORS.white}
              paddingBottom={18}
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
                  {item.title}
                </Text>
              </Block>
              <Text
                fontSize={14}
                regular
                color={COLORS.placeholder}
                numberOfLines={2}
                marginLeft={39}
                marginTop={9}>
                {item.address_full}
              </Text>
            </Pressable>
          ))}
        </Block>
      </ScrollView>
      <Button
        title="Thêm mới"
        onPress={() => commonRoot.navigate(router.ADD_NEW_ADDRESS)}
      />
    </Block>
  );
}
