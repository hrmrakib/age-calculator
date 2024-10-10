const AgeResult = ({ years, months, days }) => {
  return (
    <div>
      <h2 className='text-center text-3xl text-white pt-2 border-b border-gray-400 pb-1'>
        Age Calculator
      </h2>
      <div className='text-center text-white border-b border-gray-600 pb-3 my-5'>
        <p className='text-3xl font-bold'>
          You are
          <span className='px-3'>{years || 0}</span>
          years,
        </p>{" "}
        <p className='text-2xl font-semibold pl-1'>
          <span className='font-medium'>{months || 0}</span> months,
        </p>
        <p className='text-xl font-medium pl-2'>
          <span className='font-medium'>{days || 0}</span> days old.
        </p>
      </div>
    </div>
  );
};

export default AgeResult;
