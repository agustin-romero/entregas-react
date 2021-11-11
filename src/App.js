import './App.css';
import SearchAreaClass from './SearchAreaClass';

import {data} from './data';

const App = () => {
  return (
    <>
      <header>
        <strong><em>React-Tube-App</em></strong>
      </header>
      <SearchAreaClass videos={data} />
    </>
  );
}

export default App;