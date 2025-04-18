import {Block, HeaderTitle, Text} from '@components';
import {width} from '@responsive';
import {COLORS} from '@theme';
import {useEffect} from 'react';
import {ScrollView} from 'react-native';
import RenderHTML from 'react-native-render-html';
import {useDispatch, useSelector} from 'react-redux';
import actions from '@actions';
export default function PrivacySecurity() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: actions.GET_HELP,
      params: {number: 9},
    });
  }, [dispatch]);
  const help = useSelector(state => state.getHelp?.data || []);
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderTitle canGoBack title={'Chính sách bảo mật'} />
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
                  // fontFamily: FONTS.regular,
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
