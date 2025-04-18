import actions from '@actions';
import {icon, image} from '@assets';
import {
  Block,
  Button,
  HeaderModal,
  HeaderTitle,
  Image,
  Pressable,
  SelectDropdown,
  SelectInput,
  Text,
  TextInput,
} from '@components';
import {width} from '@responsive';
import {COLORS} from '@theme';
import {formatPhone} from '@utils';
import {use, useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {Modal, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
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
  const [serviceId, setServiceId] = useState();
  const [content, setContent] = useState('');
  const sendFeedback = () => {
    dispatch({
      type: actions.FEEDBACK,
      body: {
        service_id: serviceId,
        full_name: userInfo?.full_name,
        phone: userInfo?.phone,
        content: content,
      },
      onSuccess: () => {
        setFeedbackSent(!feedbackSent);
      },
    });
  };
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderTitle title={'Phản hồi'} canGoBack />
      <Pressable
        onPress={() => setFeedbackSent(!feedbackSent)}
        absolute
        top={20}
        right={12}>
        <Text fontSize={15} regular color={COLORS.red4}>
          Lịch sử
        </Text>
      </Pressable>
      <Block width={width - 24} marginLeft={12} marginTop={20}>
        <Block gap={15}>
          <Text fontSize={15} semiBold color={COLORS.black3}>
            Chọn dịch vụ
          </Text>
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
        <Block
          width={177}
          height={177}
          backgroundColor={COLORS.pinkWhite}
          radius={8}
          borderDashed
          borderWidth={1}
          borderColor={COLORS.red4}
          marginTop={15}>
          <Block marginTop={65} justifyCenter alignCenter>
            <Image source={icon.icon_upload_image} width={47} height={46.95} />
            <Text fontSize={16} regular color={COLORS.black1} marginTop={16}>
              Ảnh đính kèm
            </Text>
          </Block>
        </Block>
      </Block>
      <Button title="Gửi" onPress={sendFeedback} />
      <Modal visible={feedbackSent} transparent="fade">
        <SafeAreaView style={{flex: 1}}>
          <Block flex backgroundColor={COLORS.gray10}>
            <HeaderModal
              title={'Phản hồi đã gửi'}
              onPress={() => setFeedbackSent(!feedbackSent)}
            />
            <Block width={width - 24} marginLeft={12} marginTop={14}>
              <Block
                width={width - 24}
                backgroundColor={COLORS.white}
                radius={8}
                paddingBottom={12}>
                <Block width={width - 48} marginLeft={12} marginTop={17}>
                  <Text fontSize={15} semiBold color={COLORS.red4}>
                    Chăm sóc nguòi già
                  </Text>
                  <Text
                    fontSize={14}
                    regular
                    color={COLORS.placeholder}
                    marginTop={17}>
                    12:30, 15/02/2025
                  </Text>
                  <Text
                    fontSize={14}
                    regular
                    color={COLORS.black1}
                    marginTop={13}>
                    Tôi muốn biết là dịch vụ này có bao gồm việc dẫn người già
                    đi dạo không ạ?
                  </Text>
                  <Block marginTop={17} row>
                    <Image
                      source={image.image_feedback}
                      width={width - 275}
                      height={96}
                    />
                    <Image
                      source={image.image_feedback}
                      width={width - 275}
                      height={96}
                    />
                  </Block>
                </Block>
              </Block>
            </Block>
          </Block>
        </SafeAreaView>
      </Modal>
    </Block>
  );
}
