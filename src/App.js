import { unstable_HistoryRouter as HistoryRouter, Routes , Route  } from 'react-router-dom'
import { history } from './utils'

import Login from './pages/Login';
import Layout from './pages/Layout';
import { AuthComponent } from './components/AuthComponent'
import './App.css'
import Publish from './pages/Publish';
import Article from './pages/Article';
import Home from './pages/Home';

function App() {
  return (
    //路由配置
    <HistoryRouter history={history}>
      <div className="App">
        <Routes>
          {/* 创建路由path和组件对应关系 */}
          {/* Layout需要鉴权处理的 */}
          {/* 这里的Layout不一定不能写死 要根据是否登录进行判断 */}
          <Route path='/' element={
            <AuthComponent>
              <Layout />
            </AuthComponent>
          }>
            {/* index表示默认选项路由 */}
            <Route index element={< Home/>}></Route>
            <Route path='Article' element={< Article/>}></Route>
            <Route path='Publish' element={< Publish/>}></Route>
          </Route>
          <Route path='/Login' element={<Login />}></Route>
        </Routes>
      </div>
    </HistoryRouter>
  );
}

export default App;
