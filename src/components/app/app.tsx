import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoutes } from '../../const';
import '../../App.scss'
import Main from '../main/main';
import Detail from '../detail/detail';
import NewUser from '../new-user/new-user';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.Main} element={
          <Main />
        } />
        <Route path={`${AppRoutes.Detail}/:id`} 
          element={
            <Detail />
          }
        />
        <Route path={AppRoutes.NewUser} element={
          <NewUser />
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
