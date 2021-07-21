import { Route, Switch, Redirect } from 'react-router-dom';
import AllQuotes from './pages/AllQuotes';
import QuoteDetailed from './pages/QuoteDetailed';
import AddQuote from './pages/AddQuote';
import Layout from './components/layout/Layout';

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
// 11º When clicking on the View Fullscreen button, load QuoteDetailed page, show loading spinner and show screen with quote in a black box and a link under it that says Load Comments.
// 12º Add black box that says this is a test.
// 13º On AllQuotes page, show loading spinner, Sort Ascending button and hr over the list of quotes.
// 14º When adding a quote, it shows loading spinner and it redirects you to All Quotes screen, where you have the ul of quotes.
// 15º When adding a comment, show loading spinner, and display under the Add a Comment button.
// 16º On the All Quotes page, when clicking on Sort Ascending, it sorts the array and the button changes to Sort Descending and viceversa.
// 17º When clicking on a single quote, go to Quote Detailed page.
