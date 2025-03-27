import {image} from '@assets';
import {Block, HeaderTitle, Image, Pressable, Text} from '@components';
import router from '@router';
import {COLORS} from '@theme';
import {commonRoot} from 'navigation/navigationRef';

export default function AllCategory() {
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderTitle
        title={'Danh mục'}
        root={commonRoot}
        screenName={router.SHOPPING}
      />
      <Block marginTop={15} marginHorizontal={12} gap={12}>
        {Array.from({length: 5}).map((_, index) => (
          <Pressable
            onPress={() => commonRoot.navigate(router.PRODUCT_OF_CATEGORY)}
            key={index}
            row
            alignCenter
            paddingVertical={12}
            paddingLeft={12}
            backgroundColor={COLORS.white}
            radius={8}>
            <Block
              width={50}
              height={50}
              justifyCenter
              alignCenter
              radius={8}
              overflow={'hidden'}>
              <Image
                source={image.image_san}
                width={'100%'}
                height={'100%'}
                resizeMode="cover"
                // radius={8}
              />
            </Block>
            <Block marginLeft={18}>
              <Text fontSize={15} medium color={COLORS.black2}>
                Phục hồi chức năng
              </Text>
              <Text fontSize={14} regular color={COLORS.red4} marginTop={12}>
                123 sản phẩm
              </Text>
            </Block>
          </Pressable>
        ))}
      </Block>
    </Block>
  );
}
