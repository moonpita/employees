import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoutes } from '../../const';
import '../../App.scss'
import Main from '../main/main';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.Main} element={
          <Main />
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
