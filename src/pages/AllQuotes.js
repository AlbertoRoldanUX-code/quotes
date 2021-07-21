import React from 'react';
import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  { id: 'p1', author: 'Alberto', text: 'Quote 1' },
  { id: 'p2', author: 'Margaret', text: 'Quote 2' },
  { id: 'p3', author: 'Johnny', text: 'Quote 3' },
  { id: 'p4', author: 'Daisy', text: 'Quote 4' },
];

function AllQuotes() {
  return (
    <div>
      <QuoteList quotes={DUMMY_QUOTES} />
    </div>
  );
}

export default AllQuotes;
