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
  StatusBar,
  Text,
  TextInput,
} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {ConvertDateTimeStamp, formatPhone} from '@utils';
import {commonRoot} from 'navigation/navigationRef';
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
  }, [dispatch]);
  const service = useSelector(state => state.getServices?.data || []);
  const userInfo = useSelector(state => state.getUserInfo?.data || []);
  const [visible, setVisible] = useState(false);
  const [image, setImage] = useState();
  const [serviceId, setServiceId] = useState();
  const [content, setContent] = useState('');
  const sendFeedback = () => {
    const formData = new FormData();
    formData.append('service_id', serviceId);
    formData.append('full_name', userInfo?.full_name || '');
    formData.append('phone', userInfo?.phone || '');
    formData.append('content', content);
    if (image?.path) {
      formData.append('file_attach', {
        uri: image.path,
        name: `feedback_${Date.now()}.jpg`,
        type: 'image/jpeg',
      });
    }

    dispatch({
      type: actions.FEEDBACK,
      body: formData,
      onSuccess: () => {
        setServiceId(null);
        setContent('');
        setImage(null);
        Toast.show({
          type: 'success',
          text1: 'Gửi phản hồi thành công!',
        });
        commonRoot.navigate(router.HISTORY_FEEDBACK);
      },
      onFail: e => {
        Toast.show({
          type: 'error',
          text1: 'Gửi phản hồi thất bại',
          text2: e?.message || 'Vui lòng thử lại.',
        });
      },
    });
  };

  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <StatusBar />
      <HeaderTitle title={'Phản hồi'} canGoBack />
      <ScrollView contentContainerStyle={{paddingBottom: 171}}>
        <Block width={width - 24} marginLeft={12} marginTop={20}>
          <Block gap={15}>
            <Block rowCenter spaceBetween>
              <Text fontSize={15} semiBold color={COLORS.black3}>
                Chọn dịch vụ
              </Text>
              <Text
                onPress={() => commonRoot.navigate(router.HISTORY_FEEDBACK)}
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
              height={110}
              textAlignVertical={'top'}
              paddingLeft={12}
              placeholderTextColor={COLORS.placeholder}
              radius={8}
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
              <Image
                source={{uri: image?.path}}
                width={177}
                height={177}
                resizeMode="cover"
              />
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
