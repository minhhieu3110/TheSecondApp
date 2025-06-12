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
export function ConvertTime(timestamp) {
  const date = new Date(timestamp * 1000);
  return date.toLocaleString('vi-VN', {
    hour: '2-digit',
    minute: '2-digit',
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
export const formatBankNumber = bankNumber => {
  if (!bankNumber) return '';
  return bankNumber.replace(/(\d{4})(\d{4})(\d{3})/, '$1 $2 $3');
};
export const formatTime = time => {
  const hours = String(time.getHours()).padStart(2, '0');
  const minutes = String(time.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
};
export const convertDate = day => {
  const date = String(day.getDate()).padStart(2, '0');
  const month = String(day.getMonth()).padStart(2, '0');
  const year = String(day.getFullYear());
  return `${date}/${month}/${year}`;
};
// export {
//   handleFormData,
//   checkAndRequestPermission,
//   randomNumberString,
//   searchIgnoreCaseAccent,
//   getFacebookProfile,
// };
