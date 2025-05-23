import actions from '@actions';
import {icon} from '@assets';
import {Block, HeaderTitle, Icon, Image, Pressable, Text} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {bottomRoot, commonRoot} from 'navigation/navigationRef';
import {useEffect, useState} from 'react';
import {Modal, SafeAreaView} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {URL_API} from 'redux/sagas/common';
import {Table, Row, Rows} from 'react-native-table-component';
export default function MenbershipRank() {
  const dispatch = useDispatch();
  const data = {
    tableHead: ['Tiêu chí', 'Đã đạt', 'Lên hạng'],
    tableData: ['Điểm tích luỹ'],
  };
  useEffect(() => {
    dispatch({
      type: actions.INFO_RANK,
    });
    dispatch({
      type: actions.LIST_RANK,
    });
  }, [dispatch]);
  const infoRank = useSelector(state => state.getInfoRank?.data || []);
  const listRank = useSelector(state => state.getListRank?.data || []);
  const [seeInfoBenefitRank, setSeeInfoBenefitRank] = useState(
    infoRank?.order_level,
  );
  const benefitOfRank = listRank.filter(
    item => item?.item_id === seeInfoBenefitRank,
  );

  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderTitle title={'Hạng thành viên'} canGoBack />
      <Block
        width={width - 24}
        marginTop={12}
        radius={8}
        backgroundColor={COLORS.white}
        marginLeft={12}
        paddingBottom={12}
        justifyCenter>
        <Block marginTop={15} marginLeft={11} row>
          <Block width={62.37} height={62}>
            <Image
              source={{uri: `${URL_API.uploads}/${infoRank?.picture}`}}
              width={62.37}
              height={62}
            />
          </Block>
          <Block marginLeft={12.8} marginTop={5}>
            <Text fontSize={18} semiBold color={COLORS.black5}>
              {infoRank?.title}
            </Text>
            <Text fontSize={14} semiBold color={COLORS.red4}>
              {infoRank?.point} điểm
            </Text>
            <Text fontSize={14} regular color={COLORS.placeholder}>
              Có hiệu lực đến ngày {infoRank?.valid_until}
            </Text>
          </Block>
        </Block>
        <Block
          width={width - 48}
          height={5}
          marginLeft={12}
          marginTop={15}
          backgroundColor={COLORS.gray11}
        />
        <Block
          width={width - 44.5}
          marginTop={14}
          marginLeft={10}
          overflow={'hidden'}>
          <Block row>
            <Text
              width={width - 260}
              fontSize={15}
              semiBold
              color={COLORS.black5}>
              Tiêu chí
            </Text>
            <Text
              width={width - 333}
              fontSize={15}
              semiBold
              color={COLORS.black5}
              center>
              Đã đạt
            </Text>
            <Text
              width={width - 333}
              fontSize={15}
              semiBold
              center
              color={COLORS.black5}>
              Lên hạng
            </Text>
          </Block>
          <Block
            borderWidth={1}
            borderColor={COLORS.grayBreak}
            marginTop={15}
          />
          <Block row marginTop={17}>
            <Text
              width={width - 260}
              fontSize={15}
              regular
              color={COLORS.black5}>
              Điểm tích luỹ
            </Text>
            <Text
              width={width - 333}
              fontSize={15}
              semiBold
              color={COLORS.red4}
              center>
              {infoRank?.point}
            </Text>
            <Text
              width={width - 333}
              fontSize={15}
              regular
              color={COLORS.black5}
              center>
              {infoRank?.next_rank?.point_min}
            </Text>
          </Block>
          <Block
            borderWidth={1}
            borderColor={COLORS.grayBreak}
            marginTop={15}
          />
          <Pressable
            onPress={() => commonRoot.navigate(router.HISTORY_POINT)}
            marginTop={15}
            row
            width={width - 240.6}
            alignCenter
            marginLeft={99}>
            <Text fontSize={14} regular color={COLORS.red4} center>
              Xem lịch sử điểm thưởng
            </Text>
            <Icon
              IconType={MaterialIcons}
              iconName={'keyboard-arrow-right'}
              iconColor={COLORS.red4}
              marginLeft={23}
            />
          </Pressable>
        </Block>
      </Block>
      <Block
        width={width - 24}
        marginLeft={12}
        marginTop={17}
        radius={8}
        paddingBottom={13}
        backgroundColor={COLORS.white}>
        <Text
          fontSize={15}
          semiBold
          color={COLORS.black2}
          marginTop={15}
          marginLeft={13}>
          Quyền lợi thành viên
        </Text>
        <Block
          width={width - 50.5}
          marginTop={20}
          marginLeft={12}
          paddingBottom={11}
          row
          spaceBetween>
          {listRank?.map(rank => (
            <Pressable
              onPress={() => setSeeInfoBenefitRank(rank?.item_id)}
              width={80}
              height={94}
              justifyCenter
              opacity={rank?.item_id === seeInfoBenefitRank ? 1 : 0.3}
              key={rank?.item_id}>
              <Image
                source={{uri: `${URL_API.uploads}/${rank?.picture}`}}
                width={68.66}
                height={66.71}
              />
              <Text
                marginTop={12.3}
                fontSize={15}
                regular
                color={COLORS.black5}
                lineHeight={18}
                height={17}
                center>
                {rank?.title}
              </Text>
            </Pressable>
          ))}
        </Block>
        <Block
          width={width - 48}
          height={5}
          marginLeft={13}
          marginTop={18}
          backgroundColor={COLORS.gray11}
        />

        {benefitOfRank.map(item => (
          <Block key={item.item_id}>
            <Text
              fontSize={16}
              bold
              color={COLORS.black5}
              marginLeft={12}
              marginTop={15}>
              {item?.title}
            </Text>
            <Block marginLeft={12} marginTop={13}>
              {item?.short?.map(short => (
                <Block key={short.title} row alignCenter marginBottom={10}>
                  <Image
                    source={{uri: `${URL_API.uploads}/${item?.picture}`}}
                    width={14}
                    height={14}
                  />
                  <Text
                    marginLeft={8.5}
                    fontSize={14}
                    regular
                    color={COLORS.black5}>
                    {short?.title}
                  </Text>
                </Block>
              ))}
            </Block>
          </Block>
        ))}
      </Block>
    </Block>
  );
}
