import {commonRoot} from '@navigation/navigationRef';
import router from '@navigation/router';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import actions from '@redux/actions';
import queryString from 'query-string';
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';

export default function useInviteLinkOpenApp() {
  const dispatch = useDispatch();
  const [link, setLink] = useState(null);

  useEffect(() => {
    if (link) {
      const {code, inviteLink, department_id} =
        queryString.parseUrl(link?.url)?.query || {};
      if (code) {
        commonRoot.navigate(router.PRODUCTS_SCREEN, {
          data: code,
        });
      } else if (department_id) {
        commonRoot.navigate(router.SHOP_SCREEN, {
          data: department_id,
        });
      } else if (inviteLink) {
        dispatch({type: actions.SAVE_INVITE_CODE, data: inviteLink});
      }
    }
  }, [link, dispatch]);

  useEffect(() => {
    dynamicLinks()
      .getInitialLink()
      .then(_link => {
        setLink(_link);
      });
  }, []);

  useEffect(() => {
    const unsubscribe = dynamicLinks().onLink(_link => {
      setLink(_link);
    });
    return unsubscribe;
  }, []);

  return link;
}
