import {icon} from '@assets';
import {Block, HeaderTitle, Text, Icon, Image} from '@components';
import {width} from '@responsive';
import {COLORS} from '@theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default function Help() {
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
          <Block row alignCenter width={width - 48}>
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
          </Block>
          <Block
            borderWidth={1}
            borderColor={COLORS.grayBreak}
            marginTop={15}
            marginBottom={17}
          />
          <Block row alignCenter width={width - 48}>
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
          </Block>
          <Block
            borderWidth={1}
            borderColor={COLORS.grayBreak}
            marginTop={15}
            marginBottom={17}
          />
          <Block row alignCenter width={width - 48}>
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
          </Block>
          <Block
            borderWidth={1}
            borderColor={COLORS.grayBreak}
            marginTop={15}
            marginBottom={17}
          />
          <Block row alignCenter width={width - 48}>
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
          </Block>
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
    </Block>
  );
}
//Hello
