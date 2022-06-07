import './App.css';
import Home from "./pages/home/Home";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import {productInputs, userInputs} from "./formSource";
import './style/dark.scss'
import {useSelector} from 'react-redux'

function App() {
    const darkMode = useSelector( state => state.darkMode.darkMode )

  return (
    <div className={`app ${darkMode&&'dark'}`}>
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/users' element={<List />} />
                <Route path='/login' element={<Login />} />
                <Route path='/users/new' element={<New inputs={userInputs} title='Add New User' />} />
                <Route path='/users/:userId' element={<Single />} />

                <Route path='products' element={<List />} />
                <Route path='products/:productId' element={<Single />} />
                <Route path='products/new' element={<New inputs={productInputs} title='Add New Product' />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
