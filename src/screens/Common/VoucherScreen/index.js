import {Block, HeaderTitle} from '@components';
import {width} from '@responsive';
import {COLORS} from '@theme';
// import Icon from 'react-native-vector-icons/MaterialIcons';
export default function Voucher() {
  return (
    <>
      <Block width={width} height={93} backgroundColor={COLORS.white}>
        <HeaderTitle title={'Kho Voucher'} showBack />
      </Block>
    </>
  );
}
