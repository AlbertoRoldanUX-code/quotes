import React from 'react';
import QuoteForm from '../components/quotes/QuoteForm';

function AddQuote() {
  function addQuoteHandler(quoteData) {
    console.log(quoteData);
  }
  return (
    <div>
      <QuoteForm onAddQuote={addQuoteHandler} />
    </div>
  );
}

export default AddQuote;
