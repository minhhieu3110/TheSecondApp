import actions from '@actions';
import {
  Block,
  Icon,
  Image,
  Loading,
  Pressable,
  ScrollView,
  Text,
} from '@components';
import {height, width} from '@responsive';
import {COLORS} from '@theme';
import {root} from 'navigation/navigationRef';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {URL_API} from 'redux/sagas/common';
import Entypo from 'react-native-vector-icons/Entypo';
import RenderHTML from 'react-native-render-html';
export default function Benefit() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: actions.GET_HELP,
      params: {number: 11},
    });
  }, [dispatch]);
  const benefit = useSelector(state => state.getHelp?.data || []);
  const {isLoading} = useSelector(state => state.getHelp);
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      {isLoading ? (
        <Loading />
      ) : (
        <ScrollView>
          <Image
            width={width}
            height={199}
            resizeMode="cover"
            source={{uri: `${URL_API.uploads}/${benefit?.picture}`}}>
            <Pressable
              onPress={() => root.goBack()}
              width={30}
              height={30}
              radius={30}
              backgroundColor={COLORS.black2}
              opacity={0.6}
              marginTop={13}
              marginLeft={12}
              justifyCenter
              alignCenter
              overflow={'hidden'}>
              <Icon
                IconType={Entypo}
                iconName={'chevron-small-left'}
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
              <Text
                fontSize={18}
                semiBold
                color={COLORS.black1}
                marginLeft={12}
                marginTop={15}>
                {benefit?.title}
              </Text>
              <RenderHTML
                contentWidth={width - 24}
                source={{html: benefit?.content}}
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
                    fontFamily: 'SVN-Poppins', // Fixed missing font family
                    color: COLORS.blue,
                    lineHeight: 22,
                  },
                }}
              />
            </Block>
          </Block>
        </ScrollView>
      )}
    </Block>
  );
}
