const getShiftLegnth = (shift) => {
  return Date.parse(shift.end) - Date.parse(shift.start);
};

const millisecondsPerHour = 1000 * 60 * 60;

const millisecondsPerMinute = 1000 * 60;

const minutesPerHour = 60;

const formatPrice = (price) => {
  return `${price} kr`;
};

const calculateShiftPrice = (shift) => {
  return Math.round(
    (getShiftLegnth(shift) / millisecondsPerHour) *
      200 /* 200 is the hourly rate */
  );
};

const displayPrice = (shift) => {
  return formatPrice(calculateShiftPrice(shift));
};

const calculateSum = (previous, current) => {
  return previous + current;
};

const displayTotalPrice = (shifts) => {
  return formatPrice(
    shifts.map((shift) => calculateShiftPrice(shift)).reduce(calculateSum, 0)
  );
};

//         {Math.floor(
//           (getShiftLegnth(shift)) /
//             (millisecondsPerHour)
//         )}
//         :
//         {String(
//           Math.floor(
//             (getShiftLegnth(shift)) /
//               (millisecondsPerMinute)
//           ) % minutesPerHour
//         ).padStart(2, "0")}
//         h

//

//   {Math.floor(
//     shifts
//       .map((shift) => getShiftLegnth(shift))
//       .reduce(calculateSum) /
//       (millisecondsPerHour)
//   )}
//   :
//   {String(
//     Math.floor(
//       shifts
//         .map((shift) => getShiftLegnth(shift))
//         .reduce(calculateSum) /
//         (millisecondsPerMinute)
//     ) % minutesPerHour
//   ).padStart(2, "0")}
//   h

export { displayPrice, displayTotalPrice };
