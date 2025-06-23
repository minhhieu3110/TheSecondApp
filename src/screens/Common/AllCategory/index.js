import {image} from '@assets';
import {
  Block,
  HeaderTitle,
  Image,
  Pressable,
  StatusBar,
  Text,
} from '@components';
import router from '@router';
import {COLORS} from '@theme';
import {commonRoot} from 'navigation/navigationRef';
import {useSelector} from 'react-redux';

export default function AllCategory() {
  const listCategory = useSelector(state => state.getListCategory?.data || []);
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <StatusBar />
      <HeaderTitle title={'Danh mục'} canGoBack />
      <Block marginTop={15} marginHorizontal={12} gap={12}>
        {listCategory?.map(item => (
          <Pressable
            onPress={() =>
              commonRoot.navigate(router.PRODUCT_OF_CATEGORY, {
                group_id: item.group_id,
                title: item.title,
              })
            }
            key={item.group_id}
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
                source={{uri: item?.picture}}
                width={50}
                height={50}
                resizeMode="cover"
              />
            </Block>
            <Block marginLeft={18}>
              <Text fontSize={15} medium color={COLORS.black2}>
                {item.title}
              </Text>
              <Text fontSize={14} regular color={COLORS.red4} marginTop={12}>
                {item?.products_count} sản phẩm
              </Text>
            </Block>
          </Pressable>
        ))}
      </Block>
    </Block>
  );
}
