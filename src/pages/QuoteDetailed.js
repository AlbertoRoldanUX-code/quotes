import { Route, useParams } from 'react-router-dom';
import Comments from '../components/comments/Comments';

function QuoteDetailed() {
  const params = useParams();

  return (
    <div>
      <h1>Quote Detail Page</h1>
      <p>Quote Detailed of {params.quoteId}</p>
      <Route path='/quotes/:quoteId/comments'>
        <Comments />
      </Route>
    </div>
  );
}

export default QuoteDetailed;
