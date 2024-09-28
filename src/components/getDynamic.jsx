import React from "react";
import Wheel from "./Wheel";
import { getYear } from "date-fns"; // Import getYear from date-fns

const Well = () => {
  // Get the current year
  const currentYear = getYear(new Date());

  // Function to format the years from 1970 to the current year
  function formatYear(_relative, absolute) {
    return 1970 + absolute; // Add absolute to 1970 to get the correct year
  }

  // Function to format days (1 to 31)
  function formatDay(_relative, absolute) {
    return absolute + 1; // Days start from 1 (not 0)
  }

  // Function to format months (1 to 12)
  function formatMonth(_relative, absolute) {
    return absolute + 1; // Months start from 1 (January)
  }

  return (
    <div
      style={{
        height: "240px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#000",
      }}
    >
      <div style={{ width: 70, height: 180 }}>
        <Wheel
          initIdx={0} // Start with day 1
          length={31} // Days: 1-31
          width={23}
          loop={true}
          setValue={formatDay} // Set days from 1 to 31
          perspective='left'
        />
      </div>
      <div style={{ width: 70, height: 180 }}>
        <Wheel
          initIdx={0} // Start with month 1 (January)
          length={12} // Months: 1-12
          width={23}
          loop={true}
          setValue={formatMonth} // Set months from 1 to 12
          perspective='left'
        />
      </div>
      <div style={{ width: 70, height: 180 }}>
        <Wheel
          initIdx={currentYear - 1970} // Initialize with the current year index
          length={currentYear - 1970 + 1} // Number of years from 1970 to current year (inclusive)
          width={23}
          loop={false} // Disable looping for years
          setValue={formatYear} // Set year value using formatYear function
          perspective='left'
        />
      </div>
    </div>
  );
};

export default Well;

// import React from "react";
// import Wheel from "./Wheel";
// import { getYear } from "date-fns"; // Import getYear from date-fns

// const Well = () => {
//   // Get the current year
//   const currentYear = getYear(new Date());

//   function formatYear(_relative, absolute) {
//     return 1970 + absolute; // Add absolute to 1970 to get the correct year
//   }

//   // Function to format days (1 to 31)
//   function formatDay(_relative, absolute) {
//     return absolute + 1; // Days start from 1
//   }

//   // Function to format months (1 to 12)
//   function formatMonth(_relative, absolute) {
//     return absolute + 1; // Months start from 1 (January)
//   }

//   return (
//     <div
//       style={{
//         height: "240px",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         background: "#000",
//       }}
//     >
//       <div style={{ width: 70, height: 180 }}>
//         <Wheel
//           initIdx={0}
//           length={32} // Days
//           width={23}
//           setValue={formatDay}
//           loop={true}
//           perspective='left'
//         />
//       </div>
//       <div style={{ width: 70, height: 180 }}>
//         <Wheel
//           initIdx={0}
//           length={12} // Months
//           width={23}
//           loop={true}
//           setValue={formatMonth}
//           perspective='left'
//         />
//       </div>
//       <div style={{ width: 70, height: 180 }}>
//         <Wheel
//           initIdx={currentYear - 1970}
//           length={currentYear - 1970 + 1}
//           width={23}
//           loop={false}
//           setValue={formatYear}
//           perspective='left'
//         />
//       </div>
//     </div>
//   );
// };

// export default Well;

// import React from "react";
// import Wheel from "./Wheel";
// import { format, subDays } from "date-fns";

// const Well = () => {
//   const currentYear = getYear(new Date());

//   function formateDate(_relative, absolute) {
//     return format(subDays(new Date(), absolute), "yyyy");
//   }

//   return (
//     <div
//       style={{
//         height: "240px",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         background: "#000",
//       }}
//     >
//       <div style={{ width: 70, height: 180 }}>
//         <Wheel
//           initIdx={3}
//           length={32}
//           width={23}
//           loop={true}
//           setValue={formateDate}
//           perspective='left'
//         />
//       </div>
//       <div style={{ width: 70, height: 180 }}>
//         <Wheel
//           initIdx={3}
//           length={13}
//           width={23}
//           loop={true}
//           perspective='left'
//         />
//       </div>
//       <div style={{ width: 70, height: 180 }}>
//         <Wheel
//           initIdx={3}
//           length={60}
//           width={23}
//           loop={true}
//           perspective='left'
//         />
//       </div>
//     </div>
//   );
// };

// export default Well;
