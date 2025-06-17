import {icon} from '@assets';
import {
  Block,
  ButtonSubmitService,
  HeaderChooseTime,
  Image,
  Pressable,
  SANStaffDuties,
  ScrollView,
  StatusBar,
  Switch,
  Text,
} from '@components';
import {width} from '@responsive';
import {COLORS} from '@theme';
import {useEffect, useState} from 'react';
import {commonRoot} from 'navigation/navigationRef';
import router from '@router';
import {useDispatch, useSelector} from 'react-redux';
import actions from '@actions';
export default function Elederly_Servicedurationday({route}) {
  const [isActive, setIsActive] = useState(false);
  const [choose, setChoose] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type: actions.GET_DETAIL_SERVICE_SUB, params: {item_id: 3}});
    dispatch({
      type: actions.GET_ADDRESS_SAVE,
    });
  }, [dispatch]);
  const addressInfo = useSelector(state => state.getAddressSave?.data || []);
  const address = addressInfo?.find(
    item => item.item_id === route?.params?.addressId,
  );
  const detailSub = useSelector(state => state.getDetailServiceSub?.data || []);
  const durationSelected = detailSub?.durations?.find(
    item => item.item_id === choose,
  );

  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <StatusBar />
      <ScrollView contentContainerStyle={{paddingBottom: 181}}>
        <HeaderChooseTime
          titleAddress={address.title}
          address={address.address_full}
        />
        <Block marginHorizontal={12} marginTop={20}>
          <Text fontSize={15} semiBold color={COLORS.black2}>
            Chọn thời lượng
          </Text>
          <Block marginTop={15} row columnGap={12}>
            {detailSub?.durations?.map(item => (
              <Pressable
                key={item.item_id}
                onPress={() => setChoose(item.item_id)}
                width={(width - 24) / 2 - 6}
                radius={8}
                paddingBottom={18}
                borderWidth={1}
                borderColor={
                  choose === item.item_id ? COLORS.red4 : COLORS.white2
                }
                backgroundColor={
                  choose === item.item_id ? COLORS.pinkWhite2 : COLORS.white
                }
                alignCenter>
                <Text
                  marginTop={19}
                  fontSize={15}
                  medium
                  color={choose === item.item_id ? COLORS.red4 : COLORS.black2}>
                  {item?.short}
                </Text>
                <Text
                  marginTop={20}
                  fontSize={15}
                  regular
                  color={
                    choose === item.item_id ? COLORS.black2 : COLORS.placeholder
                  }>
                  {item?.title}
                </Text>
              </Pressable>
            ))}
          </Block>
          <Text fontSize={14} regular color={COLORS.placeholder} marginTop={21}>
            Tuỳ chọn
          </Text>
          <Block alignCenter marginTop={15} row>
            <Image
              source={icon.icon_option_staff_favorite}
              width={30}
              height={27.95}
            />
            <Text fontSize={15} marginLeft={7} regular color={COLORS.black6}>
              Ưu tiên nhân viên yêu thích
            </Text>
            <Block absolute right={0} width={46} height={23}>
              <Switch value={isActive} onValueChange={setIsActive} />
            </Block>
          </Block>
          <SANStaffDuties
            top={30}
            task_todo={detailSub?.service?.tasks_todo}
            task_nottodo={detailSub?.service?.tasks_nottodo}
          />
        </Block>
      </ScrollView>

      <ButtonSubmitService
        titleTop={durationSelected?.title}
        titleBottom={detailSub?.service?.title}
        onPress={() =>
          commonRoot.navigate(router.SELECT_DAY_WORKING, {
            addressId: route?.params?.addressId,
            service_id: route?.params?.service_id,
            service_sub_id: 3,
            duration_id: durationSelected?.item_id,
            duration: durationSelected?.title,
            name_service: detailSub?.service?.title,
          })
        }
      />
    </Block>
  );
}
