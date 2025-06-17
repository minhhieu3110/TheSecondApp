import {image} from '@assets';
import {Block, Text, Icon, Image, Pressable, StatusBar} from '@components';
import {width} from '@responsive';
import {COLORS} from '@theme';
import {ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {root} from 'navigation/navigationRef';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import actions from '@actions';
import {URL_API} from 'redux/sagas/common';
import RenderHTML from 'react-native-render-html';
export default function DetailNew({route}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: actions.DETAIL_NEW,
      params: {item_id: route?.params?.item_id},
    });
  }, []);
  const detailNew = useSelector(state => state.detailNew?.data || []);

  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <StatusBar />
      <ScrollView>
        <Block width={width} height={199.6}>
          <Image
            source={{uri: detailNew?.picture}}
            width={width}
            height={199.6}
            resizeMode="cover"
          />
          <Pressable
            onPress={() => root.goBack()}
            width={30}
            height={30}
            radius={50}
            absolute
            top={13}
            left={12}
            backgroundColor={COLORS.black}
            opacity={0.6}>
            <Icon
              IconType={Ionicons}
              iconName={'chevron-back-outline'}
              iconSize={30}
              iconColor={COLORS.white}
            />
          </Pressable>
        </Block>
        <Block
          marginTop={-19.6}
          width={width - 24}
          paddingBottom={27}
          radius={8}
          backgroundColor={COLORS.white}
          marginLeft={12}>
          <Text
            fontSize={18}
            semiBold
            color={COLORS.black1}
            marginLeft={12}
            marginTop={14}
            uppercase>
            {detailNew?.title}
          </Text>
          <Block marginHorizontal={12} marginTop={16}>
            <RenderHTML
              contentWidth={width - 48}
              source={{html: detailNew?.content}}
              tagsStyles={{
                p: {
                  fontSize: 14,
                  color: COLORS.black2,
                  fontWeight: 'regular',
                  lineHeight: 22,
                },
              }}
            />
          </Block>
        </Block>
      </ScrollView>
    </Block>
  );
}
