import './css/App.css';
import Header from './Components/Header/Header';
import { Main } from './Components/Main/Main';
import { Book } from './Components/Book/Book';
import { Author } from './Components/Author/Author';
import { Contact } from './Components/Contact/Contact';

function App() {
  return (
    <div id="main-container">
      <Header/>
      <Main/>
      <Book />
      <Author />
      <Contact />
    </div>
  );
}

export default App;
