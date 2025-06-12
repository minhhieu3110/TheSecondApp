import {image} from '@assets';
import {Block, Image, Text, Pressable} from '@components';
import {COLORS} from '@theme';

export default function NoneData({
  top,
  title = 'Chưa có dữ liệu',
  titleBtn,
  onPress,
  btn = false,
}) {
  return (
    <Block marginTop={top} alignCenter>
      <Image source={image.image_none} width={'75%'} height={227.04} />
      <Text marginTop={22.3} fontSize={15} regular color={COLORS.black2}>
        {title}
      </Text>
      {btn && (
        <Pressable
          onPress={onPress}
          marginTop={20}
          width={'50%'}
          height={48}
          radius={8}
          backgroundColor={COLORS.red4}
          alignCenter
          justifyCenter>
          <Text fontSize={15} regular color={COLORS.white}>
            {titleBtn}
          </Text>
        </Pressable>
      )}
    </Block>
  );
}
