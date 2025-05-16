import router from '@router';
import Voucher from './VoucherScreen';
import DetailVoucher from './VoucherScreen/DetailVoucher';
import FavoriteStaff from './FavoriteStaff';
import AddStaff from './FavoriteStaff/common/AddStaff';
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
import Help from './Help';
import TheQuestion from './Help/common/TheQuestion';
import TermsOfUse from './Help/common/TermsOfUse';
import PrivacySecurity from './Help/common/PrivacySecurity';
import Setting from './Setting';
import Feedback from './Feedback';
import About from './About';
import IntroduceSAN from './About/IntroduceSAN';
import EvaluateService from './EvaluateService';
import CareElederly from './CareElederly';
import CareSicker from './CareSicker';
import Housework from './Housework';
import PhysicalTherapy from './Physical_Therapy';
import Elederly_Servicedurationday from './CareElederly/common/ServiceForDay';
import Elederly_Servicedurationmonth from './CareElederly/common/ServiceForMonth';
import Sicker_Servicedurationday from './CareSicker/common/ServiceForDay';
import Sicker_Servicedurationmonth from './CareSicker/common/ServiceForMonth';
import Housework_OddShiftService from './Housework/common/OddShiftService';
import Housework_ServiceMonth from './Housework/common/ServiceMonth';
import DetailMessage from './DetailMessage';
import ShoppingScreen from './ShoppingScreen';
import AllCategory from './AllCategory';
import ProductOfCategory from './ProductOfCategory';
import Cart from './Cart';
import Shopping_Pay from './ShoppingPay';
import OrderOfYou from './OrderOfYou';
import DetailProduct from './DetailProduct';
import Evaluate from './Evaluate';
import EvaluateOrder from './EvaluateOrder';
import ChooseService from './ChooseService';
import ChooseTimeForService from './ChooseTimeForService';
import SelectDayWorking from './SelectDayWorking';
import ConfirmAndPayService from './ConfirmAndPayService';
import ConfirmAndSignupPackage from './ConfirmAndSignupPackage';
import DetailService from './DetailService';
import DetailNotification from 'screens/Common/DetailNotification';
import ProfileEmployee from './ProfileEmployee';
import ExchangePoint from './ExchangePoint';
import DetailVoucherExchange from './ExchangePoint/common';
import RepeatService from './RepeatService';
import RepeatServiceDetail from './RepeatServiceDetail';
import AllPromo from './Promo';
import DetailPromo from './Promo/common';
import AllNews from './AllNews';
import DetailNew from './AllNews/common';
import UpdateAddress from './UpdateAddress';
import DetailOrder from './DetailOrder';

export const common = {
  [router.VOUCHER]: Voucher,
  [router.DETAIL_VOUCHER]: DetailVoucher,
  [router.FAVORITE_STAFF]: FavoriteStaff,
  [router.ADD_STAFF]: AddStaff,
  [router.BALANCE]: Balance,
  [router.RECHARGE]: Recharge,
  [router.INFO_RECHARGE]: InfoRecharge,
  [router.WITHDRAW]: Withdraw,
  [router.HISTORY]: History,
  [router.ACCUMULATED_POINT]: AccumulatedPoint,
  [router.ADDRESS]: Address,
  [router.ADD_NEW_ADDRESS]: AddNewAddress,
  [router.UPDATE_ADDRESS]: UpdateAddress,
  [router.MENBERSHIP_RANK]: MenbershipRank,
  [router.HISTORY_POINT]: HistoryPoint,
  [router.ACCOUNT]: Account,
  [router.REFER_FRIEND]: ReferFriend,
  [router.BLOCK_STAFF]: BlockStaff,
  [router.ADD_BLOCK_STAFF]: AddBlockStaff,
  [router.HELP]: Help,
  [router.THEQUESTION]: TheQuestion,
  [router.TERMS_OF_USE]: TermsOfUse,
  [router.PRIVACY_SECURITY]: PrivacySecurity,
  [router.SETTING]: Setting,
  [router.FEEDBACK]: Feedback,
  [router.ABOUT]: About,
  [router.INTRODUCE_SAN]: IntroduceSAN,
  [router.DETAIL_SERVICE]: DetailService,
  [router.EVALUATE_SERVICE]: EvaluateService,
  [router.CARE_ELEDERLY]: CareElederly,
  [router.CARE_SICKER]: CareSicker,
  [router.PHYSICAL_THERAPY]: PhysicalTherapy,
  [router.HOUSEWORK]: Housework,
  [router.ELEDERLY_SERVICE_DURATION_DAY]: Elederly_Servicedurationday,
  [router.ELEDERLY_SERVICE_DURATION_MONTH]: Elederly_Servicedurationmonth,
  [router.SICKER_SERVICE_DURATION_DAY]: Sicker_Servicedurationday,
  [router.SICKER_SERVICE_DURATION_MONTH]: Sicker_Servicedurationmonth,
  [router.HOUSEWORK_ODD_SHIFT]: Housework_OddShiftService,
  [router.HOUSEWORK_MONTH]: Housework_ServiceMonth,
  [router.SELECT_DAY_WORKING]: SelectDayWorking,
  [router.CONFIRM_AND_PAY_SERVICE]: ConfirmAndPayService,
  [router.CONFIRM_AND_SIGNUP_PACKAGE]: ConfirmAndSignupPackage,
  [router.DETAIL_MESSAGE]: DetailMessage,
  [router.SHOPPING]: ShoppingScreen,
  [router.ALL_CATEGORY]: AllCategory,
  [router.PRODUCT_OF_CATEGORY]: ProductOfCategory,
  [router.CART]: Cart,
  [router.PAY_SHOPPING]: Shopping_Pay,
  [router.ORDER_OF_YOU]: OrderOfYou,
  [router.DETAIL_PRODUCT]: DetailProduct,
  [router.EVALUATE_PRODUCT]: Evaluate,
  //
  [router.DETAIL_ORDER]: DetailOrder,
  //

  //
  [router.EVALUATE_ORDER]: EvaluateOrder,
  [router.CHOOSE_SERVICE]: ChooseService,
  [router.CHOOSE_TIME_FOR_SERVICE]: ChooseTimeForService,
  [router.DETAIL_NOTIFICATION]: DetailNotification,
  [router.PROFILE_EMPLOYEE]: ProfileEmployee,
  [router.EXCHANGE_POINT]: ExchangePoint,
  [router.DETAIL_EXCHANGE_VOUCHER]: DetailVoucherExchange,
  [router.REPEAT_SERVICE]: RepeatService,
  [router.DETAIL_REPEAT_SERVICE]: RepeatServiceDetail,
  [router.ALL_PROMO]: AllPromo,
  [router.DETAIL_PROMO]: DetailPromo,
  [router.ALL_NEWS]: AllNews,
  [router.DETAIL_NEW]: DetailNew,
};
