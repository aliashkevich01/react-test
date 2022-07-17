import { Routes, Route, HashRouter } from 'react-router-dom';
import { AUTH_PATH, MAIN_PATH, USER_PATH } from './constants';
import Page404 from './pages/404/404';
import Auth from './pages/auth/Auth';
import Main from './pages/Main/Main';
import Personal from './pages/Personal/Personal';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path={MAIN_PATH} element={<Main />} />
          <Route path={AUTH_PATH} element={<Auth />} />
          <Route path={USER_PATH} element={<Personal />} />
          <Route path="/:nonfound" element={<Page404 />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
