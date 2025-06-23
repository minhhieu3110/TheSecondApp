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
  marginTop = 12,
  borderColor = COLORS.gray11,
}) => {
  return (
    <TextInput
      width={width}
      height={41}
      radius={5}
      borderWidth={0.5}
      placeholder={placeholder}
      borderColor={borderColor}
      backgroundColor={backgroundColor}
      paddingLeft={12}
      color={color}
      fontSize={14}
      regular
      marginTop={marginTop}
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
