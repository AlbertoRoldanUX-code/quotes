import { useParams } from 'react-router-dom';

function QuoteDetailed() {
  const params = useParams();

  return (
    <div>
      <h1>Quote Detailed of {params.quoteId}</h1>
    </div>
  );
}

export default QuoteDetailed;
