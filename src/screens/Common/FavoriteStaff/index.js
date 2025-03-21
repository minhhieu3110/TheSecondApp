import {icon, image} from '@assets';
import {Block, Button, HeaderTitle, Icon, Image, Text} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {bottomRoot, commonRoot} from 'navigation/navigationRef';
import {useState} from 'react';
import {ScrollView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default function FavoriteStaff() {
  const [addStaff, setAddStaff] = useState(false);
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderTitle
        title={'Nhân viên yêu thích'}
        root={bottomRoot}
        screenName={router.PROFILE_SCREEN}
      />
      <ScrollView
        contentContainerStyle={{marginTop: 15}}
        showsVerticalScrollIndicator={false}>
        <Block width={width - 24} marginLeft={12}>
          <Block
            height={97}
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
            <Block height={43} marginLeft={10.7} marginTop={15}>
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
            </Block>
            <Image
              source={icon.icon_heart_staff}
              height={34}
              width={34}
              absolute
              right={10}
              marginTop={10}
            />
          </Block>
          <Block
            height={97}
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
                source={image.image_staff_1}
                width={'100%'}
                height={'100%'}
                resizeMode="contain"
              />
            </Block>
            <Block height={43} marginLeft={10.7} marginTop={15}>
              <Text fontSize={14} semiBold color={COLORS.black1}>
                Trịnh Thanh Tâm
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
            </Block>
            <Image
              source={icon.icon_heart_staff}
              height={34}
              width={34}
              absolute
              right={10}
              marginTop={10}
            />
          </Block>
        </Block>
      </ScrollView>
      <Button
        title="Thêm"
        onPress={() => commonRoot.navigate(router.ADD_STAFF)}
      />
    </Block>
  );
}
