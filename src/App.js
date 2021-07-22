import { Route, Switch, Redirect } from 'react-router-dom';
import AllQuotes from './pages/AllQuotes';
import QuoteDetailed from './pages/QuoteDetailed';
import AddQuote from './pages/AddQuote';
import Layout from './components/layout/Layout';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/quotes' />
        </Route>
        <Route path='/quotes' exact>
          <AllQuotes />
        </Route>
        <Route path='/quotes/:quoteId'>
          <QuoteDetailed />
        </Route>
        <Route path='/add-quote'>
          <AddQuote />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

//////////// 1º Create All Quotes page.
//////////// 2º Create Quote Detailed page.
//////////// 3º Create Add Quote page.
//////////// 4º Make sure you can navigate between those pages by entering these paths manually in the url.
//////////// 5º Redirect from / to /quotes
//////////// 6º Make sure that in the Quote Detailed component, extract the actual quote id and log it to the console.
//////////// 7º Render the comments by using a nested route in the QuoteDetailed page, below the paragraph.
//////////// 8º Add header that says Great Quotes, and nav with All Quotes and Add a Quote.
//////////// 9º When clicking on Add a Quote, show form that has an Author and Text inputs. And Add Quote button.
//////////// 10º Add dummy data to display some quotes.
//////////// 11º When clicking on the View Fullscreen buttonshow loading spinner.
//////////// 12º Add black box that says this is a test.
//////////// 13º Use query parameters, to implement the sorting functionality on the All Quotes page.
// 14º When adding a comment, and display under the Add a Comment button.
// 15º In the QuoteDetailed page, show a link under the black box that says Load Comments.
// 16º Implement Loading Spinner when changing pages.
