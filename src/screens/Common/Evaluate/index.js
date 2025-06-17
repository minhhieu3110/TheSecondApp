import actions from '@actions';
import {image} from '@assets';
import {
  Block,
  HeaderTitle,
  Image,
  ProgressBar,
  RankStar,
  Text,
  ScrollView,
  StatusBar,
} from '@components';
import {width} from '@responsive';
import {COLORS} from '@theme';
import {ConvertDateTimeStamp} from '@utils';
import {formatCurrency} from '@utils/helper';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {URL_API} from 'redux/sagas/common';
export default function Evaluate({route}) {
  const evaluate = [
    {id: 1, star: 5, total: 148, used: 50},
    {id: 2, star: 4, total: 148, used: 75},
    {id: 3, star: 3, total: 148, used: 14},
    {id: 4, star: 2, total: 148, used: 9},
    {id: 5, star: 1, total: 148, used: 0},
  ];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: actions.DETAIL_PRODUCT,
      params: {item_id: route?.params?.item_id},
    });
    dispatch({
      type: actions.RATING,
      params: {item_id: route?.params?.item_id},
    });
  }, [route?.params?.item_id, dispatch]);
  const detailProduct = useSelector(state => state.detailProduct?.data || []);
  const listRating = useSelector(state => state.listRating?.data || []);
  const starStats = useSelector(state => state.listRating?.star_stats || []);
  const average = useSelector(state => state?.listRating?.average || 0);
  const total = useSelector(state => state?.listRating?.total || 0);
  const onRefesh = () => {
    dispatch({
      type: actions.RATING,
      params: {item_id: route?.params?.item_id},
    });
  };
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <StatusBar />
      <HeaderTitle canGoBack title={'Đánh giá sản phẩm'} />
      <ScrollView onRefresh={onRefesh}>
        <Block marginTop={15} marginHorizontal={12}>
          <Block paddingBottom={14} radius={8} backgroundColor={COLORS.white}>
            <Block row marginTop={12} marginLeft={12} marginRight={17}>
              <Block width={73} height={73} radius={5} overflow={'hidden'}>
                <Image
                  source={{uri: detailProduct?.picture}}
                  width={73}
                  height={73}
                  resizeMode="cover"
                />
              </Block>
              <Block marginLeft={12}>
                <Text
                  fontSize={15}
                  medium
                  color={COLORS.black2}
                  numberOfLines={1}>
                  {detailProduct?.title}
                </Text>
                <Block rowCenter gap={20} marginTop={21}>
                  <Text fontSize={14} semiBold color={COLORS.red4}>
                    {formatCurrency(detailProduct?.price_sale)}
                  </Text>
                  <Text
                    fontSize={14}
                    regular
                    color={COLORS.placeholder}
                    lineThrough>
                    {formatCurrency(detailProduct?.price)}
                  </Text>
                </Block>
              </Block>
            </Block>
          </Block>
          <Block
            marginTop={12}
            radius={8}
            paddingBottom={24}
            backgroundColor={COLORS.white}>
            <Block marginTop={14} marginHorizontal={12} row>
              <Block>
                <Text fontSize={52} regular color={COLORS.black2} center>
                  {average}
                </Text>
                <Block width={71.36} marginTop={8.2}>
                  <RankStar value={average} size={12} />
                </Block>
              </Block>
              <Block marginLeft={25.2} gap={10.9}>
                {starStats?.map(item => (
                  <Block key={item.star} rowCenter>
                    <RankStar width={55.64} size={9.55} value={item.star} />
                    <ProgressBar
                      marginLeft={8.4}
                      radius={0}
                      width={width - 228.89}
                      height={8.06}
                      used={item.total}
                      total={total}
                    />
                    <Text
                      marginLeft={7.7}
                      center
                      fontSize={10}
                      medium
                      color={COLORS.black2}>
                      {item.total}
                    </Text>
                  </Block>
                ))}
              </Block>
            </Block>
            <Block
              marginTop={26.4}
              borderTopWidth={1}
              borderColor={COLORS.gray15}
              paddingBottom={24}>
              {listRating?.map(item => (
                <Block
                  key={item.created_at}
                  marginTop={12}
                  marginHorizontal={12}>
                  <Block row paddingBottom={5}>
                    <Block
                      width={25}
                      height={25}
                      radius={50}
                      overflow={'hidden'}>
                      <Image
                        source={{
                          uri: `${URL_API.uploads}/${item?.user?.picture}`,
                        }}
                        width={25}
                        height={25}
                        resizeMode="cover"
                      />
                    </Block>
                    <Block marginLeft={8} marginTop={5}>
                      <Text fontSize={14} medium color={COLORS.black2}>
                        {item?.user?.full_name}
                      </Text>
                      <Block width={width - 343} marginTop={11}>
                        <RankStar size={12} value={item?.star} />
                      </Block>
                      {item?.content === '' ? (
                        ''
                      ) : (
                        <Text
                          fontSize={14}
                          regular
                          color={COLORS.black2}
                          marginTop={8}
                          numberOfLines={2}>
                          {item?.content}
                        </Text>
                      )}
                      <Text
                        fontSize={14}
                        regular
                        color={COLORS.lightGray1}
                        marginTop={10}>
                        {ConvertDateTimeStamp(item?.created_at)}
                      </Text>
                    </Block>
                  </Block>
                  <Block
                    height={1}
                    backgroundColor={COLORS.gray15}
                    width={width - 24}
                    marginHorizontal={-12}
                    marginTop={12}
                  />
                </Block>
              ))}
            </Block>
          </Block>
        </Block>
      </ScrollView>
    </Block>
  );
}
