import React from 'react';
import classes from './PositiveSentences.css';
import PositiveSentence from './PositiveSentence/PositiveSentence';

const positiveSentences = (props) => {
  const positiveSentences = props.positives.map((positiveSentences) => (
      <PositiveSentence positive={positiveSentences.positive}
                        name={positiveSentences.name}
                        key={positiveSentences.id}
      />
  ));

  return (
      <div className={classes.PositiveSentences}>
        {positiveSentences}
      </div>
  );
};

export default positiveSentences;