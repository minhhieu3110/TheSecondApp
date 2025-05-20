import actions from '@actions';
import {icon, image} from '@assets';
import {
  Block,
  HeaderTitle,
  Image,
  MultiImageInput,
  Pressable,
  RankStar,
  ScrollView,
  Text,
  TextInput,
} from '@components';
import {width} from '@responsive';
import {COLORS} from '@theme';
import {formatCurrency} from '@utils/helper';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import StarRating from 'react-native-star-rating-widget';
import Toast from 'react-native-toast-message';
import {commonRoot} from 'navigation/navigationRef';
import router from '@router';
import {useForm} from 'react-hook-form';
export default function EvaluateOrder({route}) {
  const {control} = useForm();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: actions.DETAIL_ORDER,
      params: {id: route?.params?.id},
    });
  }, [dispatch, route?.params?.id]);
  const detailOrder = useSelector(state => state.detailOrder?.data || []);
  const [visible, setVisible] = useState(false);
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState('');
  const [pictures, setPictures] = useState([]);
  const evaluate = (order_id, product_id) => {
    if (rating > 0) {
      const body = {
        order_id: order_id,
        product_id: product_id,
        star: rating,
        content: content,
      };
      dispatch({
        type: actions.EVALUATE_ORDER,
        body: body,
        onSuccess: res => {
          Toast.show({
            type: 'success',
            text1: res?.message,
          });
          // commonRoot.navigate(router.SHOPPING);
        },
      });
    }
  };
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderTitle canGoBack title={'Đánh giá'} />
      <ScrollView>
        {detailOrder?.details?.map(item => (
          <Block
            marginTop={15}
            marginHorizontal={12}
            key={item.product_item_id}>
            <Block paddingBottom={14} radius={8} backgroundColor={COLORS.white}>
              <Block row marginTop={12} marginLeft={12} marginRight={17}>
                <Block width={73} height={73} radius={5} overflow={'hidden'}>
                  <Image
                    source={{uri: item?.product?.picture}}
                    width={'100%'}
                    height={'100%'}
                    resizeMode="cover"
                  />
                </Block>
                <Block marginLeft={12}>
                  <Text
                    fontSize={15}
                    medium
                    color={COLORS.black2}
                    numberOfLines={1}>
                    {item?.product?.title}
                  </Text>
                  <Block rowCenter gap={20} marginTop={21}>
                    <Text fontSize={14} semiBold color={COLORS.red4}>
                      {formatCurrency(item?.price_sale)}
                    </Text>
                    <Text
                      fontSize={14}
                      regular
                      color={COLORS.placeholder}
                      lineThrough>
                      {formatCurrency(item?.price)}
                    </Text>
                  </Block>
                </Block>
              </Block>
            </Block>
            <Block
              radius={8}
              marginTop={12}
              paddingBottom={12.5}
              alignCenter
              backgroundColor={COLORS.white}>
              <Text fontSize={16} semiBold color={COLORS.black2} marginTop={21}>
                Đánh giá
              </Text>
              <StarRating
                rating={rating}
                maxStars={5}
                starSize={36.5}
                color={COLORS.yellow3}
                onChange={setRating}
                enableHalfStar={false}
              />
              <Block
                width={width - 48}
                marginTop={15.5}
                marginHorizontal={12}
                borderWidth={1}
                borderColor={COLORS.gray15}
              />
              <TextInput
                marginTop={11.5}
                paddingLeft={10}
                paddingTop={13}
                radius={5}
                borderWidth={1}
                borderColor={COLORS.gray15}
                width={width - 48}
                height={76}
                placeholder={'Chia sẻ cảm nhận của bạn'}
                regular
                fontSize={14}
                placeholderTextColor={COLORS.lightGray1}
                color={COLORS.black}
                value={content}
                onChangeText={setContent}
              />
            </Block>
            <Text marginTop={20} fontSize={15} semiBold color={COLORS.black2}>
              Hình ảnh
            </Text>
            <Pressable
              onPress={() => setVisible(!visible)}
              marginTop={13}
              width={177}
              height={177}
              backgroundColor={COLORS.pinkWhite2}
              borderDashed={5}
              radius={10}
              borderWidth={1}
              borderColor={COLORS.red4}>
              <Image
                source={icon.icon_upload_image}
                width={47}
                height={46.95}
                marginHorizontal={65}
                marginTop={65}
              />
              <Text
                fontSize={16}
                regular
                color={COLORS.black2}
                marginTop={16}
                marginLeft={37}>
                Ảnh đính kèm
              </Text>
            </Pressable>
            <Pressable
              onPress={() => evaluate(item.order_id, item.product_item_id)}
              marginTop={30}
              height={48}
              radius={8}
              backgroundColor={COLORS.red4}
              justifyCenter
              alignCenter>
              <Text fontSize={15} regular color={COLORS.white}>
                Gửi đánh giá
              </Text>
            </Pressable>
          </Block>
        ))}
      </ScrollView>
      {/* {visible && (
        <MultiImageInput control={control} name={pictures} maxImage={5} />
      )} */}
    </Block>
  );
}
