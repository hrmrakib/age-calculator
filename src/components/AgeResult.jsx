const AgeResult = ({ years, months, days }) => {
  return (
    <div>
      <h2 className='text-center text-3xl text-white pt-2'>Age Calculator</h2>
      <p className='text-center text-white my-5'>
        <span className='text-2xl font-bold'>You are {years || 0} years,</span>{" "}
        <br />{" "}
        <span className='text-xl font-semibold pl-1'>
          {months || 0} months,
        </span>{" "}
        <br />{" "}
        <span className='text-lg font-medium pl-2'>{days || 0} days old.</span>
      </p>
    </div>
  );
};

export default AgeResult;
