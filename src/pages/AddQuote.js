import React from 'react';
import QuoteForm from '../components/quotes/QuoteForm';
import { useHistory } from 'react-router-dom';

function AddQuote() {
  const history = useHistory();
  function addQuoteHandler(quoteData) {
    history.push('/quotes');
  }
  return (
    <div>
      <QuoteForm onAddQuote={addQuoteHandler} />
    </div>
  );
}

export default AddQuote;
