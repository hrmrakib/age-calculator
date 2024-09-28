import React, { useState, useEffect } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// const dates = Array.from({ length: 31 }, (_, i) => i + 1); // [1, 2, 3, ..., 30]

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const years = Array.from({ length: 101 }, (_, i) => 2024 - i); // [2024, 2023, ..., 1924]

const birthdate = "2024-9-1"; // YYYY-MM-DD

function AgeCalculator() {
  const [startDate, setStartDate] = useState(new Date());
  const [age, setAge] = useState({ years: 0, months: 0, days: 0 });

  useEffect(() => {
    calculateAge();
  }, []);

  const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setAge({ years, months, days });
  };

  return (
    <div>
      <h2>Age Calculator</h2>
      <div></div>
      <p>
        You are {age.years} years, {age.months} months, and {age.days} days old.
      </p>
    </div>
  );
}

export default AgeCalculator;
