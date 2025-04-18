import actions from '@actions';
import {Block, HeaderTitle, Text} from '@components';
import {width} from '@responsive';
import {COLORS, FONTS} from '@theme';
import {useEffect} from 'react';
import {ScrollView} from 'react-native';
import RenderHTML from 'react-native-render-html';
import {useDispatch, useSelector} from 'react-redux';

export default function TermsOfUse() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: actions.GET_HELP,
      params: {number: 7},
    });
  }, [dispatch]);
  const help = useSelector(state => state.getHelp?.data || []);
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderTitle canGoBack title={'Điều khoản sử dụng'} />
      <ScrollView>
        <Block
          width={width - 24}
          marginLeft={12}
          marginTop={12}
          backgroundColor={COLORS.white}>
          <Block marginTop={12} marginLeft={12}>
            <RenderHTML
              contentWidth={width - 24}
              source={{html: help?.content}}
              tagsStyles={{
                p: {
                  fontSize: 14,
                  fontWeight: 'regular',
                  fontFamily: 'SVN-Poppins',
                  color: COLORS.black2,
                  lineHeight: 22,
                },
                strong: {
                  fontSize: 14,
                  fontWeight: 'bold',
                  fontFamily: 'SVN-Poppins',
                  color: COLORS.black2,
                  lineHeight: 22,
                },
                a: {
                  fontSize: 14,
                  fontFamily: FONTS.regular,
                  color: COLORS.blue,
                  lineHeight: 22,
                },
              }}
            />
          </Block>
        </Block>
      </ScrollView>
    </Block>
  );
}
