import React from 'react';
import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Alberto', text: 'Quote 1' },
  { id: 'q2', author: 'Margaret', text: 'Quote 2' },
  { id: 'q3', author: 'Johnny', text: 'Quote 3' },
  { id: 'q4', author: 'Daisy', text: 'Quote 4' },
];

function AllQuotes() {
  return (
    <div>
      <QuoteList quotes={DUMMY_QUOTES} />
    </div>
  );
}

export default AllQuotes;
