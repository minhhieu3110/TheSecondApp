import actions from '@actions';
import {image} from '@assets';
import {Block, HeaderTitle, Image, Text, Pressable} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS, FONTS} from '@theme';
import {commonRoot} from 'navigation/navigationRef';
import {useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import RenderHTML from 'react-native-render-html';
import {URL_API} from 'redux/sagas/common';
export default function ChooseService({route}) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (route.params?.id) {
      dispatch({
        type: actions.GET_SERVICE_SUB,
        params: {service_id: route.params?.id},
      });
    }
  }, [dispatch]);
  const sub = useSelector(state => state.getServiceSub?.data || []);

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
        <Block width={width - 24} marginHorizontal={12} marginTop={10} gap={12}>
          {sub.map(sub => (
            <Pressable
              onPress={() =>
                commonRoot.navigate(router.CHOOSE_TIME_FOR_SERVICE, {
                  item_id: sub.item_id,
                })
              }
              key={sub.item_id}
              paddingBottom={23}
              backgroundColor={COLORS.white}
              radius={15}
              alignCenter>
              <Image
                source={{
                  uri: `http://san.baoan.app24h.net:81/uploads/${sub.picture}`,
                }}
                marginTop={30}
                width={width - 178}
                height={157.79}
              />
              <Text marginTop={34.2} fontSize={15} semiBold color={COLORS.red4}>
                {sub.title}
              </Text>
              <Block marginHorizontal={15} marginTop={15} width={width - 54}>
                <RenderHTML
                  contentWidth={width - 54}
                  source={{html: sub.short}}
                  tagsStyles={{
                    p: {
                      fontSize: 15,
                      fontFamily: FONTS.regular,
                      color: COLORS.black2,
                    },
                  }}
                />
              </Block>
            </Pressable>
          ))}
        </Block>
      </LinearGradient>
    </Block>
  );
}
