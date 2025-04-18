import {months} from 'moment';
import {
  checkAndRequestPermission,
  handleFormData,
  randomNumberString,
  searchIgnoreCaseAccent,
  getFacebookProfile,
} from './helper';
export function formatCurrency(value) {
  return Number(value).toLocaleString('vi', {
    style: 'currency',
    currency: 'vnd',
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
  });
}
export function ConvertDateTimeStamp(timestamp) {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString('vi-VN', {
    hour: '2-digit',
    minute: '2-digit',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}
export function ConvertTimeStamp(timestamp) {
  const date = new Date(timestamp * 1000);
  return date.toLocaleString('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}
export function FormatDay(date) {
  const d = new Date(date);
  const options = {months: '2-digit', year: 'numeric'};
  return d.toLocaleDateString('vi-VN', options);
}
export const formatPhone = phone => {
  if (!phone) return '';
  return phone.replace(/(\d{4})(\d{3})(\d{3})/, '$1 $2 $3');
};
// export {
//   handleFormData,
//   checkAndRequestPermission,
//   randomNumberString,
//   searchIgnoreCaseAccent,
//   getFacebookProfile,
// };
