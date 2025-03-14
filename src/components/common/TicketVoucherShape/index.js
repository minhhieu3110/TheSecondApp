import Block from '@components/base/Block';
import {COLORS} from '@theme';
import {width} from '@responsive';
const TicketVoucherShape = () => {
  return (
    <Block height={150} width={width - 395} marginLeft={8.1} alignCenter>
      <Block
        height={width - 395}
        width={width - 395}
        radius={50}
        marginTop={'-50%'}
        backgroundColor={COLORS.gray10}
      />
      <Block
        width={12}
        height={12}
        radius={50}
        marginTop={3}
        backgroundColor={COLORS.gray10}
      />
      <Block
        width={12}
        height={12}
        radius={50}
        marginTop={6}
        backgroundColor={COLORS.gray10}
      />
      <Block
        width={12}
        height={12}
        radius={50}
        marginTop={6}
        backgroundColor={COLORS.gray10}
      />
      <Block
        width={12}
        height={12}
        radius={50}
        marginTop={3}
        backgroundColor={COLORS.gray10}
      />
      <Block
        width={12}
        height={12}
        radius={50}
        marginTop={6}
        backgroundColor={COLORS.gray10}
      />
      <Block
        width={12}
        height={12}
        radius={50}
        marginTop={6}
        marginBottom={3}
        backgroundColor={COLORS.gray10}
      />
      <Block
        height={width - 395}
        width={width - 395}
        radius={50}
        marginBottom={'-50%'}
        backgroundColor={COLORS.gray10}
      />
    </Block>
  );
};
export default TicketVoucherShape;
