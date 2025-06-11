import {TextInput} from '@components';
import {COLORS} from '@theme';

const FormInput = ({
  value,
  onChangeText,
  placeholder,
  backgroundColor,
  editable,
}) => {
  return (
    <TextInput
      height={41}
      radius={5}
      borderWidth={0.5}
      placeholder={placeholder}
      borderColor={COLORS.gray11}
      backgroundColor={backgroundColor}
      paddingLeft={12}
      color={COLORS.placeholder}
      fontSize={14}
      regular
      marginTop={15}
      value={value}
      numberOfLines={1}
      onChangeText={onChangeText}
      editable={editable}
    />
  );
};
export default FormInput;
