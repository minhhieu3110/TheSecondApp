import Block from '@components/base/Block';
import {hs} from '@responsive';
import {COLORS} from '@theme';
const TicketVoucherShape = ({height = 150}) => {
  return (
    <Block
      height={height}
      width={hs(37)}
      marginLeft={8.1}
      alignCenter
      overflow={'hidden'}
      gap={6}>
      <Block
        height={37}
        width={37}
        radius={50}
        marginTop={'-50%'}
        backgroundColor={COLORS.gray10}
      />
      <Block
        width={12}
        height={12}
        radius={50}
        backgroundColor={COLORS.gray10}
      />
      <Block
        width={12}
        height={12}
        radius={50}
        backgroundColor={COLORS.gray10}
      />
      <Block
        width={12}
        height={12}
        radius={50}
        backgroundColor={COLORS.gray10}
      />
      <Block
        width={12}
        height={12}
        radius={50}
        backgroundColor={COLORS.gray10}
      />
      <Block
        width={12}
        height={12}
        radius={50}
        backgroundColor={COLORS.gray10}
      />
      <Block
        width={12}
        height={12}
        radius={50}
        backgroundColor={COLORS.gray10}
      />
      <Block
        height={37}
        width={37}
        radius={50}
        marginBottom={'-50%'}
        backgroundColor={COLORS.gray10}
      />
    </Block>
  );
};
export default TicketVoucherShape;
