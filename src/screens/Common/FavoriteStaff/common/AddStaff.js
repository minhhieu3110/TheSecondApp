import {icon, image} from '@assets';
import {
  Block,
  Button,
  DoubleButton,
  HeaderTitle,
  Icon,
  Image,
  Pressable,
  Text,
} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {bottomRoot, commonRoot} from 'navigation/navigationRef';
import {useState} from 'react';
import {Modal, SafeAreaView, ScrollView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default function AddStaff() {
  return (
    <>
      <Block flex backgroundColor={COLORS.gray10}>
        <HeaderTitle title={'Thêm nhân viên yêu thích'} canGoBack />
        <ScrollView
          contentContainerStyle={{marginTop: 15}}
          showsVerticalScrollIndicator={false}>
          <Block width={width - 24} marginLeft={12}>
            <Block
              height={125}
              backgroundColor={COLORS.white}
              radius={8}
              row
              marginBottom={12}>
              <Block
                width={77}
                height={77}
                radius={8}
                marginLeft={10}
                marginTop={10}>
                <Image
                  source={image.image_staff}
                  width={'100%'}
                  height={'100%'}
                  resizeMode="contain"
                />
              </Block>
              <Block height={96} marginLeft={10.7} marginTop={15}>
                <Text fontSize={14} semiBold color={COLORS.black1}>
                  Lê Thu Huyền
                </Text>
                <Block marginLeft={2} row alignCenter>
                  <Text
                    fontSize={14}
                    regular
                    color={COLORS.placeholder}
                    marginRight={5}>
                    4.8
                  </Text>
                  <Icon
                    IconType={FontAwesome}
                    iconName={'star'}
                    iconSize={18}
                    iconColor={COLORS.yellow3}
                  />
                </Block>
                <Text fontSize={14} regular color={COLORS.red4} marginTop={11}>
                  Chăm sóc người già
                </Text>
                <Text
                  fontSize={14}
                  regular
                  color={COLORS.placeholder}
                  marginTop={13}>
                  08:00, 12/02/2025
                </Text>
                <Text></Text>
              </Block>
              <Pressable
                absolute
                right={10}
                marginTop={10}
                onPress={() => commonRoot.navigate(router.PROFILE_STAFF)}>
                <Image
                  source={icon.icon_heart_staff_gray}
                  height={34}
                  width={34}
                />
              </Pressable>
            </Block>
          </Block>
        </ScrollView>
      </Block>
    </>
  );
}
