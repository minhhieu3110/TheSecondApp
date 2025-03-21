import {Block, Text} from '@components';
import {COLORS} from '@theme';
import {width} from '@responsive';
const PolicyCancelPackageService = ({
  top,
  title,
  content1 = 'chúng tôi hoàn lại tổng số tiền của những buổi chưa sử dụng',
  content2 = 'chúng tôi hoàn lại tổng số tiền của những buổi chưa sử dụng trừ đi 20% giá trị của gói ban đầu.',
}) => {
  return (
    <Block marginTop={top}>
      <Text fontSize={15} semiBold color={COLORS.black2}>
        {title}
      </Text>
      <Block marginTop={15} width={width - 24}>
        <Text fontSize={14} regular color={COLORS.black2} lineHeight={22}>
          Trong trường hợp bạn muốn hủy gói cố định, chúng tôi áp dụng điều
          kiện/điều khoản hủy gói và hoàn lại tiền những công việc chưa sử dụng
          qua hai hình thức:
        </Text>
        <Block marginTop={14}>
          <Text fontSize={14} semiBold color={COLORS.black2}>
            Hoàn tiền qua San:{' '}
            <Text fontSize={14} regular color={COLORS.black2}>
              {content1}
            </Text>
          </Text>
          <Text fontSize={14} semiBold color={COLORS.black2}>
            Hoàn tiền qua chuyển khoản ngân hàng:{' '}
            <Text fontSize={14} regular color={COLORS.black2}>
              {content2}
            </Text>
          </Text>
        </Block>
      </Block>
    </Block>
  );
};
export default PolicyCancelPackageService;
