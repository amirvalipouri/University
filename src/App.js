
import React from 'react'
import { useRoutes } from 'react-router-dom'

import routes from './routes/routes';

function App() {

  const element = useRoutes(routes(true , "teacher"))
  return (
    <React.Fragment>
      {element}
    </React.Fragment>
  );
}

export default App;
