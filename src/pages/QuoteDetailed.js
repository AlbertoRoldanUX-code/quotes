import { Route, useParams } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Alberto', text: 'Quote 1' },
  { id: 'q2', author: 'Margaret', text: 'Quote 2' },
  { id: 'q3', author: 'Johnny', text: 'Quote 3' },
  { id: 'q4', author: 'Daisy', text: 'Quote 4' },
];
function QuoteDetailed() {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  return (
    <div>
      <h1>Quote Detail Page</h1>
      <HighlightedQuote quote={quote} text={quote.text} author={quote.author} />
      <Route path='/quotes/:quoteId/comments'>
        <Comments />
      </Route>
    </div>
  );
}

export default QuoteDetailed;
