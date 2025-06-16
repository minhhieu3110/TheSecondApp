import actions from '@actions';
import {Block, HeaderTitle, Image, ScrollView, Text} from '@components';
import {width} from '@responsive';
import {COLORS} from '@theme';
import {ConvertDateTimeStamp} from '@utils';
import {useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {URL_API} from 'redux/sagas/common';

export default function HistoryFeedback() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: actions.GET_FEEDBACK,
    });
  }, [dispatch]);
  const feedback = useSelector(state => state.getFeedback?.data || []);
  const {isLoading} = useSelector(state => state.getFeedback);
  const onRefresh = () => {
    dispatch({
      type: actions.GET_FEEDBACK,
    });
  };
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderTitle canGoBack title={'Lịch sử phản hồi'} />
      <ScrollView
        onRefresh={onRefresh}
        contentContainerStyle={{paddingBottom: 181}}>
        <Block width={width - 24} marginLeft={12} marginTop={14} gap={10}>
          {isLoading ? (
            <ActivityIndicator color={COLORS.red4} />
          ) : (
            feedback?.map(item => (
              <Block
                key={item.id}
                width={width - 24}
                backgroundColor={COLORS.white}
                radius={8}
                paddingBottom={12}>
                <Block width={width - 48} marginLeft={12} marginTop={17}>
                  <Text fontSize={15} semiBold color={COLORS.red4}>
                    {item?.service?.title}
                  </Text>
                  <Text
                    fontSize={14}
                    regular
                    color={COLORS.placeholder}
                    marginTop={17}>
                    {ConvertDateTimeStamp(item?.created_at)}
                  </Text>
                  {item?.content.length !== 0 && (
                    <Text
                      fontSize={14}
                      regular
                      color={COLORS.black1}
                      marginTop={13}>
                      {item?.content}
                    </Text>
                  )}
                  <Block marginTop={17} row gap={10}>
                    <Image
                      source={{
                        uri: `${URL_API.uploads}/${item?.file_attach}`,
                      }}
                      width={width - 275}
                      height={96}
                      resizeMode="cover"
                      radius={8}
                    />
                  </Block>
                </Block>
              </Block>
            ))
          )}
        </Block>
      </ScrollView>
    </Block>
  );
}
