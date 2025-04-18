import {icon, image} from '@assets';
import {
  Block,
  HeaderTitle,
  Text,
  Icon,
  Image,
  Pressable,
  HeaderModal,
} from '@components';
import {width} from '@responsive';
import {COLORS, FONTS} from '@theme';
import {useEffect, useState} from 'react';
import {Modal, SafeAreaView, ScrollView} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {commonRoot} from 'navigation/navigationRef';
import router from '@router';
import {useDispatch, useSelector} from 'react-redux';
import actions from '@actions';
import {URL_API} from 'redux/sagas/common';
import RenderHTML from 'react-native-render-html';
export default function Help() {
  const [visibleModalHelp, setVisibleModalHelp] = useState(0);
  const dispatch = useDispatch();
  const handleHelp = () => {
    setVisibleModalHelp(!visibleModalHelp);
  };
  useEffect(() => {
    dispatch({
      type: actions.GET_HELP,
      params: {number: 11},
    });
  }, [dispatch]);
  const help = useSelector(state => state.getHelp?.data || []);

  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderTitle title={'Hỗ trợ'} canGoBack />
      <Block
        width={width - 24}
        paddingBottom={15}
        marginTop={15}
        marginLeft={12}
        radius={8}
        backgroundColor={COLORS.white}>
        <Block width={width - 44} marginHorizontal={12} marginTop={17}>
          <Pressable onPress={handleHelp} row alignCenter width={width - 48}>
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
                SupportSAN@gmail.com
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
                1900 1234
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
      <Modal visible={visibleModalHelp} transparent="fade">
        <SafeAreaView style={{flex: 1}}>
          <Block flex backgroundColor={COLORS.gray10}>
            <ScrollView>
              <Block width={width} height={199.6}>
                <Image
                  source={{
                    uri: `${URL_API.uploads}/${help?.picture}`,
                  }}
                  width={width}
                  height={199.6}
                  resizeMode="cover"
                />
                <Pressable
                  onPress={handleHelp}
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
                  marginTop={15}>
                  {help?.title}
                </Text>
                <Block marginHorizontal={12} marginTop={16}>
                  <RenderHTML
                    contentWidth={width - 48}
                    source={{html: help?.content}}
                    tagsStyles={{
                      p: {
                        fontSize: 14,
                        fontFamily: FONTS.regular,
                        color: COLORS.black2,
                        lineHeight: 22,
                      },
                    }}
                  />
                </Block>
              </Block>
            </ScrollView>
          </Block>
        </SafeAreaView>
      </Modal>
    </Block>
  );
}
//Hello
