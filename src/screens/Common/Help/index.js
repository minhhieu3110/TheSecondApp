import {icon, image} from '@assets';
import {
  Block,
  HeaderTitle,
  Text,
  Icon,
  Image,
  Pressable,
  HeaderModal,
  StatusBar,
} from '@components';
import {width} from '@responsive';
import {COLORS, FONTS} from '@theme';
import {useEffect, useState} from 'react';
import {Modal, SafeAreaView, ScrollView} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {commonRoot} from 'navigation/navigationRef';
import router from '@router';
import {useDispatch, useSelector} from 'react-redux';
import actions from '@actions';
import {URL_API} from 'redux/sagas/common';
import RenderHTML from 'react-native-render-html';
import {formatPhone} from '@utils';
export default function Help() {
  const [visibleModalHelp, setVisibleModalHelp] = useState(false);
  const dispatch = useDispatch();
  const number = 11;
  useEffect(() => {
    dispatch({
      type: actions.GET_HELP,
      params: {number: 11},
    });
    dispatch({
      type: actions.SYSOPTIONS,
    });
  }, [dispatch, number]);
  const help = useSelector(state => state.getHelp?.data || []);
  const {isLoading} = useSelector(state => state.getHelp);
  const sysoptions = useSelector(state => state.sysoptions?.data || []);
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <StatusBar />
      <HeaderTitle title={'Hỗ trợ'} canGoBack />
      <Block
        width={width - 24}
        paddingBottom={15}
        marginTop={15}
        marginLeft={12}
        radius={8}
        backgroundColor={COLORS.white}>
        <Block width={width - 44} marginHorizontal={12} marginTop={17}>
          <Pressable
            onPress={() => commonRoot.navigate(router.BENEFIT)}
            row
            alignCenter
            width={width - 48}>
            <Text fontSize={15} regular color={COLORS.black5}>
              Lợi ích khi sử dụng SAN
            </Text>
            <Block absolute right={0}>
              <Icon
                iconName={'keyboard-arrow-right'}
                IconType={MaterialIcons}
                iconSize={13.68}
              />
            </Block>
          </Pressable>
          <Block
            borderWidth={1}
            borderColor={COLORS.grayBreak}
            marginTop={15}
            marginBottom={17}
          />
          <Pressable
            onPress={() => commonRoot.navigate(router.THEQUESTION)}
            row
            alignCenter
            width={width - 48}>
            <Text fontSize={15} regular color={COLORS.black5}>
              Câu hỏi thường gặp
            </Text>
            <Block absolute right={0}>
              <Icon
                iconName={'keyboard-arrow-right'}
                IconType={MaterialIcons}
                iconSize={13.68}
              />
            </Block>
          </Pressable>
          <Block
            borderWidth={1}
            borderColor={COLORS.grayBreak}
            marginTop={15}
            marginBottom={17}
          />
          <Pressable
            onPress={() => commonRoot.navigate(router.TERMS_OF_USE)}
            row
            alignCenter
            width={width - 48}>
            <Text fontSize={15} regular color={COLORS.black5}>
              Điều khoản sử dụng
            </Text>
            <Block absolute right={0}>
              <Icon
                iconName={'keyboard-arrow-right'}
                IconType={MaterialIcons}
                iconSize={13.68}
              />
            </Block>
          </Pressable>
          <Block
            borderWidth={1}
            borderColor={COLORS.grayBreak}
            marginTop={15}
            marginBottom={17}
          />
          <Pressable
            onPress={() => commonRoot.navigate(router.PRIVACY_SECURITY)}
            row
            alignCenter
            width={width - 48}>
            <Text fontSize={15} regular color={COLORS.black5}>
              Chính sách bảo mật
            </Text>
            <Block absolute right={0}>
              <Icon
                iconName={'keyboard-arrow-right'}
                IconType={MaterialIcons}
                iconSize={13.68}
              />
            </Block>
          </Pressable>
        </Block>
      </Block>
      <Block
        width={width - 24}
        paddingBottom={15}
        marginTop={15}
        marginLeft={12}
        radius={8}
        backgroundColor={COLORS.white}>
        <Block width={width - 44} marginHorizontal={12} marginTop={17}>
          <Block row alignCenter width={width - 48}>
            <Text fontSize={15} regular color={COLORS.black5}>
              Email
            </Text>
            <Block absolute right={0} row alignCenter>
              <Text fontSize={15} regular color={COLORS.red4} marginRight={10}>
                {sysoptions?.email}
              </Text>
              <Icon
                iconName={'keyboard-arrow-right'}
                IconType={MaterialIcons}
                iconSize={13.68}
              />
            </Block>
          </Block>
          <Block
            borderWidth={1}
            borderColor={COLORS.grayBreak}
            marginTop={15}
            marginBottom={17}
          />
          <Block row alignCenter width={width - 48}>
            <Text fontSize={15} regular color={COLORS.black5}>
              Hotline
            </Text>
            <Block absolute right={0} row alignCenter>
              <Text fontSize={15} regular color={COLORS.red4} marginRight={10}>
                {formatPhone(sysoptions?.hotline)}
              </Text>
              <Icon
                iconName={'keyboard-arrow-right'}
                IconType={MaterialIcons}
                iconSize={13.68}
              />
            </Block>
          </Block>
          <Block
            borderWidth={1}
            borderColor={COLORS.grayBreak}
            marginTop={15}
            marginBottom={17}
          />
          <Block row alignCenter width={width - 48}>
            <Text fontSize={15} regular color={COLORS.black5}>
              Zalo
            </Text>
            <Block absolute right={0}>
              <Image source={icon.icon_zalo} width={31} height={31} />
            </Block>
          </Block>
        </Block>
      </Block>
    </Block>
  );
}
//Hello
