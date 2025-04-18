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
import AddNewAddress from './AddNewAddress';
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
import Elederly_Servicedurationday from './CareElederly/common/ServiceForDay';
import Elederly_Servicedurationmonth from './CareElederly/common/ServiceForMonth/ELederly_Servicedurationmonth';
import Elederly_ConfirmAndPayMonth from './CareElederly/common/ServiceForMonth/Elederly_ConfirmAndPayMonth';
import Sicker_Servicedurationday from './CareSicker/common/ServiceForDay/Sicker_Servicedurationday';
import Sicker_ConfirmAndPay from './CareSicker/common/ServiceForDay/Sicker_ConfirmAndPay';
import Sicker_ConfirmAndPayMonth from './CareSicker/common/ServiceForMonth/Sicker_ConfirmAndPayMonth';
import Sicker_Servicedurationmonth from './CareSicker/common/ServiceForMonth/Sicker_Servicedurationmonth';
import ChooseTime from './Physical_Therapy/ChooseTime';
import PhysicalTherapy_ConfirmAndPay from './Physical_Therapy/PhysicalTherapy_ConfrimAndPay';
import Housework_OddShiftService from './Housework/common/OddShiftService';
import Housework_OddShiftService_ConfirmAndPay from './Housework/common/OddShiftService/ConfirmAndPay';
import Housework_ServiceMonth from './Housework/common/ServiceMonth';
import Housework_Month_ConfirmAndPay from './Housework/common/ServiceMonth/ConfirmAndPay';
import DetailMessage from './DetailMessage';
import ShoppingScreen from './ShoppingScreen';
import AllCategory from './AllCategory';
import ProductOfCategory from './ProductOfCategory';
import Cart from './Cart';
import Shopping_Pay from './ShoppingPay';
import OrderOfYou from './OrderOfYou';
import DetailProduct from './DetailProduct';
import Evaluate from './Evaluate';
import Detail_New_Order from './DetailOrder/Detail_New_Order';
import Detail_Confirm_Order from './DetailOrder/Detail_Confirm_Order';
import Detail_Shipping from './DetailOrder/Detail_Shipping';
import Detail_Complete_Order from './DetailOrder/Detail_Complete_Order';
import Detail_Cancel_Order from './DetailOrder/Detail_Cancel_Order';
import EvaluateOrder from './EvaluateOrder';
import IntroSAN from './IntroSAN';
import ChooseService from './ChooseService';
import ChooseTimeForService from './ChooseTimeForService';
import SelectDayWorking from './SelectDayWorking';
import ConfirmAndPayService from './ConfirmAndPayService';

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
  [router.ELEDERLY_SERVICE_DURATION_MONTH]: Elederly_Servicedurationmonth,
  [router.ELEDERLY_CONFIRM_PAY_MONTH]: Elederly_ConfirmAndPayMonth,

  [router.SICKER_SERVICE_DURATION_DAY]: Sicker_Servicedurationday,
  [router.SICKER_CONFIRM_PAY]: Sicker_ConfirmAndPay,
  [router.SICKER_SERVICE_DURATION_MONTH]: Sicker_Servicedurationmonth,
  [router.SICKER_CONFIRM_PAY_MONTH]: Sicker_ConfirmAndPayMonth,

  [router.CHOOSE_TIME_PHYSICAL_THERAPY]: ChooseTime,
  [router.PHYSICAL_THERAPY_CONFIRM_AND_PAY]: PhysicalTherapy_ConfirmAndPay,

  [router.HOUSEWORK_ODD_SHIFT]: Housework_OddShiftService,
  [router.HOUSEWORK_ODD_SHIFT_CONFIRM_AND_PAY]:
    Housework_OddShiftService_ConfirmAndPay,
  [router.HOUSEWORK_MONTH]: Housework_ServiceMonth,
  [router.HOUSEWORK_MONTH_CONFIRM_AND_PAY]: Housework_Month_ConfirmAndPay,

  //Chung
  [router.SELECT_DAY_WORKING]: SelectDayWorking,
  [router.CONFIRM_AND_PAY_SERVICE]: ConfirmAndPayService,
  //
  [router.DETAIL_MESSAGE]: DetailMessage,
  [router.SHOPPING]: ShoppingScreen,
  [router.ALL_CATEGORY]: AllCategory,
  [router.PRODUCT_OF_CATEGORY]: ProductOfCategory,
  [router.CART]: Cart,
  [router.PAY_SHOPPING]: Shopping_Pay,
  [router.ORDER_OF_YOU]: OrderOfYou,
  [router.DETAIL_PRODUCT]: DetailProduct,
  [router.EVALUATE_PRODUCT]: Evaluate,
  [router.DETAIL_NEW_ORDER]: Detail_New_Order,
  [router.DETAIL_CONFIRM_ORDER]: Detail_Confirm_Order,
  [router.DETAIL_SHIPPING]: Detail_Shipping,
  [router.DETAIL_COMPLETE_ORDER]: Detail_Complete_Order,
  [router.DETAIL_CANCEL_ORDER]: Detail_Cancel_Order,
  [router.EVALUATE_ORDER]: EvaluateOrder,

  [router.CHOOSE_SERVICE]: ChooseService,
  [router.CHOOSE_TIME_FOR_SERVICE]: ChooseTimeForService,
};
