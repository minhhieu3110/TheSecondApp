import actions from '@actions';
import {icon, image} from '@assets';
import {
  Block,
  HeaderTitle,
  Image,
  Text,
  Icon,
  Pressable,
  Button,
  ImagePicker,
} from '@components';
import Clipboard from '@react-native-clipboard/clipboard';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {formatCurrency} from '@utils/helper';
import {commonRoot} from 'navigation/navigationRef';
import {useEffect, useState} from 'react';
import Toast from 'react-native-toast-message';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {URL_API} from 'redux/sagas/common';

export default function InfoRecharge({route}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: actions.GET_USER_INFO,
    });
  }, [rechargeInfo, dispatch]);
  const userInfo = useSelector(state => state.getUserInfo?.data || []);
  const rechargeInfo = useSelector(state => state.recharge?.data || []);
  const [show, setShow] = useState(false);
  const [imageBill, setImageBill] = useState();
  const updateBill = () => {
    const file_attach = new FormData();
    file_attach.append('file_attach', {
      uri: imageBill?.path,
      name: `picture_${new Date().getTime()}.jpg`,
      type: 'image/jpeg',
    });
    dispatch({
      type: actions.UPDATE_BILL,
      params: {id: rechargeInfo?.id},
      body: file_attach,
      onSuccess: res => {
        Toast.show({
          type: 'success',
          text1: 'Nạp tiền thành công',
        });
        commonRoot.navigate(router.BALANCE);
      },
      onFail: e => {
        Toast.show({
          type: 'error',
          text1: 'Nạp tiền thất bại',
          text2: 'Vui lòng tải lên hình ảnh biên lai và thử lại sau',
        });
      },
    });
  };

  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderTitle title={'Thông tin chuyển khoản'} canGoBack />
      <Block
        width={width - 24}
        radius={8}
        backgroundColor={COLORS.white}
        marginTop={15}
        marginLeft={12}
        paddingBottom={12}
        alignCenter>
        <Text fontSize={15} regular color={COLORS.black1} marginTop={20}>
          Giá trị quý khách cần nạp
        </Text>
        <Text fontSize={22} color={COLORS.red4} semiBold>
          {formatCurrency(route?.params?.value)}
        </Text>
        <Block
          width={width - 48}
          height={5}
          backgroundColor={COLORS.gray11}
          marginTop={24}
        />
        <Block width={width - 48} marginTop={20}>
          <Text fontSize={15} semiBold color={COLORS.black1} marginLeft={11}>
            Thông tin ngân hàng
          </Text>
          <Block marginTop={22} row spaceBetween>
            <Text fontSize={14} regular color={COLORS.placeholder}>
              Ngân hàng
            </Text>
            <Text fontSize={14} regular color={COLORS.black1}>
              {rechargeInfo?.bank_name}
            </Text>
          </Block>
          <Block marginTop={22} row spaceBetween>
            <Text fontSize={14} regular color={COLORS.placeholder}>
              Chủ tài khoản
            </Text>
            <Text fontSize={14} regular color={COLORS.black1}>
              {rechargeInfo?.bank_account}
            </Text>
          </Block>
          <Block marginTop={18} row spaceBetween>
            <Text fontSize={14} regular color={COLORS.placeholder}>
              Số tài khoản
            </Text>
            <Block rowCenter gap={9}>
              <Text fontSize={14} regular color={COLORS.black1}>
                {rechargeInfo?.bank_number}
              </Text>
              <Pressable
                onPress={() => Clipboard.setString(rechargeInfo?.bank_number)}>
                <Icon
                  IconType={Ionicons}
                  iconName={'copy-outline'}
                  iconColor={COLORS.red4}
                  iconSize={21}
                />
              </Pressable>
            </Block>
          </Block>
          <Block marginTop={15} row spaceBetween>
            <Text fontSize={14} regular color={COLORS.placeholder}>
              Nội dung
            </Text>
            <Block rowCenter gap={9}>
              <Text fontSize={14} regular color={COLORS.black1} uppercase>
                {rechargeInfo?.bank_content}
              </Text>
              <Pressable
                onPress={() => Clipboard.setString(rechargeInfo?.bank_content)}>
                <Icon
                  IconType={Ionicons}
                  iconName={'copy-outline'}
                  iconColor={COLORS.red4}
                  iconSize={21}
                />
              </Pressable>
            </Block>
          </Block>
        </Block>
      </Block>
      <Block
        width={width - 24}
        marginTop={15}
        marginHorizontal={12}
        paddingHorizontal={12}
        paddingBottom={12}
        backgroundColor={COLORS.white}
        row
        spaceBetween
        paddingTop={20}>
        <Block>
          <Text fontSize={15} semiBold color={COLORS.black1}>
            QR code chuyển tiền
          </Text>
          <Block
            width={width - 251}
            height={width - 251}
            backgroundColor={COLORS.pinkWhite2}
            marginTop={15}
            radius={10}
            alignCenter
            justifyCenter>
            <Block width={width - 275.5} height={width - 275.5}>
              <Image
                source={{uri: `${URL_API.uploads}/${userInfo?.bank_qrcode}`}}
                width={'100%'}
                height={'100%'}
                resizeMode="cover"
              />
            </Block>
          </Block>
        </Block>
        <Block>
          <Text fontSize={15} semiBold color={COLORS.black1}>
            Hình ảnh biên lai
          </Text>
          <Pressable
            onPress={() => setShow(!show)}
            width={width - 251}
            height={width - 251}
            backgroundColor={COLORS.pinkWhite2}
            marginTop={15}
            radius={10}
            borderDashed
            borderColor={COLORS.red4}
            borderWidth={1}
            justifyCenter
            overflow={'hidden'}>
            {imageBill ? (
              <Image
                source={{uri: imageBill?.path}}
                width={width - 251}
                height={width - 251}
                resizeMode="cover"
              />
            ) : (
              <Block alignCenter>
                <Block width={47} height={47}>
                  <Image
                    source={icon.icon_upload_image}
                    width={'100%'}
                    height={'100%'}
                    resizeMode="contain"
                  />
                </Block>
                <Text
                  fontSize={16}
                  regular
                  color={COLORS.black1}
                  marginTop={16}>
                  Ảnh chuyển tiền
                </Text>
              </Block>
            )}
          </Pressable>
        </Block>
      </Block>
      <Button title="Gửi lệnh" onPress={updateBill} />
      {show && (
        <ImagePicker
          hidePicker={() => setShow(!show)}
          onImagePick={e => {
            setImageBill(e);
          }}
        />
      )}
    </Block>
  );
}
