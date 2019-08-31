import React from 'react';
/**mapeando e trocando as rotas */
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/**importando as páginas */
import Main from './Pages/Main';
import BookView from './Pages/BookView';
import BookNew from './Pages/BookView';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Main} />
        <Route path='/book/new' component={BookNew} />
        <Route path='/book/:id' component={BookView} />
      </Switch>
    </Router>
  );
}

export default App;
