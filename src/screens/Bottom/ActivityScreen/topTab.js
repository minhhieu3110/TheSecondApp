import router from '@router';
import NewActivity from './common/NewActivity';
import Reception from './common/Reception';
import Doing from './common/Doing';
import Complete from './common/Complete';
import Cancel from './common/Cancel';

export const topTab = {
  [router.NEW_ACTIVITY]: NewActivity,
  [router.RECEPTION]: Reception,
  [router.DOING]: Doing,
  [router.COMPLETE]: Complete,
  [router.CANCEL]: Cancel,
};
