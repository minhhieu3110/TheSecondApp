import actions from '@actions';
import {icon, image} from '@assets';
import {
  Block,
  Button,
  HeaderModal,
  HeaderTitle,
  Image,
  ImagePicker,
  Pressable,
  ScrollView,
  SelectDropdown,
  Text,
  TextInput,
} from '@components';
import {width} from '@responsive';
import {COLORS} from '@theme';
import {ConvertDateTimeStamp, formatPhone} from '@utils';
import {use, useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {Modal, SafeAreaView} from 'react-native';
import Toast from 'react-native-toast-message';
import {useDispatch, useSelector} from 'react-redux';
import {URL_API} from 'redux/sagas/common';
export default function Feedback() {
  const {control} = useForm();
  const [feedbackSent, setFeedbackSent] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: actions.GET_LIST_SERVICE,
    });
    dispatch({
      type: actions.GET_USER_INFO,
    });
    dispatch({
      type: actions.GET_FEEDBACK,
    });
  }, [dispatch]);
  const service = useSelector(state => state.getServices?.data || []);
  const userInfo = useSelector(state => state.getUserInfo?.data || []);
  const [visible, setVisible] = useState(false);
  const [image, setImage] = useState();
  const [serviceId, setServiceId] = useState();
  const [content, setContent] = useState('');
  const sendFeedback = () => {
    const file_attach = new FormData();
    file_attach.append('file_attach', {
      uri: image?.path,
      name: image?.filename,
      type: image?.mime,
    });
    const body = {
      service_id: serviceId,
      full_name: userInfo?.full_name,
      phone: userInfo?.phone,
      content: content,
      file_attach: file_attach,
    };
    dispatch({
      type: actions.FEEDBACK,
      body: body,
      onSuccess: () => {
        setFeedbackSent(!feedbackSent);
      },
      onFail: e => {
        Toast.show({
          type: 'error',
          text1: e,
        });
      },
    });
  };
  const feedback = useSelector(state => state.getFeedback?.data || []);

  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderTitle title={'Phản hồi'} canGoBack />
      <ScrollView contentContainerStyle={{paddingBottom: 171}}>
        <Block width={width - 24} marginLeft={12} marginTop={20}>
          <Block gap={15}>
            <Block rowCenter spaceBetween>
              <Text fontSize={15} semiBold color={COLORS.black3}>
                Chọn dịch vụ
              </Text>
              <Text
                onPress={() => setFeedbackSent(!feedbackSent)}
                fontSize={15}
                regular
                color={COLORS.red4}>
                Lịch sử
              </Text>
            </Block>
            <SelectDropdown
              data={service}
              placeholder={'Chọn dịch vụ'}
              onSelect={selectService => setServiceId(selectService.item_id)}
            />
          </Block>
          <Text fontSize={15} semiBold color={COLORS.black3} marginTop={20}>
            Thông tin cá nhân
          </Text>
          <TextInput
            height={41}
            radius={5}
            backgroundColor={COLORS.white}
            borderWidth={0.5}
            marginTop={15}
            borderColor={COLORS.gray11}
            paddingLeft={12}
            fontSize={14}
            regular
            color={COLORS.black1}
            value={userInfo?.full_name}
          />
          <TextInput
            height={41}
            radius={5}
            backgroundColor={COLORS.white}
            borderWidth={0.5}
            marginTop={12}
            borderColor={COLORS.gray11}
            paddingLeft={12}
            fontSize={14}
            regular
            color={COLORS.black1}
            value={formatPhone(userInfo?.phone)}
          />
          <Block marginTop={20}>
            <Text fontSize={15} semiBold color={COLORS.black3}>
              Nội dung
            </Text>
            <TextInput
              placeholder={'Nhập nội dung'}
              paddingLeft={12}
              placeholderTextColor={COLORS.placeholder}
              radius={8}
              height={110.67}
              backgroundColor={COLORS.white}
              marginTop={15}
              value={content}
              onChangeText={setContent}
            />
          </Block>
          <Text fontSize={15} semiBold color={COLORS.black1} marginTop={20.3}>
            Hình ảnh
          </Text>
          <Pressable
            onPress={() => setVisible(!visible)}
            width={177}
            height={177}
            backgroundColor={COLORS.pinkWhite}
            radius={8}
            borderDashed
            borderWidth={1}
            borderColor={COLORS.red4}
            marginTop={15}
            overflow={'hidden'}>
            {image ? (
              <Image source={{uri: image?.path}} width={177} height={177} />
            ) : (
              <Block marginTop={65} justifyCenter alignCenter>
                <Image
                  source={icon.icon_upload_image}
                  width={47}
                  height={46.95}
                />
                <Text
                  fontSize={16}
                  regular
                  color={COLORS.black1}
                  marginTop={16}>
                  Ảnh đính kèm
                </Text>
              </Block>
            )}
          </Pressable>
        </Block>
      </ScrollView>
      <Button title="Gửi" onPress={sendFeedback} />
      <Modal visible={feedbackSent} transparent="fade">
        <SafeAreaView style={{flex: 1}}>
          <Block flex backgroundColor={COLORS.gray10}>
            <HeaderModal
              title={'Phản hồi đã gửi'}
              onPress={() => setFeedbackSent(!feedbackSent)}
            />
            <ScrollView>
              <Block width={width - 24} marginLeft={12} marginTop={14} gap={10}>
                {feedback?.map(item => (
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
                      <Text
                        fontSize={14}
                        regular
                        color={COLORS.black1}
                        marginTop={13}>
                        {item?.content}
                      </Text>
                      <Block marginTop={17} row gap={10}>
                        <Block
                          width={width - 275}
                          height={96}
                          overflow={'hidden'}>
                          <Image
                            source={{
                              uri: `${URL_API.uploads}/${item?.file_attach}`,
                            }}
                            width={width - 275}
                            height={96}
                            resizeMode="cover"
                          />
                        </Block>
                      </Block>
                    </Block>
                  </Block>
                ))}
              </Block>
            </ScrollView>
          </Block>
        </SafeAreaView>
      </Modal>
      {visible && (
        <ImagePicker
          hidePicker={e => {
            setVisible(!visible);
          }}
          onImagePick={e => {
            setImage(e);
          }}
        />
      )}
    </Block>
  );
}
