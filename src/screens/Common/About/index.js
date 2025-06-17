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
import {COLORS} from '@theme';
import {useEffect, useState} from 'react';
import {Linking, Modal, SafeAreaView} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {commonRoot} from 'navigation/navigationRef';
import router from '@router';
import {useDispatch, useSelector} from 'react-redux';
import actions from '@actions';
import {URL_API} from 'redux/sagas/common';
export default function About() {
  const [modal, setModal] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: actions.SOCIAL,
    });
    dispatch({
      type: actions.SYSOPTIONS,
    });
  }, [dispatch]);
  const socials = useSelector(state => state.getSocial?.data || []);
  const sysoptions = useSelector(state => state.sysoptions?.data || []);

  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <StatusBar />
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
      <Block row marginTop={15} marginLeft={12} gap={12}>
        {socials.map(social => (
          <Pressable
            onPress={() => Linking.openURL(social?.link)}
            width={59.95}
            height={59.95}
            radius={8}
            overflow={'hidden'}
            key={social?.title}>
            <Image
              source={{uri: `${URL_API.uploads}/${social?.picture}`}}
              width={59.95}
              height={59.95}
            />
          </Pressable>
        ))}
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
                Ver {sysoptions?.app_version}
              </Text>
            </Block>
          </Block>
        </SafeAreaView>
      </Modal>
    </Block>
  );
}
