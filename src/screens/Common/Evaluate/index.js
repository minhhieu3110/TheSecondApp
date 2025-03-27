import {image} from '@assets';
import {
  Block,
  HeaderTitle,
  Image,
  ProgressBar,
  RankStar,
  Text,
} from '@components';
import {width} from '@responsive';
import {COLORS} from '@theme';
import {formatCurrency} from '@utils';
import {ScrollView} from 'react-native';
export default function Evaluate() {
  const evaluate = [
    {id: 1, star: 5, total: 148, used: 50},
    {id: 2, star: 4, total: 148, used: 75},
    {id: 3, star: 3, total: 148, used: 14},
    {id: 4, star: 2, total: 148, used: 9},
    {id: 5, star: 1, total: 148, used: 0},
  ];
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderTitle canGoBack title={'Đánh giá sản phẩm'} />
      <ScrollView>
        <Block marginTop={15} marginHorizontal={12}>
          <Block paddingBottom={14} radius={8} backgroundColor={COLORS.white}>
            <Block row marginTop={12} marginLeft={12} marginRight={17}>
              <Block width={73} height={73} radius={5} overflow={'hidden'}>
                <Image
                  source={image.image_san}
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
                  Xe đạp tập thể dục OKACHI JP-599A
                </Text>
                <Block rowCenter gap={20} marginTop={21}>
                  <Text fontSize={14} semiBold color={COLORS.red4}>
                    {formatCurrency(40290000)}
                  </Text>
                  <Text
                    fontSize={14}
                    regular
                    color={COLORS.placeholder}
                    lineThrough>
                    {formatCurrency(40990000)}
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
                <Text fontSize={52} regular color={COLORS.black2}>
                  4.2
                </Text>
                <Block width={71.36} marginTop={8.2}>
                  <RankStar value={4} size={12} />
                </Block>
              </Block>
              <Block marginLeft={25.2} gap={10.9}>
                {evaluate.map(item => (
                  <Block key={item.id} rowCenter>
                    <RankStar width={55.64} size={9.55} value={item.star} />
                    <ProgressBar
                      marginLeft={8.4}
                      radius={0}
                      width={width - 228.89}
                      height={8.06}
                      used={item.used}
                      total={item.total}
                    />
                    <Text
                      marginLeft={7.7}
                      center
                      fontSize={10}
                      medium
                      color={COLORS.black2}>
                      {item.used}
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
              {Array.from({length: 7}).map((_, index) => (
                <Block key={index} marginTop={12} marginHorizontal={12}>
                  <Block row paddingBottom={5}>
                    <Block
                      width={25}
                      height={25}
                      radius={50}
                      overflow={'hidden'}>
                      <Image
                        source={image.image_staff}
                        width={25}
                        height={25}
                        resizeMode="cover"
                      />
                    </Block>
                    <Block marginLeft={8} marginTop={5}>
                      <Text fontSize={14} medium color={COLORS.black2}>
                        Lê Thu Huyền
                      </Text>
                      <Block width={width - 343} marginTop={11}>
                        <RankStar size={12} value={4} />
                      </Block>
                      <Text
                        fontSize={14}
                        regular
                        color={COLORS.black2}
                        marginTop={8}
                        numberOfLines={2}>
                        Hàng nhận đẹp đúng như mô tả, shop tư vấn nhiệt tình.
                        Chính hãng 100%, nguyên seal, giao nhanh
                      </Text>
                      <Text
                        fontSize={14}
                        regular
                        color={COLORS.lightGray1}
                        marginTop={37}>
                        15:15 11/11/2023
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
