import actions from '@actions';
import {
  Block,
  Icon,
  Image,
  Pressable,
  ScrollView,
  StatusBar,
} from '@components';
import {width} from '@responsive';
import {COLORS} from '@theme';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {URL_API} from 'redux/sagas/common';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {root} from 'navigation/navigationRef';
import RenderHTML from 'react-native-render-html';
export default function TermsOfUseOnBoarding() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: actions.GET_HELP,
      params: {number: 7},
    });
  }, [dispatch]);
  const help = useSelector(state => state.getHelp?.data || []);
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <StatusBar />
      <ScrollView contentContainerStyle={{paddingBottom: 20}}>
        <Image
          width={width}
          height={199}
          resizeMode="cover"
          source={{uri: `${URL_API.uploads}/${help?.picture}`}}>
          <Pressable
            onPress={() => root.goBack()}
            width={30}
            height={30}
            radius={30}
            backgroundColor={COLORS.black2}
            opacity={0.6}
            marginTop={15}
            marginLeft={15}
            justifyCenter
            alignCenter
            overflow={'hidden'}>
            <Icon
              IconType={Ionicons}
              iconName={'chevron-back-outline'}
              iconSize={25}
              iconColor={COLORS.white}
            />
          </Pressable>
        </Image>
        <Block
          marginHorizontal={12}
          marginTop={-12}
          backgroundColor={COLORS.white}
          radius={10}>
          <Block marginHorizontal={12} marginTop={10}>
            <RenderHTML
              contentWidth={width - 24}
              source={{html: help?.content}}
              tagsStyles={{
                p: {
                  fontSize: 14,
                  fontWeight: 'regular',
                  fontFamily: 'SVN-Poppins',
                  color: COLORS.black2,
                  lineHeight: 22,
                },
                strong: {
                  fontSize: 14,
                  fontWeight: 'bold',
                  fontFamily: 'SVN-Poppins',
                  color: COLORS.black2,
                  lineHeight: 22,
                },
                a: {
                  fontSize: 14,
                  // fontFamily: FONTS.regular,
                  color: COLORS.blue,
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
