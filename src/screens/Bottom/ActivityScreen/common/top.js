import router from '@router';
import NewActivity from './NewActivity';
import Reception from './Reception';
import Doing from './Doing';
import Complete from './Complete';
import Cancel from './Cancel';

export const top = {
  [router.NEW_ACTIVITY]: NewActivity,
  [router.RECEPTION]: Reception,
  [router.DOING]: Doing,
  [router.COMPLETE]: Complete,
  [router.CANCEL]: Cancel,
};
