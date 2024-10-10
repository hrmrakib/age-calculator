import React, { useState, useEffect } from "react";
import AgeStatus from "./AgeStatus";
import AgeResult from "./AgeResult";

function AgeCalculator() {
  const [day, setDay] = useState(0);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  const [age, setAge] = useState({ years: 0, months: 0, days: 0 });

  const birthdate = `${year}-${month}-${day}`; // YYYY-MM-DD

  useEffect(() => {
    setTimeout(() => {
      if (year && month && day) {
        calculateAge();
      }
      if (!year && !month && !day) {
        setAge({ years: 0, months: 0, days: 0 });
      }
    }, 999);
  }, [year, month, day]);

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
    <div className='flex flex-col justify-between'>
      <AgeResult years={age.years} months={age.months} days={age.days} />

      <AgeStatus years={age.years} months={age.months} days={age.days} />

      <form className='w-[70%] lg:w-60 mx-auto flex flex-col gap-5'>
        <input
          type='number'
          onChange={(e) => setDay(e.target.value)}
          className='shadow-sm bg-gray-50 outline-none border border-gray-300 text-black text-lg rounded-lg block w-full p-2.5'
          placeholder='Day'
        />
        <input
          type='number'
          onChange={(e) => setMonth(e.target.value)}
          className='shadow-sm bg-gray-50 outline-none border border-gray-300 text-black text-lg rounded-lg block w-full p-2.5'
          placeholder='Month'
        />
        <input
          type='number'
          onChange={(e) => setYear(e.target.value)}
          className='shadow-sm bg-gray-50 outline-none border border-gray-300 text-black text-lg rounded-lg block w-full p-2.5'
          placeholder='Year'
        />
      </form>
    </div>
  );
}

export default AgeCalculator;
