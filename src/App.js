import { Route, Switch, Redirect } from 'react-router-dom';
import AllQuotes from './pages/AllQuotes';
import QuoteDetailed from './pages/QuoteDetailed';
import AddQuote from './pages/AddQuote';

function App() {
  return (
    <Switch>
      <Route path='/'>
        <Redirect to='/all-quotes' />
      </Route>
      <Route path='/all-quotes' exact>
        <AllQuotes />
      </Route>
      <Route path='/quotes/:quoteId'>
        <QuoteDetailed />
      </Route>
      <Route path='/add-quote'>
        <AddQuote />
      </Route>
    </Switch>
  );
}

export default App;

//////////// 1º Create All Quotes page.
//////////// 2º Create Quote Detailed page.
//////////// 3º Create Add Quote page.
//////////// 4º Make sure you can navigate between those pages by entering these paths manually in the url.
// 5º Redirect from / to /quotes
// 6º Make sure that in the Quote Detailed component, extract the actual quote id and log it to the console.
// 7º Add header that says Great Quotes, and nav with All Quotes and Add a Quote.
// 8º Add black box that says this is a test.
// 9º Add User Comments, Add a Comment, Test, hr, Another Test, hr.
// 10º When clicking on All Quotes, show loading spinner, show Sort Ascending button, hr and ul with li that says This is a test!, Test under it and a button on the right side that says View Fullscreen.
// 11º When clicking on Add a Quote, show form that has an Author and Text inputs. And Add Quote button.
// 12º When adding a quote, it shows loading spinner and it redirects you to All Quotes screen, where you have the ul of quotes.
// 13º When clicking on the View Fullscreen button, show loading spinner and show screen with quote in a black box and a link under it that says Load Comments.
// 14º When clicking on the Load Comments link, it shows User Comments, Add a Comment button below it and No comments were added yet! below it.
// 15º When clicking on Add a Comment, a big input field shows and a centered label that says Your Comment over it.
// 16º When adding a comment, show loading spinner, and display under the Add a Comment button.
// 17º On the All Quotes page, when clicking on Sort Ascending, it sorts the array and the button changes to Sort Descending and viceversa.
// 18º When clicking on a single quote, go to Quote Detailed page.
// 19º Write all the routing code the register the page components.
