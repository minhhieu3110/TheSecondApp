import {icon} from '@assets';
import router from '@router';
import {commonRoot} from 'navigation/navigationRef';

export const dataAccount = [
  {
    id: 1,
    icon: icon.icon_config_account,
    title: 'Thiết lập tài khoản',
    iconName: 'keyboard-arrow-right',
    onPress: () => {
      commonRoot.navigate(router.ACCOUNT);
    },
  },
  {
    id: 2,
    icon: icon.icon_staff_favorite,
    title: 'Nhân viên yêu thích',
    iconName: 'keyboard-arrow-right',
    onPress: () => {
      commonRoot.navigate(router.FAVORITE_STAFF);
    },
  },
  {
    id: 3,
    icon: icon.icon_voucher_profile,
    title: 'Kho Voucher',
    iconName: 'keyboard-arrow-right',
    onPress: () => {
      commonRoot.navigate(router.VOUCHER);
    },
  },
  {
    id: 4,
    icon: icon.icon_link_friend,
    title: 'Giới thiệu bạn bè',
    iconName: 'keyboard-arrow-right',
    onPress: () => {
      commonRoot.navigate(router.REFER_FRIEND);
    },
  },
  {
    id: 5,
    icon: icon.icon_list_block,
    title: 'Danh sách chặn',
    iconName: 'keyboard-arrow-right',
    onPress: () => {
      commonRoot.navigate(router.BLOCK_STAFF);
    },
  },
];

export const dataUtilities = [
  {
    id: 1,
    icon: icon.icon_help,
    title: 'Hỗ trợ',
    iconName: 'keyboard-arrow-right',
    onPress: () => {
      commonRoot.navigate(router.HELP);
    },
  },
  {
    id: 2,
    icon: icon.icon_setting,
    title: 'Cài đặt',
    iconName: 'keyboard-arrow-right',
    onPress: () => {
      commonRoot.navigate(router.SETTING);
    },
  },
  {
    id: 3,
    icon: icon.icon_feedback,
    title: 'Phản hồi',
    iconName: 'keyboard-arrow-right',
    onPress: () => {
      commonRoot.navigate(router.FEEDBACK);
    },
  },
  {
    id: 4,
    icon: icon.icon_about,
    title: 'Về chúng tôi',
    iconName: 'keyboard-arrow-right',
    onPress: () => {
      commonRoot.navigate(router.ABOUT);
    },
  },
];
export const infoWork = [
  {id: 1, icon: icon.icon_calendar_day, title: 'Ngày làm việc'},
  {id: 2, icon: icon.icon_time_activity, title: 'Thời gian làm việc'},
  {id: 3, icon: icon.icon_calendar_days, title: 'Lặp lại hàng tuần'},
  {id: 4, icon: icon.icon_detail_activity, title: 'Chi tiết công việc'},
];
