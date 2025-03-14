import {icon, image} from '@assets';
import {
  Block,
  DoubleButton,
  HeaderTitle,
  Icon,
  Image,
  Pressable,
  Text,
} from '@components';
import {width} from '@responsive';
import {COLORS} from '@theme';
import {ScrollView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default function ProfileStaffBlocked() {
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderTitle title={'Lê Thu Huyền'} canGoBack />
      <ScrollView contentContainerStyle={{marginTop: 0}}>
        <Block width={width} height={333}>
          <Image
            source={image.image_profile_staff}
            width={'100%'}
            height={'100%'}
            resizeMode="cover"
          />
        </Block>
        <Block
          width={width - 24}
          //   height={401}
          backgroundColor={COLORS.white}
          marginLeft={12}
          marginTop={-44}
          radius={8}>
          <Block width={width - 48} height={49} left={12} row marginTop={12}>
            <Block>
              <Text fontSize={15} semiBold color={COLORS.black1}>
                Lê Thu Huyền
              </Text>
              <Block marginLeft={2} marginTop={11} row alignCenter>
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
            <Pressable absolute right={0}>
              <Image source={icon.icon_heart_staff} height={34} width={34} />
            </Pressable>
          </Block>
          <Block
            width={width - 48}
            height={5}
            marginTop={13}
            marginLeft={12}
            backgroundColor={'#E8E8E8'}
          />
          <Block width={width - 44} marginLeft={10} marginTop={16}>
            <Block marginBottom={16}>
              <Block
                width={width - 48}
                row
                marginLeft={2}
                spaceBetween
                marginBottom={15}>
                <Text fontSize={14} regular color={COLORS.placeholder}>
                  Email
                </Text>
                <Text fontSize={14} regular color={COLORS.black1}>
                  Huyen123@gmail.com
                </Text>
              </Block>
              <Block borderWidth={1} borderColor={COLORS.grayBreak} />
            </Block>
            <Block marginBottom={16}>
              <Block
                width={width - 48}
                row
                marginLeft={2}
                spaceBetween
                marginBottom={15}>
                <Text fontSize={14} regular color={COLORS.placeholder}>
                  Năm sinh
                </Text>
                <Text fontSize={14} regular color={COLORS.black1}>
                  1995
                </Text>
              </Block>
              <Block borderWidth={1} borderColor={COLORS.grayBreak} />
            </Block>
            <Block marginBottom={16}>
              <Block
                width={width - 48}
                row
                marginLeft={2}
                spaceBetween
                marginBottom={15}>
                <Text fontSize={14} regular color={COLORS.placeholder}>
                  Quốc tịch
                </Text>
                <Text fontSize={14} regular color={COLORS.black1}>
                  Việt Nam{' '}
                </Text>
              </Block>
              <Block borderWidth={1} borderColor={COLORS.grayBreak} />
            </Block>
            <Block marginBottom={16}>
              <Block
                width={width - 48}
                row
                marginLeft={2}
                spaceBetween
                marginBottom={15}>
                <Text fontSize={14} regular color={COLORS.placeholder}>
                  Giới tính
                </Text>
                <Text fontSize={14} regular color={COLORS.black1}>
                  Nữ
                </Text>
              </Block>
              <Block borderWidth={1} borderColor={COLORS.grayBreak} />
            </Block>
            <Block marginBottom={16}>
              <Block
                width={width - 48}
                row
                marginLeft={2}
                spaceBetween
                marginBottom={15}>
                <Text fontSize={14} regular color={COLORS.placeholder}>
                  Bắt đầu làm việc
                </Text>
                <Text fontSize={14} regular color={COLORS.black1}>
                  10/10/2022
                </Text>
              </Block>
              <Block borderWidth={1} borderColor={COLORS.grayBreak} />
            </Block>
            <Block marginBottom={16}>
              <Block
                width={width - 48}
                row
                marginLeft={2}
                spaceBetween
                marginBottom={15}>
                <Text fontSize={14} regular color={COLORS.placeholder}>
                  Chuyên môn
                </Text>
                <Text
                  fontSize={14}
                  regular
                  color={COLORS.black1}
                  right
                  lineHeight={22}>
                  Chăm sóc người già {'\n'} Chăm sóc người bệnh tại nhà {'\n'}
                  Vật lý trị liệu tại nhà
                </Text>
              </Block>
            </Block>
          </Block>
        </Block>
      </ScrollView>
      <Block
        width={width}
        height={72}
        alignCenter
        justifyCenter
        backgroundColor={COLORS.white}
        absolute
        bottom={0}>
        <DoubleButton title1="Bỏ chặn" title2="Hỗ trợ" />
      </Block>
    </Block>
  );
}
