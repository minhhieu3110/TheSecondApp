import {Block, HeaderTitle, Text} from '@components';
import {width} from '@responsive';
import {COLORS} from '@theme';
import {ScrollView} from 'react-native';

export default function TermsOfUse() {
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderTitle canGoBack title={'Điều khoản dử dụng'} />
      <ScrollView>
        <Block
          width={width - 24}
          marginLeft={12}
          marginTop={12}
          backgroundColor={COLORS.white}>
          <Block marginTop={12} marginLeft={12}>
            <Text fontSize={14} regular color={COLORS.black1} marginBottom={39}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been industry's standard dummy text ever
              since the 1500s, when anm unknown printer took a galley of type
              and scrambledt it to make a type specimen book. It has survived t
              only five centuries, but also the leap into electritypesetting,
              remaining essentially unchanged. It was popularisn in the 1960s
              with the release of Letraset sheeticontaining Lorem Ipsum
              passages, and more recently wt desktop publishing software like
              Aldus PageMaker incliversions of Lorem Ipsum.
            </Text>
            <Text fontSize={14} regular color={COLORS.black1} marginBottom={39}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been industry's standard dummy text ever
              since the 1500s, when anm unknown printer took a galley of type
              and scrambledt it to make a type specimen book. It has survived t
              only five centuries, but also the leap into electritypesetting,
              remaining essentially unchanged. It was popularisn in the 1960s
              with thez recently wt desktop publishing software like Aldus
              PageMaker incliversions of Lorem Ipsum.
            </Text>
            <Text fontSize={14} regular color={COLORS.black1} marginBottom={39}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been industry's standard dummy text ever
              since the 1500s, when anm unknown printer took a galley of type
              and scrambledt it to make a type specimen book. It has survived t
              only five centuries, but also the leap into electritypesetting,
              remaining essentially unchanged. It was popularisn in the 1960s
              with the release of Letraset sheeticontaining Lorem Ipsum
              passages, and more recently wt desktop publishing software like
              Aldus PageMaker incliversions of Lorem Ipsum.
            </Text>
          </Block>
        </Block>
      </ScrollView>
    </Block>
  );
}
