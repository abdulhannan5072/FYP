import moment from 'moment';

export const getCurrentDate = () => moment().format("DD-MM-YYYY") 
export const dateFormat = "DD-MM-YYYY";
export const timeFormat = "h:mm A";
export const formatDate = (date, format = dateFormat) =>
  date ? moment(date).format(format) : date;

// export const formatDateTime = (date, format = 'MMMM D, YYYY, h:mm A') =>
//   date ? moment(date).format(format) : date;

// export const formatDateTimeForAPI = date =>
//   date
//     ? moment(date)
//         .utc()
//         .format()
//     : date;

// export const formatDateTimeConversational = date => (date ? moment(date).fromNow() : date);
