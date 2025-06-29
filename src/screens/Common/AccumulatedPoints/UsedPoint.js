import {Block, Image, Text, ScrollView} from '@components';
import {COLORS} from '@theme';
import {width} from '@responsive';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import actions from '@actions';
import {ConvertTimeStamp} from '@utils';
import {URL_API} from 'redux/sagas/common';
import {ActivityIndicator} from 'react-native';
export default function ReceivePoint() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: actions.POINT_LOG,
      params: {value_type: -1},
    });
  }, [dispatch]);
  const useLog = useSelector(state => state.pointLog?.data || []);
  const {isLoading} = useSelector(state => state.pointLog);
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <Block width={width - 24} marginLeft={12} marginTop={15.3}>
        {isLoading ? (
          <ActivityIndicator color={COLORS.red4} />
        ) : (
          <ScrollView contentContainerStyle={{paddingBottom: 181}}>
            {useLog?.map(log => (
              <Block
                key={log?.created_at}
                paddingTop={12}
                paddingBottom={15}
                radius={8}
                backgroundColor={COLORS.white}
                marginBottom={12}
                row>
                <Image
                  source={{
                    uri: `${URL_API.uploads}/${log?.exchange_type?.picture}`,
                  }}
                  width={40}
                  height={40}
                  resizeMode="cover"
                  marginLeft={12}
                />
                <Block marginLeft={12} marginTop={9}>
                  <Text fontSize={15} semiBold color={COLORS.textColor}>
                    {log?.exchange_type?.title}
                  </Text>
                  <Text
                    fontSize={14}
                    regular
                    color={COLORS.red4}
                    marginTop={16}>
                    -{log?.value} điểm
                  </Text>
                </Block>
                <Block absolute top={23} right={11}>
                  <Text fontSize={12} regular color={COLORS.black2}>
                    {ConvertTimeStamp(log?.created_at)}
                  </Text>
                </Block>
              </Block>
            ))}
          </ScrollView>
        )}
      </Block>
    </Block>
  );
}
