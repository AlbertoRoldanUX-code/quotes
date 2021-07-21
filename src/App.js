import AllQuotes from './pages/AllQuotes';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Route path='/all-quotes'>
        <AllQuotes />
      </Route>
    </div>
  );
}

export default App;

// 1º Add header that says Great Quotes, and nav with All Quotes and Add a Quote.
// 2º Add black box that says this is a test.
// 3º Add User Comments, Add a Comment, Test, hr, Another Test, hr.
// 4º When clicking on All Quotes, show loading spinner, show Sort Ascending button, hr and ul with li that says This is a test!, Test under it and a button on the right side that says View Fullscreen.
// 5º When clicking on Add a Quote, show form that has an Author and Text inputs. And Add Quote button.
// 6º When adding a quote, it shows loading spinner and it redirects you to All Quotes screen, where you have the ul of quotes.
// 7º When clicking on the View Fullscreen button, show loading spinner and show screen with quote in a black box and a link under it that says Load Comments.
// 8º When clicking on the Load Comments link, it shows User Comments, Add a Comment button below it and No comments were added yet! below it.
// 9º When clicking on Add a Comment, a big input field shows and a centered label that says Your Comment over it.
// 10º When adding a comment, show loading spinner, and display under the Add a Comment button.
// 11º On the All Quotes page, when clicking on Sort Ascending, it sorts the array and the button changes to Sort Descending and viceversa.
//////////// 12º Create All Quotes page.
// 13º Create Quote Detailed page.
// 14º When clicking on a single quote, go to Quote Detailed page.
// 15º Create Add Quote page.
// 16º Write all the routing code the register the page components.
// 17º Make sure you can navigate between those pages by entering these paths manually in the url.
