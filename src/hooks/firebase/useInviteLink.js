import {APP_INFO} from '@constants';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import queryString from 'query-string';
import {useEffect, useState} from 'react';

const DYNAMIC_LINKS = {
  domainUriPrefix: 'https://cartashop.page.link',
  linkUrl: 'https://www.example.com/',
};

export default function useInviteLink({
  code,
  inviteLink,
  department_id,
  img,
  des,
}) {
  const [link, setLink] = useState(null);
  useEffect(() => {
    if (code || department_id || inviteLink) {
      dynamicLinks()
        .buildShortLink(
          {
            link: queryString.stringifyUrl({
              url: DYNAMIC_LINKS.linkUrl,
              query: {
                code,
                department_id,
                inviteLink,
              },
            }),
            domainUriPrefix: DYNAMIC_LINKS.domainUriPrefix,
            analytics: {campaign: 'referal'},
            android: {packageName: APP_INFO.androidBundleId},
            ios: {
              bundleId: APP_INFO.iosBundleId,
              appStoreId: APP_INFO.iosAppStoreId,
            },
            social: {
              imageUrl: img,
              descriptionText: des,
            },
          },
          dynamicLinks.ShortLinkType.SHORT,
        )
        .then(setLink)
        .catch(error => {
          if (__DEV__) {
            console.log('ERROR DYNAMIC LINKS: ', error);
          }
        });
    }
  }, [code]);

  return link;
}
