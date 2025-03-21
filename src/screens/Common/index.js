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
import TheQuestion from './Help/common/TheQuestion';
import TermsOfUse from './Help/common/TermsOfUse';
import PrivacySecurity from './Help/common/PrivacySecurity';
import Setting from './Setting';
import Feedback from './Feedback';
import About from './About';
import IntroduceSAN from './About/IntroduceSAN';
import Detail_NewActivity from './DetailService/Detail_NewActivity';
import Detail_Reception from './DetailService/Detail_Reception';
import Detail_Doing from './DetailService/Detail_Doing';
import Detail_Complete from './DetailService/Detail_Complete';
import EvaluateService from './EvaluateService';
import Detail_Cancel from './DetailService/Detail_Cancel';
import CareElederly from './CareElederly';
import CareSicker from './CareSicker';
import Housework from './Housework';
import PhysicalTherapy from './Physical_Therapy';
import Elederly_Servicedurationday from './CareElederly/common/ServiceForDay/Elederly_Servicedurationday';
import Elederly_Serviceday from './CareElederly/common/ServiceForDay/Elederly_Serviceday';
import Elederly_ConfirmAndPay from './CareElederly/common/ServiceForDay/Elederly_ConfirmAndPay';
import Elederly_Servicedurationmonth from './CareElederly/common/ServiceForMonth/ELederly_Servicedurationmonth';
import Elederly_ConfirmAndPayMonth from './CareElederly/common/ServiceForMonth/Elederly_ConfirmAndPayMonth';
import Sicker_Servicedurationday from './CareSicker/common/ServiceForDay/Sicker_Servicedurationday';
import Sicker_Serviceday from './CareSicker/common/ServiceForDay/Sicker_Serviceday';
import Sicker_ConfirmAndPay from './CareSicker/common/ServiceForDay/Sicker_ConfirmAndPay';
import Sicker_ConfirmAndPayMonth from './CareSicker/common/ServiceForMonth/Sicker_ConfirmAndPayMonth';
import Sicker_Servicedurationmonth from './CareSicker/common/ServiceForMonth/Sicker_Servicedurationmonth';
import ChooseTime from './Physical_Therapy/ChooseTime';
import PhysicalTherapy_ConfirmAndPay from './Physical_Therapy/PhysicalTherapy_ConfrimAndPay';
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
  [router.THEQUESTION]: TheQuestion,
  [router.TERMS_OF_USE]: TermsOfUse,
  [router.PRIVACY_SECURITY]: PrivacySecurity,
  [router.SETTING]: Setting,
  [router.FEEDBACK]: Feedback,
  [router.ABOUT]: About,
  [router.INTRODUCE_SAN]: IntroduceSAN,
  [router.DETAIL_NEW_ACTIVITY]: Detail_NewActivity,
  [router.DETAIL_RECEPTION]: Detail_Reception,
  [router.DETAIL_DOING]: Detail_Doing,
  [router.DETAIL_COMPLETE]: Detail_Complete,
  [router.DETAIL_CANCEL]: Detail_Cancel,
  [router.EVALUATE_SERVICE]: EvaluateService,
  [router.CARE_ELEDERLY]: CareElederly,
  [router.CARE_SICKER]: CareSicker,
  [router.PHYSICAL_THERAPY]: PhysicalTherapy,
  [router.HOUSEWORK]: Housework,
  [router.ELEDERLY_SERVICE_DURATION_DAY]: Elederly_Servicedurationday,
  [router.ELEDERLY_SERVICE_DAY]: Elederly_Serviceday,
  [router.ELEDERLY_CONFIRM_PAY]: Elederly_ConfirmAndPay,
  [router.ELEDERLY_SERVICE_DURATION_MONTH]: Elederly_Servicedurationmonth,
  [router.ELEDERLY_CONFIRM_PAY_MONTH]: Elederly_ConfirmAndPayMonth,

  [router.SICKER_SERVICE_DURATION_DAY]: Sicker_Servicedurationday,
  [router.SICKER_SERVICE_DAY]: Sicker_Serviceday,
  [router.SICKER_CONFIRM_PAY]: Sicker_ConfirmAndPay,
  [router.SICKER_SERVICE_DURATION_MONTH]: Sicker_Servicedurationmonth,
  [router.SICKER_CONFIRM_PAY_MONTH]: Sicker_ConfirmAndPayMonth,

  [router.CHOOSE_TIME_PHYSICAL_THERAPY]: ChooseTime,
  [router.PHYSICAL_THERAPY_CONFIRM_AND_PAY]: PhysicalTherapy_ConfirmAndPay,
};
