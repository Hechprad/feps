import React from 'react';
/**mapeando e trocando as rotas */
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/**importando as páginas */
import Main from './Pages/Main.js';
import BookView from './Pages/BookView.js';
import BookNew from './Pages/BookNew.js';

function App() {
  return (
    <Router>
      <Switch>
        {/**exact */}
        <Route path='/' exact component={Main} />
        <Route path='/book/new' component={BookNew} />
        <Route path='/book/:id' component={BookView} />
      </Switch>
    </Router>
  );
}

export default App;
