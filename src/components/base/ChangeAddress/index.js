import {icon} from '@assets';
import {Icon, Block, Text, Pressable, ScrollView, Image} from '@components';
import {COLORS} from '@theme';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Modal, SafeAreaView, TouchableOpacity} from 'react-native';
import {useState} from 'react';
import {width} from '@responsive';

export default function ChangeAddress({
  visible,
  close,
  data = [],
  onPress,
  addAddress,
  defaultAddress,
}) {
  const [addSelected, setAddSelected] = useState(defaultAddress);
  const handleSelectAdd = id => {
    setAddSelected(id);
    onPress(id);
  };
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={close}>
      <TouchableOpacity
        activeOpacity={1}
        style={{
          flex: 1,
          backgroundColor: COLORS.transparentColor4,
          justifyContent: 'flex-end',
        }}>
        <Block
          width={width}
          height={600}
          backgroundColor={COLORS.white}
          borderTopRadius={8}>
          <Block marginTop={10}>
            <Text fontSize={15} semiBold color={COLORS.placeholder} center>
              Chọn địa chỉ
            </Text>
            <Pressable onPress={close} absolute right={10}>
              <Icon
                IconType={FontAwesome5}
                iconName={'times'}
                iconColor={COLORS.placeholder}
                iconSize={20}
              />
            </Pressable>
          </Block>
          <Block borderWidth={1} marginTop={10} borderColor={COLORS.gray10} />
          <ScrollView>
            <Block
              width={width - 24}
              marginHorizontal={12}
              marginTop={15}
              spaceBetween
              gap={7}>
              {data?.map(item => (
                <Pressable
                  onPress={() => handleSelectAdd(item.item_id)}
                  key={item.item_id}
                  width={width - 24}
                  radius={8}
                  paddingBottom={18}
                  marginBottom={12}
                  borderWidth={0.5}
                  borderColor={COLORS.red4}>
                  <Block
                    marginLeft={10}
                    marginTop={12}
                    height={25}
                    row
                    alignCenter>
                    <Image
                      source={icon.icon_position_address}
                      width={25}
                      height={25}
                    />
                    <Text
                      marginLeft={4}
                      fontSize={14}
                      regular
                      color={COLORS.placeholder}>
                      {item.title}
                    </Text>
                    <Block
                      absolute
                      right={5}
                      width={15}
                      height={15}
                      radius={15}
                      borderWidth={0.5}
                      borderColor={COLORS.black2}
                      justifyCenter
                      alignCenter>
                      {addSelected === item.item_id ? (
                        <Block
                          width={11}
                          height={11}
                          radius={11}
                          backgroundColor={COLORS.red4}></Block>
                      ) : (
                        ''
                      )}
                    </Block>
                  </Block>
                  <Text
                    fontSize={14}
                    regular
                    color={COLORS.placeholder}
                    numberOfLines={2}
                    marginLeft={39}
                    marginTop={9}>
                    {item.address_full}
                  </Text>
                </Pressable>
              ))}
            </Block>
          </ScrollView>
          <Block height={60} justifyCenter alignCenter>
            <Pressable
              onPress={addAddress}
              height={48}
              width={width - 24}
              marginHorizontal={12}
              backgroundColor={COLORS.red4}
              radius={8}
              justifyCenter
              alignCenter>
              <Text fontSize={15} semiBold color={COLORS.white}>
                Thêm địa chỉ
              </Text>
            </Pressable>
          </Block>
        </Block>
      </TouchableOpacity>
    </Modal>
  );
}
