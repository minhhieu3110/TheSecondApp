import router from '@router';
import NewOrder from './NewOrder';
import ConfirmOrder from './ConfirmOrder';
import Shipping from './Shipping';
import CompleteShipOrder from './CompleteShipOder';
import CancelOrder from './CancelOrder';

export const commonOrder = {
  [router.NEW_ORDER]: NewOrder,
  [router.CONFIRM_ORDER]: ConfirmOrder,
  [router.SHIPPING]: Shipping,
  [router.COMPLETE_SHIP_ORDER]: CompleteShipOrder,
  [router.CANCEL_ORDER]: CancelOrder,
};
