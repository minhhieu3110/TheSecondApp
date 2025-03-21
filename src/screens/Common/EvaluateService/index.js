import {image, icon} from '@assets';
import {
  Block,
  HeaderTitle,
  Image,
  RankStar,
  Text,
  TextInput,
} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {commonRoot} from 'navigation/navigationRef';

export default function EvaluateService() {
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderTitle canGoBack title={'Đánh giá dịch vụ'} />
      <Block
        width={width - 24}
        marginTop={14}
        radius={8}
        backgroundColor={COLORS.white}
        marginLeft={12}
        paddingBottom={12.5}>
        <Block
          width={width - 48}
          marginTop={12}
          marginHorizontal={12}
          alignCenter>
          <Image
            source={image.image_staff}
            width={86}
            height={86}
            radius={50}
          />
          <Text marginTop={19} fontSize={16} semiBold color={COLORS.black2}>
            Đánh giá
          </Text>
          <Block width={width - 201.51} marginTop={15} marginBottom={15.5}>
            <RankStar size={39.54} />
          </Block>
          <Block
            borderColor={COLORS.grayBreak}
            borderWidth={1}
            width={width - 48}
          />
          <TextInput
            placeholder={'Chia sẻ cảm nhận của bạn'}
            multiline
            width={width - 48}
            borderWidth={1}
            borderColor={COLORS.grayBreak}
            paddingLeft={10}
            radius={8}
            height={76}
            backgroundColor={COLORS.white}
            marginTop={11.5}
          />
        </Block>
      </Block>
      <Text
        fontSize={15}
        semiBold
        color={COLORS.black2}
        marginTop={20}
        marginLeft={12}>
        Thông tin công việc
      </Text>
      <Block
        width={width - 24}
        marginLeft={12}
        paddingBottom={30}
        radius={8}
        backgroundColor={COLORS.white}
        marginTop={15}>
        <Block width={width - 48} marginHorizontal={12} marginTop={14}>
          <Block row alignCenter>
            <Block row alignCenter>
              <Image source={icon.icon_calendar_day} width={22} height={22} />
              <Text
                fontSize={14}
                regular
                color={COLORS.placeholder}
                marginLeft={8}>
                Ngày làm việc
              </Text>
            </Block>
            <Block absolute right={0}>
              <Text fontSize={14} regular color={COLORS.black2}>
                Thứ 7, 25/01/2025
              </Text>
            </Block>
          </Block>
          <Block
            marginTop={13}
            marginLeft={28}
            width={width - 76}
            borderWidth={1}
            borderColor={COLORS.borderColor1}
            marginBottom={12}
          />
          <Block row alignCenter>
            <Block row alignCenter>
              <Image source={icon.icon_time_activity} width={22} height={22} />
              <Text
                fontSize={14}
                regular
                color={COLORS.placeholder}
                marginLeft={8}>
                Thời gian làm việc
              </Text>
            </Block>
            <Block absolute right={0}>
              <Text fontSize={14} regular color={COLORS.black2}>
                4 giờ, 17:30 đến 21:30
              </Text>
            </Block>
          </Block>
          <Block
            marginTop={13}
            marginLeft={28}
            width={width - 76}
            borderWidth={1}
            borderColor={COLORS.borderColor1}
            marginBottom={12}
          />

          <Block>
            <Block row alignCenter>
              <Image
                source={icon.icon_detail_activity}
                width={22}
                height={22}
              />
              <Text fontSize={15} medium color={COLORS.black2} marginLeft={8}>
                Chi tiết công việc
              </Text>
            </Block>
            <Text
              fontSize={14}
              regular
              color={COLORS.placeholder}
              marginLeft={30}
              marginTop={9}>
              Chăm sóc người già tại nhà
            </Text>
            <Text
              fontSize={14}
              regular
              color={COLORS.black2}
              marginLeft={30}
              marginTop={11}>
              Ghi chú: Ưu tiên nữ lớn tuổi, có nhiều kinh nghiệm
            </Text>
          </Block>
          <Block
            marginTop={13}
            marginLeft={28}
            width={width - 76}
            borderWidth={1}
            borderColor={COLORS.borderColor1}
            marginBottom={12}
          />
          <Block>
            <Block row alignCenter>
              <Image source={icon.icon_time_work} width={22} height={22} />
              <Text
                fontSize={15}
                medium
                color={COLORS.placeholder}
                marginLeft={8}>
                Thời gian
              </Text>
            </Block>
            <Block absolute right={0}>
              <Text fontSize={14} regular color={COLORS.red4}>
                Bắt đầu: 17:28
              </Text>
              <Text fontSize={14} regular color={COLORS.red4}>
                Kết thúc: 21:25
              </Text>
            </Block>
          </Block>
        </Block>
      </Block>
    </Block>
  );
}
