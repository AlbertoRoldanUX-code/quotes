import { useEffect } from 'react';
import QuoteForm from '../components/quotes/QuoteForm';
import { useHistory } from 'react-router-dom';
import { addQuote } from '../lib/api';
import useHttp from '../hooks/use-http';

function AddQuote() {
  const { sendRequest, status } = useHttp(addQuote);

  const history = useHistory();

  function addQuoteHandler(quoteData) {
    sendRequest(quoteData);
  }

  useEffect(() => {
    if (status === 'completed') {
      history.push('/quotes');
    }
  }, [status, history]);

  return (
    <div>
      <QuoteForm
        isLoading={status === 'pending'}
        onAddQuote={addQuoteHandler}
      />
    </div>
  );
}

export default AddQuote;
