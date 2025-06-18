import actions from '@actions';
import {image, icon} from '@assets';
import {
  Block,
  Button,
  HeaderTitle,
  Image,
  RankStar,
  StatusBar,
  Text,
  TextInput,
} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {ConvertTime} from '@utils';
import {useEffect, useState} from 'react';
import StarRating from 'react-native-star-rating-widget';
import Toast from 'react-native-toast-message';
import {useDispatch, useSelector} from 'react-redux';
import {URL_API} from 'redux/sagas/common';

export default function EvaluateService({route}) {
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: actions.GET_DETAIL_ORDER,
      params: {orderId: route?.params?.orderId},
    });
  }, [dispatch]);
  const detailOrder = useSelector(state => state.getDetailOrder?.data || []);
  const sendEvaluateEmployee = () => {
    dispatch({
      type: actions.RATING_SERVICE,
      body: {id: detailOrder?.employee?.id, star: rating, content: content},
      onSuccess: () => {
        Toast.show({
          type: 'success',
          text1: 'Đánh giá thành công',
        });
      },
      onFail: e => {
        Toast.show({
          type: 'error',
          text1: e,
          text2: 'Vui lòng thử lại sau',
        });
      },
    });
  };

  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <StatusBar />
      <HeaderTitle canGoBack title={'Đánh giá dịch vụ'} />
      <Block
        width={width - 24}
        marginTop={14}
        radius={8}
        backgroundColor={COLORS.white}
        marginLeft={12}
        paddingBottom={12.5}>
        <Block
          // width={width - 48}

          marginTop={12}
          marginHorizontal={12}
          alignCenter>
          <Image
            source={{
              uri: `${URL_API.uploads}/${detailOrder?.employee?.picture}`,
            }}
            width={86}
            height={86}
            radius={50}
            resizeMode="cover"
          />
          <Text marginTop={19} fontSize={16} semiBold color={COLORS.black2}>
            Đánh giá
          </Text>
          <Block width={width - 201.51} marginTop={15} marginBottom={15.5}>
            <StarRating
              rating={rating}
              maxStars={5}
              starSize={36.5}
              color={COLORS.yellow3}
              onChange={setRating}
              enableHalfStar={false}
            />
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
            value={content}
            onChangeText={setContent}
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
        paddingBottom={15}
        radius={8}
        backgroundColor={COLORS.white}
        marginTop={15}>
        <Block marginHorizontal={12} marginTop={14} gap={12}>
          <Block row>
            <Image source={icon.icon_calendar_day} width={22} height={22} />
            <Block gap={13} marginLeft={8} width={'91%'}>
              <Block rowCenter spaceBetween>
                <Text fontSize={14} regular color={COLORS.placeholder}>
                  Ngày làm việc
                </Text>
                <Text fontSize={14} regular color={COLORS.black2}>
                  {detailOrder?.order?.start_date}
                </Text>
              </Block>
              <Block borderWidth={1} borderColor={COLORS.borderColor1} />
            </Block>
          </Block>
          <Block row>
            <Image source={icon.icon_time_activity} width={22} height={22} />
            <Block gap={13} marginLeft={8} width={'91%'}>
              <Block rowCenter spaceBetween>
                <Text fontSize={14} regular color={COLORS.placeholder}>
                  Thời gian làm việc
                </Text>
                <Text fontSize={14} regular color={COLORS.black2}>
                  {detailOrder?.order?.hour +
                    ' giờ ' +
                    detailOrder?.order?.start_time +
                    ' đến ' +
                    detailOrder?.order?.end_time}
                </Text>
              </Block>
              <Block borderWidth={1} borderColor={COLORS.borderColor1} />
            </Block>
          </Block>
          {detailOrder?.order?.repeat_weekly !== null && (
            <Block row>
              <Image source={icon.icon_calendar_days} width={22} height={22} />
              <Block gap={13} marginLeft={8} width={'91%'}>
                <Block rowCenter spaceBetween>
                  <Text fontSize={14} regular color={COLORS.placeholder}>
                    Lặp lại hàng tuần
                  </Text>
                  <Text fontSize={14} regular color={COLORS.black2}>
                    {detailOrder?.order?.repeat_weekly?.join('-')}
                  </Text>
                </Block>
                <Block borderWidth={1} borderColor={COLORS.borderColor1} />
              </Block>
            </Block>
          )}
          {detailOrder?.actual_start_time !== null && (
            <Block row>
              <Image source={icon.icon_time_work} width={22} height={22} />
              <Block gap={13} marginLeft={8} width={'91%'}>
                <Block rowCenter spaceBetween>
                  <Text fontSize={14} regular color={COLORS.placeholder}>
                    Thời gian
                  </Text>
                  <Block>
                    <Text fontSize={14} regular color={COLORS.red4}>
                      {'Bắt đầu ' + ConvertTime(detailOrder?.actual_start_time)}
                    </Text>
                    <Text fontSize={14} regular color={COLORS.red4}>
                      {'Kết thúc ' + ConvertTime(detailOrder?.actual_end_time)}
                    </Text>
                  </Block>
                </Block>
                <Block borderWidth={1} borderColor={COLORS.borderColor1} />
              </Block>
            </Block>
          )}
          <Block row>
            <Image source={icon.icon_detail_activity} width={22} height={22} />
            <Block gap={13} marginLeft={8} width={'91%'}>
              <Block>
                <Text fontSize={14} regular color={COLORS.placeholder}>
                  Chi tiết công việc
                </Text>
                <Text fontSize={14} regular color={COLORS.black2} marg>
                  {detailOrder?.order?.service?.title}
                </Text>
                {detailOrder?.order?.extra_services !== null && (
                  <Block row spaceBetween>
                    <Text fontSize={14} regular color={COLORS.placeholder}>
                      Dịch vụ thêm
                    </Text>
                    <Block row>
                      {detailOrder?.order?.extra_services?.map(
                        (extra, index) => (
                          <Text
                            fontSize={14}
                            regular
                            color={COLORS.black2}
                            key={index}>
                            {extra?.text + ', '}
                          </Text>
                        ),
                      )}
                    </Block>
                  </Block>
                )}
                {detailOrder?.order?.note?.length !== 0 && (
                  <Text fontSize={14} regular color={COLORS.placeholder}>
                    {`Ghi chú: ${detailOrder?.order?.note}`}
                  </Text>
                )}
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
      <Button title="Gửi đánh giá" onPress={sendEvaluateEmployee} />
    </Block>
  );
}
