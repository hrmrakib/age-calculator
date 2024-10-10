const AgeStatus = ({ years, months, days }) => {
  return (
    <div className='my-5'>
      {/* New born baby */}
      {years === 0 && months <= 2 && (
        <div>
          <p className='relative text-[#f9f8fb] text-center -mt-5 text-3xl w-max mx-auto z-20'>
            New Born Baby
          </p>
          <img
            src='/new-born.png'
            className='w-52 h-52 mx-auto rounded-2xl -mt-3 z-10'
            alt='New born baby'
          />
        </div>
      )}

      {/* Baby */}
      {years === 0 && months > 2 && (
        <div>
          <p className='relative text-[#f9f8fb] text-center -mt-5 text-3xl w-max mx-auto z-20'>
            Baby
          </p>
          <img
            src='/baby.png'
            className='w-52 h-52 mx-auto rounded-2xl -mt-3 z-10'
            alt='Baby'
          />
        </div>
      )}

      {/* Toddler */}
      {years >= 1 && years <= 3 && (
        <div>
          <p className='relative text-[#f9f8fb] text-center -mt-5 text-3xl w-max mx-auto z-20'>
            Toddler
          </p>
          <img
            src='/toddler.png'
            className='w-52 h-52 mx-auto rounded-2xl -mt-3 z-10'
            alt='Toddler'
          />
        </div>
      )}

      {/* Kid / Child */}
      {years > 3 && years < 11 && (
        <div>
          <p className='relative text-[#f9f8fb] text-center -mt-5 text-3xl w-max mx-auto z-20'>
            Kid / Child
          </p>
          <img
            src='/kid-ai.png'
            className='w-52 h-52 mx-auto rounded-2xl -mt-3 z-10'
            alt='Kid / Child'
          />
        </div>
      )}

      {/* Teenage */}
      {years >= 11 && years <= 18 && (
        <div>
          <p className='relative text-[#f9f8fb] text-center -mt-5 text-3xl w-max mx-auto z-20'>
            Teenage
          </p>
          <img
            src='/teenage.png'
            className='w-52 h-52 mx-auto rounded-2xl -mt-3 z-10'
            alt='Teenager'
          />
        </div>
      )}

      {/* Young Adult */}
      {years >= 19 && years <= 25 && (
        <div>
          <p className='relative text-[#f9f8fb] text-center -mt-5 text-3xl w-max mx-auto z-20'>
            Young Star
          </p>
          <img
            src='/young.png'
            className='w-52 h-52 mx-auto rounded-2xl -mt-3 z-10'
            alt='Young Star'
          />
        </div>
      )}

      {/* Adult */}
      {years > 25 && years <= 65 && (
        <div>
          <p className='relative text-[#f9f8fb] text-center -mt-5 text-3xl w-max mx-auto z-20'>
            Adult
          </p>
          <img
            src='/adult.png'
            className='w-52 h-52 mx-auto rounded-2xl -mt-3 z-10'
            alt='Adult'
          />
        </div>
      )}

      {/* Senior Citizen */}
      {years > 65 && years < 125 && (
        <div>
          <p className='relative text-[#f9f8fb] text-center -mt-5 text-3xl w-max mx-auto z-20'>
            মুরুব্বি মুরুব্বি উহু ...
          </p>
          <img
            src='/murrubi.png'
            className='w-52 h-52 mx-auto rounded-2xl -mt-3 z-10'
            alt='Senior Citizen'
          />
        </div>
      )}
    </div>
  );
};

export default AgeStatus;
