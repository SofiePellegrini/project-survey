import React from 'react';

const FifthQuestion = ({ likeInput, onLikeInputChange, onStepChange }) => {
  return (
    <section className='questionWrapper'>
      <div className='question'>
        <form>
          <h2 tabindex='0'>
            And finally, how much do you like the Harry Potter books on a scale
            from 1-10?
          </h2>
          <input
            type='range'
            min='1'
            max='10'
            aria-orientation='horizontal'
            className='slider'
            id='myRange'
            defaultValue={likeInput}
            onChange={onLikeInputChange}
          />
        </form>

        <p>{likeInput}</p>
        <button
          className='btn'
          disabled={likeInput === '0'}
          onClick={onStepChange}
        >
          Show summary!
        </button>
      </div>
    </section>
  );
};

export default FifthQuestion;
