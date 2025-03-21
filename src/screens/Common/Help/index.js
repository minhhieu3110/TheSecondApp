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
import {COLORS} from '@theme';
import {useState} from 'react';
import {Modal, SafeAreaView, ScrollView} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {commonRoot} from 'navigation/navigationRef';
import router from '@router';
export default function Help() {
  const [visibleModalHelp, setVisibleModalHelp] = useState(0);
  const handleHelp = () => {
    setVisibleModalHelp(!visibleModalHelp);
  };
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
                  source={image.image_help}
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
                  Lợi ích khi sử dụng SAN
                </Text>
                <Text
                  fontSize={14}
                  regular
                  color={COLORS.black1}
                  marginLeft={12}
                  marginTop={16}
                  lineHeight={22}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been industry's standard
                  dummy text ever since the 1500s, when anm unknown printer took
                  a galley of type and scrambledt it to make a type specimen
                  book. It has survived t only five centuries, but also the leap
                  into electritypesetting, remaining essentially unchanged. It
                  was popularisn in the 1960s with the release of Letraset
                  sheeticontaining Lorem Ipsum passages, and more recently wt
                  desktop publishing software like Aldus PageMaker incliversions
                  of Lorem Ipsum.
                </Text>
                <Block
                  width={212}
                  height={202}
                  marginHorizontal={96}
                  marginTop={39}>
                  <Image
                    source={image.image_sr_1}
                    width={212}
                    height={202}
                    resizeMode="cover"
                  />
                </Block>
                <Text
                  fontSize={14}
                  regular
                  color={COLORS.black1}
                  marginLeft={12}
                  marginTop={10}
                  lineHeight={22}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been industry's standard
                  dummy text ever since the 1500s, when anm unknown printer took
                  a galley of type and scrambledt it to make a type specimen
                  book. It has survived t only five centuries, but also the leap
                  into electritypesetting, remaining essentially unchanged. It
                  was popularisn in the 1960s with the release of Letraset
                  sheeticontaining Lorem Ipsum passages, and more recently wt
                  desktop publishing software like Aldus PageMaker incliversions
                  of Lorem Ipsum.
                </Text>
              </Block>
            </ScrollView>
          </Block>
        </SafeAreaView>
      </Modal>
    </Block>
  );
}
//Hello
