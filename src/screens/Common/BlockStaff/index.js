import {icon, image} from '@assets';
import {Block, Button, HeaderTitle, Icon, Image, Text} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {bottomRoot, commonRoot} from 'navigation/navigationRef';
import {useState} from 'react';
import {ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RadialGradient from 'react-native-radial-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default function BlockStaff() {
  const [addStaff, setAddStaff] = useState(false);
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderTitle title={'Danh sách chặn'} canGoBack />
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
            <Block
              absolute
              top={10}
              right={10.2}
              width={76.83}
              height={30.33}
              radius={15}
              overflow={'hidden'}
              alignCenter
              justifyCenter>
              <RadialGradient
                colors={COLORS.gradient5}
                stops={[0.1, 0.4, 0.3, 0.75]}
                center={[80, 50]}
                radius={200}
                style={{
                  width: 76.83,
                  height: 30.33,
                  borderRadius: 15,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text fontSize={13} medium color={COLORS.white}>
                  Bỏ chặn
                </Text>
              </RadialGradient>
            </Block>
          </Block>
        </Block>
      </ScrollView>
      <Button
        title="Thêm"
        onPress={() => commonRoot.navigate(router.ADD_BLOCK_STAFF)}
      />
    </Block>
  );
}
