import router from '@router';
import Voucher from './VoucherScreen';
import DetailVoucher from './VoucherScreen/DetailVoucher';
import FavoriteStaff from './FavoriteStaff';
import AddStaff from './FavoriteStaff/common/AddStaff';
import ProfileStaff from './FavoriteStaff/common/ProfileStaff';
import Balance from './Balance';
import Recharge from './Balance/common/Recharge';
import InfoRecharge from './Balance/common/InfoRecharge';
import Withdraw from './Balance/common/Withdraw';
import History from './Balance/common/History';
import AccumulatedPoint from './AccumulatedPoints';
import Address from './Address';
import AddNewAddress from './Address/AddNewAddress';
import MenbershipRank from './MenbershipRank';
import HistoryPoint from './MenbershipRank/HistoryPoint';
import Account from './Account';
import ReferFriend from './ReferFriend';
import BlockStaff from './BlockStaff';
import AddBlockStaff from './BlockStaff/common/AddBlockStaff';
import ProfileStaffBlocked from './BlockStaff/common/ProfileStaffBlocked';
import Help from './Help';
export const common = {
  [router.VOUCHER]: Voucher,
  [router.DETAIL_VOUCHER]: DetailVoucher,
  [router.FAVORITE_STAFF]: FavoriteStaff,
  [router.ADD_STAFF]: AddStaff,
  [router.PROFILE_STAFF]: ProfileStaff,
  [router.BALANCE]: Balance,
  [router.RECHARGE]: Recharge,
  [router.INFO_RECHARGE]: InfoRecharge,
  [router.WITHDRAW]: Withdraw,
  [router.HISTORY]: History,
  [router.ACCUMULATED_POINT]: AccumulatedPoint,
  [router.ADDRESS]: Address,
  [router.ADD_NEW_ADDRESS]: AddNewAddress,
  [router.MENBERSHIP_RANK]: MenbershipRank,
  [router.HISTORY_POINT]: HistoryPoint,
  [router.ACCOUNT]: Account,
  [router.REFER_FRIEND]: ReferFriend,
  [router.BLOCK_STAFF]: BlockStaff,
  [router.ADD_BLOCK_STAFF]: AddBlockStaff,
  [router.PROFILE_STAFF_BLOCKED]: ProfileStaffBlocked,
  [router.HELP]: Help,
};
