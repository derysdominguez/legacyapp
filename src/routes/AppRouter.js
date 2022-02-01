import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from '../views/auth/Login';
import Register from '../views/auth/Register';
import Home from '../views/Home';
import NotFoundPage from '../views/NotFoundPage';
import Index from '../views/profile';
import PrivateRoute from './PrivateRoute';

function AppRouter() {
  return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" exact element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            
            <Route exact path="/" element={<PrivateRoute />}> 
              <Route exact path='/views/profile' element={<Index />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} /> 
        </Routes>
  )
}

export default AppRouter;
