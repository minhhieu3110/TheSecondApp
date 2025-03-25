import {Block, HeaderTitle, Text, Image} from '@components';
import {COLORS} from '@theme';
import {image} from '@assets';
import {width} from '@responsive';
import {commonRoot} from 'navigation/navigationRef';
import router from '@router';
export default function ProductOfCategory() {
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderTitle
        root={commonRoot}
        screenName={router.ALL_CATEGORY}
        title={'Phục hồi chức năng'}
      />
      <Block
        marginTop={15}
        row
        wrap
        columnGap={10}
        rowGap={12}
        marginHorizontal={12}>
        {Array.from({length: 10}).map((_, index) => (
          <Block
            key={index}
            width={(width - 34) / 2}
            paddingBottom={11}
            radius={8}
            backgroundColor={COLORS.white}>
            <Block
              width={(width - 34) / 2}
              height={(width - 34) / 2}
              borderTopLeftRadius={5}
              borderTopRightRadius={5}
              overflow={'hidden'}>
              <Image
                source={image.image_product}
                width={'100%'}
                height={'100%'}
              />
            </Block>
            <Block marginTop={10} marginHorizontal={10}>
              <Text
                fontSize={15}
                semiBold
                color={COLORS.black2}
                lineHeight={22}
                numberOfLines={2}>
                Máy chiếu sóng Terahertz trị liệu
              </Text>
              <Text
                fontSize={15}
                semiBold
                color={COLORS.red4}
                lineHeight={17}
                marginTop={18}>
                14.000.000đ
              </Text>
            </Block>
          </Block>
        ))}
      </Block>
    </Block>
  );
}
