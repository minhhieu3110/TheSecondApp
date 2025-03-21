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
export default function About() {
  const [modal, setModal] = useState(0);
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderTitle title={'Về chúng tôi'} canGoBack />
      <Block
        width={width - 24}
        paddingBottom={15}
        marginTop={15}
        marginLeft={12}
        radius={8}
        backgroundColor={COLORS.white}>
        <Block width={width - 44} marginHorizontal={12} marginTop={17}>
          <Pressable
            onPress={() => setModal(!modal)}
            row
            alignCenter
            width={width - 48}>
            <Text fontSize={15} regular color={COLORS.black5}>
              Thông tin về ứng dụng
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
            onPress={() => commonRoot.navigate(router.INTRODUCE_SAN)}
            row
            alignCenter
            width={width - 48}>
            <Text fontSize={15} regular color={COLORS.black5}>
              Giới thiệu về SAN
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
      <Text
        marginTop={23}
        marginLeft={12}
        fontSize={15}
        semiBold
        color={COLORS.black2}>
        Mạng xã hội
      </Text>
      <Block row marginTop={15} marginLeft={12}>
        <Block width={59.95} height={59.95} marginRight={12}>
          <Image
            source={icon.icon_fb}
            width={59.95}
            height={59.95}
            radius={8}
          />
        </Block>
        <Block width={59.95} height={59.95} marginRight={12}>
          <Image
            source={icon.icon_youtube}
            width={59.95}
            height={59.95}
            radius={8}
          />
        </Block>
        <Block width={59.95} height={59.95} marginRight={12}>
          <Image
            source={icon.icon_instagram}
            width={59.95}
            height={59.95}
            radius={8}
          />
        </Block>
        <Block width={59.95} height={59.95} marginRight={12}>
          <Image
            source={icon.icon_zalo1}
            width={59.95}
            height={59.95}
            radius={8}
          />
        </Block>
      </Block>
      <Modal visible={modal}>
        <SafeAreaView style={{flex: 1}}>
          <Block flex backgroundColor={COLORS.gray10}>
            <HeaderModal
              title={'Thông tin ứng dụng'}
              onPress={() => setModal(!modal)}
            />
            <Block
              width={width - 24}
              paddingBottom={12}
              radius={8}
              backgroundColor={COLORS.white}
              marginLeft={12}
              marginTop={15}>
              <Text
                fontSize={15}
                semiBold
                color={COLORS.black3}
                marginTop={17}
                marginLeft={12}>
                Phiên bản hiên tại
              </Text>
              <Text
                fontSize={20}
                regular
                color={COLORS.red4}
                marginTop={20}
                marginLeft={12}>
                Ver 1.2.2
              </Text>
            </Block>
          </Block>
        </SafeAreaView>
      </Modal>
    </Block>
  );
}
