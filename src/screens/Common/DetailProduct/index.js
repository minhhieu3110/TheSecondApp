import {icon, image} from '@assets';
import {Block, Image, Pressable, Icon, Text, RankStar} from '@components';
import {width} from '@responsive';
import {COLORS} from '@theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {commonRoot} from 'navigation/navigationRef';
import router from '@router';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useState} from 'react';
import {formatCurrency} from '@utils';
import {ScrollView} from 'react-native';
export default function DetailProduct() {
  const [menuVertical, setMenuVertical] = useState(false);
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <ScrollView contentContainerStyle={{paddingBottom: 203}}>
        <Block backgroundColor={COLORS.white} paddingBottom={22}>
          <Block width={width} height={width}>
            <Image
              source={image.image_san}
              width={'100%'}
              height={'100%'}
              resizeMode="cover"
            />
            <Block absolute top={16} left={12} right={12} row>
              <Pressable
                onPress={() => commonRoot.navigate(router.SHOPPING)}
                width={35}
                height={35}
                radius={18}
                backgroundColor={COLORS.black50}
                alignCenter
                justifyCenter>
                <Icon
                  IconType={MaterialIcons}
                  iconName={'keyboard-arrow-left'}
                  iconSize={35}
                  iconColor={COLORS.white}
                />
              </Pressable>
              <Block absolute right={0} alignEnd>
                <Block row rowGap={10}>
                  <Block>
                    <Image
                      source={icon.icon_message_1}
                      width={35}
                      height={35}
                    />
                  </Block>
                  <Pressable
                    onPress={() => commonRoot.navigate(router.CART)}
                    width={44}
                    marginLeft={10}
                    row>
                    <Image source={icon.icon_cart} width={35} height={35} />
                    <Block
                      absolute
                      top={3}
                      right={0}
                      backgroundColor={COLORS.red4}
                      radius={8}
                      paddingBottom={2}
                      width={26}
                      height={15}
                      justifyCenter
                      alignCenter>
                      <Text fontSize={10} regular color={COLORS.white}>
                        99+
                      </Text>
                    </Block>
                  </Pressable>
                  <Pressable
                    onPress={() => setMenuVertical(!menuVertical)}
                    width={35}
                    height={35}
                    radius={18}
                    backgroundColor={
                      menuVertical === true ? COLORS.black70 : COLORS.black50
                    }
                    marginLeft={9}
                    alignCenter
                    justifyCenter>
                    <Icon
                      IconType={Entypo}
                      iconName={'dots-three-vertical'}
                      iconSize={20}
                      iconColor={COLORS.white}
                    />
                  </Pressable>
                </Block>
                {menuVertical === true && (
                  <Block
                    paddingBottom={13}
                    marginTop={10}
                    backgroundColor={COLORS.black70}
                    radius={10}>
                    <Block marginTop={13.9}>
                      <Block row marginLeft={10} alignCenter>
                        <Icon
                          IconType={Ionicons}
                          iconName={'home'}
                          iconSize={15}
                          iconColor={COLORS.white}
                        />
                        <Text
                          marginLeft={9.9}
                          fontSize={14}
                          regular
                          color={COLORS.white}
                          marginTop={1.1}>
                          Trở về trang chủ
                        </Text>
                      </Block>
                      <Block
                        width={width - 218}
                        borderWidth={0.5}
                        borderColor={COLORS.white50}
                        marginTop={11}
                        marginBottom={12}
                      />
                      <Block row marginLeft={10} alignCenter>
                        <Icon
                          IconType={Ionicons}
                          iconName={'share-social-sharp'}
                          iconSize={15}
                          iconColor={COLORS.white}
                        />
                        <Text
                          marginLeft={9.9}
                          fontSize={14}
                          regular
                          color={COLORS.white}
                          marginTop={1.1}>
                          Chia sẻ
                        </Text>
                      </Block>
                      <Block
                        width={width - 218}
                        borderWidth={0.5}
                        borderColor={COLORS.white50}
                        marginTop={11}
                        marginBottom={12}
                      />
                      <Block row marginLeft={10} alignCenter>
                        <Icon
                          IconType={MaterialIcons}
                          iconName={'report-problem'}
                          iconSize={15}
                          iconColor={COLORS.white}
                        />
                        <Text
                          marginLeft={9.9}
                          fontSize={14}
                          regular
                          color={COLORS.white}
                          marginTop={1.1}>
                          Báo cáo sản phẩm này
                        </Text>
                      </Block>
                      <Block
                        width={width - 218}
                        borderWidth={0.5}
                        borderColor={COLORS.white50}
                        marginTop={11}
                        marginBottom={12}
                      />
                      <Block row marginLeft={10} alignCenter>
                        <Icon
                          IconType={AntDesign}
                          iconName={'questioncircle'}
                          iconSize={15}
                          iconColor={COLORS.white}
                        />
                        <Text
                          marginLeft={9.9}
                          fontSize={14}
                          regular
                          color={COLORS.white}
                          marginTop={1.1}>
                          Bạn cần giúp đỡ?
                        </Text>
                      </Block>
                    </Block>
                  </Block>
                )}
              </Block>
            </Block>
            <Block
              paddingVertical={4}
              absolute
              right={12}
              bottom={8}
              radius={15}
              width={37}
              height={23}
              justifyCenter
              alignCenter
              backgroundColor={COLORS.black70}>
              <Text fontSize={12} regular color={COLORS.white}>
                1/9
              </Text>
            </Block>
          </Block>
          <Block marginTop={10} marginHorizontal={12}>
            <Block row gap={10}>
              {Array.from({length: 5}).map((_, index) => (
                <Block
                  key={index}
                  width={(width - 64) / 5}
                  height={73}
                  radius={5}
                  overflow={'hidden'}>
                  <Image
                    source={image.image_san}
                    width={'100%'}
                    height={'100%'}
                    resizeMode="cover"
                  />
                </Block>
              ))}
            </Block>
            <Text
              fontSize={18}
              bold
              color={COLORS.black2}
              marginTop={24}
              numberOfLines={1}>
              Xe đạp tập thể dục OKACHI JP-599A
            </Text>
            <Block marginTop={14} row>
              <Block marginTop={3}>
                <Text fontSize={16} semiBold color={COLORS.red4}>
                  {formatCurrency(40200000)}
                </Text>
                <Text
                  marginTop={8}
                  fontSize={14}
                  regular
                  color={COLORS.placeholder}
                  lineThrough>
                  {formatCurrency(40990000)}
                </Text>
              </Block>
              <Block
                marginLeft={33}
                borderTopLeftRadius={5}
                borderBottomRightRadius={5}
                backgroundColor={COLORS.red4}
                alignCenter
                justifyCenter
                width={35}
                height={28}>
                <Text fontSize={12} regular color={COLORS.white}>
                  -2%
                </Text>
              </Block>
            </Block>
            <Block
              height={5}
              backgroundColor={COLORS.grayBreak}
              marginTop={11}
              width={width}
              marginHorizontal={-12}
            />
            <Block marginTop={15}>
              <Text fontSize={15} semiBold color={COLORS.black2}>
                Mô tả sản phẩm
              </Text>
              <Text
                fontSize={14}
                regular
                color={COLORS.black2}
                marginTop={15}
                lineHeight={22}>
                Xe đạp tập thể dục OKACHI JP-599A là thiết bị chăm sóc sức khỏe
                tiên tiến, thiết kế đặc biệt để cải thiện tuần hoàn máu, giảm
                đau và mang lại cảm giác thư giãn tuyệt vời cho người sử dụng.
                Sản phẩm này không chỉ hỗ trợ massage cho chân mà còn tác động
                lên tới toàn thân. (Các phiên bản cũ sẽ chỉ dừng lại tác động ở
                phần bụng, vì thế sẽ cần phải hỗ trợ thêm bằng đai quấn bụng)
                {'\n'}Thông số kỹ thuật của Máy xung chân bằng sóng Terahertz
                P110:{'\n'}- Điện áp: 220/110V
                {'\n'}- Công suất: 60W{'\n'}- Tần số: 50/60Hz
              </Text>
              <Block marginTop={23} alignCenter>
                <Block row alignCenter>
                  <Text fontSize={12} regular color={COLORS.red4}>
                    Xem thêm
                  </Text>
                  <Icon
                    marginLeft={5}
                    iconSize={10}
                    IconType={AntDesign}
                    iconColor={COLORS.red4}
                    iconName={'arrowright'}
                  />
                </Block>
              </Block>
            </Block>
            <Block
              height={5}
              backgroundColor={COLORS.grayBreak}
              marginTop={14}
              width={width}
              marginHorizontal={-12}
            />
            <Block marginTop={20}>
              <Block rowCenter spaceBetween>
                <Text fontSize={15} semiBold color={COLORS.black2}>
                  Đánh giá sản phẩm
                </Text>
                <Text
                  onPress={() => commonRoot.navigate(router.EVALUATE_PRODUCT)}
                  fontSize={13}
                  regular
                  color={COLORS.red4}>
                  Xem tất cả
                </Text>
              </Block>
              <Block marginTop={14} rowCenter>
                <Block width={width - 343}>
                  <RankStar size={12} value={4} />
                </Block>
                <Text fontSize={12} regular color={COLORS.black2}>
                  4/5
                </Text>
                <Text
                  marginLeft={12}
                  fontSize={12}
                  regular
                  color={COLORS.placeholder}>
                  (1,4k đánh giá)
                </Text>
              </Block>
              <Block marginTop={12} paddingVertical={12} gap={12}>
                <Block>
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
                        marginTop={19}>
                        15:15 11/11/2023
                      </Text>
                    </Block>
                  </Block>
                  <Block
                    height={1}
                    backgroundColor={COLORS.gray15}
                    marginTop={12}
                  />
                </Block>
              </Block>
              <Block marginTop={16} alignCenter>
                <Block row alignCenter>
                  <Text fontSize={12} regular color={COLORS.red4}>
                    Xem thêm
                  </Text>
                  <Icon
                    marginLeft={5}
                    iconSize={10}
                    IconType={AntDesign}
                    iconColor={COLORS.red4}
                    iconName={'arrowright'}
                  />
                </Block>
              </Block>
            </Block>
          </Block>
        </Block>
        <Block marginTop={13} marginHorizontal={12}>
          <Text fontSize={15} semiBold color={COLORS.black2}>
            Sản phẩm liên quan
          </Text>
          <Block marginTop={15} row wrap columnGap={10} rowGap={12}>
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
                    source={image.image_san}
                    width={'100%'}
                    height={'100%'}
                    resizeMode="cover"
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
          <Text
            marginTop={16}
            fontSize={14}
            light
            color={COLORS.placeholder}
            center>
            Loading ...
          </Text>
        </Block>
      </ScrollView>
      <Block
        absolute
        bottom={0}
        backgroundColor={COLORS.white}
        width={width}
        padding={12}
        shadow3>
        <Block row gap={10}>
          <Block
            width={(width - 34) / 2}
            height={48}
            radius={8}
            backgroundColor={COLORS.darkRed1}
            justifyCenter
            alignCenter>
            <Text fontSize={15} regular color={COLORS.white}>
              Thêm vào giỏ hàng
            </Text>
          </Block>
          <Block
            width={(width - 34) / 2}
            height={48}
            radius={8}
            backgroundColor={COLORS.red4}
            justifyCenter
            alignCenter>
            <Text fontSize={15} regular color={COLORS.white}>
              Mua ngay
            </Text>
          </Block>
        </Block>
      </Block>
    </Block>
  );
}
