const AgeStatus = ({ years, months, days }) => {
  return (
    <div className='my-3'>
      {years < 1 && months <= 2 && (
        <p className='text-white text-3xl'>New Born Baby</p>
      )}
      {/* <img src='/baby.avif' className='w-2/3 h-64 mx-auto' alt='' /> */}
    </div>
  );
};

export default AgeStatus;
