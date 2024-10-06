import './App.css';
import {Route,Routes} from "react-router-dom"
import Layout from './Layout.js';
import IndexPage from './pages/IndexPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import { UserContextProvider } from './UserContext.js';
import CreatePost from './pages/CreatePost.jsx';
import PostPage from './pages/PostPage.jsx';
import EditPost from './pages/EditPost.jsx';
import './index.js'
import Footer from './pages/Footer.jsx';


function App() {
  return (
    <UserContextProvider>      
    <Routes>
      <Route path='/' element={<Layout />}>
      <Route index element={<IndexPage />} />
      <Route path={'/login'} element={<LoginPage/>}/>
      <Route path={'/register'} element={<RegisterPage/>}/>
      <Route path={'/create'} element={<CreatePost/>}/>
      <Route path={'/post/:id'} element={<PostPage/>}/>
      <Route path={'/edit/:id'} element={<EditPost/>}/>
      </Route>
    </Routes>
    <Footer/>
    </UserContextProvider>


  );
}

export default App;
