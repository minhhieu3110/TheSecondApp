import {image} from '@assets';
import {Block, HeaderTitle, Icon, Image, Text, TextInput} from '@components';
import {width} from '@responsive';
import {COLORS} from '@theme';
import {ScrollView} from 'react-native';
import RadialGradient from 'react-native-radial-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default function DetailMessage() {
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderTitle title={'Lê Thu Huyền'} canGoBack />
      <ScrollView>
        <Block marginTop={13} marginHorizontal={12} gap={22}>
          <Block row width={width - 117}>
            <Image
              source={image.image_staff}
              width={30}
              height={30}
              radius={50}
            />
            <Block
              width={width - 209}
              paddingLeft={10}
              paddingTop={10}
              paddingRight={11}
              paddingBottom={17}
              marginLeft={10}
              backgroundColor={COLORS.white}
              radius={8}>
              <Text fontSize={14} regular color={COLORS.black2} lineHeight={22}>
                Lorem ipsum dolor sit amet, cons adipiscing elit, sed diam nonum
                nib euismod tincidunt ut laoreet
              </Text>
            </Block>
            <Block absolute bottom={0} right={0}>
              <Text
                marginLeft={10}
                fontSize={10}
                regular
                color={COLORS.textLineThrough}>
                08:05 AM
              </Text>
            </Block>
          </Block>
          <Block alignEnd>
            <Block row width={width - 154}>
              <Block justifyEnd>
                <Block>
                  <Text fontSize={10} regular color={COLORS.textLineThrough}>
                    08:05 AM
                  </Text>
                </Block>
              </Block>
              <Block
                width={width - 209}
                paddingLeft={10}
                paddingTop={10}
                paddingRight={11}
                paddingBottom={17}
                backgroundColor={COLORS.darkRed1}
                marginLeft={10}
                radius={8}>
                <Text
                  fontSize={14}
                  regular
                  color={COLORS.white}
                  lineHeight={22}>
                  Lorem ipsum dolor sit amet, cons adipiscing elit, sed diam non
                </Text>
              </Block>
            </Block>
          </Block>
          <Block row width={width - 117}>
            <Image
              source={image.image_staff}
              width={30}
              height={30}
              radius={50}
            />
            <Block
              width={width - 209}
              paddingLeft={10}
              paddingTop={10}
              paddingRight={11}
              paddingBottom={17}
              marginLeft={10}
              backgroundColor={COLORS.white}
              radius={8}>
              <Text fontSize={14} regular color={COLORS.black2} lineHeight={22}>
                Lorem ipsum dolor sit amet, cons adipiscing elit, sed diam nonum
                nib euismod tincidunt ut laoreet
              </Text>
            </Block>
            <Block absolute bottom={0} right={0}>
              <Text
                marginLeft={10}
                fontSize={10}
                regular
                color={COLORS.textLineThrough}>
                08:05 AM
              </Text>
            </Block>
          </Block>
          <Block alignEnd>
            <Block row width={width - 154}>
              <Block justifyEnd>
                <Block>
                  <Text fontSize={10} regular color={COLORS.textLineThrough}>
                    08:05 AM
                  </Text>
                </Block>
              </Block>
              <Block
                width={width - 209}
                paddingLeft={10}
                paddingTop={10}
                paddingRight={11}
                paddingBottom={17}
                backgroundColor={COLORS.darkRed1}
                marginLeft={10}
                radius={8}>
                <Text
                  fontSize={14}
                  regular
                  color={COLORS.white}
                  lineHeight={22}>
                  Lorem ipsum dolor sit amet, cons adipiscing elit, sed diam non
                </Text>
              </Block>
            </Block>
          </Block>
        </Block>
      </ScrollView>
      <Block
        absolute
        bottom={0}
        width={width}
        height={72}
        backgroundColor={COLORS.white}
        alignCenter
        row>
        <TextInput
          marginLeft={12}
          marginVertical={12}
          width={width - 84}
          backgroundColor={COLORS.borderColor1}
          paddingLeft={26}
          radius={24}
          placeholder={'Soạn nội dung'}
        />
        <Block
          width={48}
          height={48}
          overflow={'hidden'}
          radius={50}
          marginLeft={12}>
          <RadialGradient
            colors={COLORS.gradient5}
            style={{
              width: 48,
              height: 48,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon
              IconType={FontAwesome}
              iconName={'send'}
              iconColor={COLORS.white}
            />
          </RadialGradient>
        </Block>
      </Block>
    </Block>
  );
}
