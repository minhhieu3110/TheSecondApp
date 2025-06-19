import {Icon, TextInput} from '@components';
import {COLORS} from '@theme';
const FormInput = ({
  width,
  value,
  onChangeText,
  placeholder,
  backgroundColor,
  editable,
  multiline = false,
  keyboardType,
  color = COLORS.placeholder,
}) => {
  return (
    <TextInput
      width={width}
      height={41}
      radius={5}
      borderWidth={0.5}
      placeholder={placeholder}
      borderColor={COLORS.gray11}
      backgroundColor={backgroundColor}
      paddingLeft={12}
      color={color}
      fontSize={14}
      regular
      marginTop={15}
      value={value}
      numberOfLines={1}
      onChangeText={onChangeText}
      editable={editable}
      multiline={multiline}
      keyboardType={keyboardType}
    />
  );
};
export default FormInput;
