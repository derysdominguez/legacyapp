import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from '../views/auth/Login';
import Register from '../views/auth/Register';


function AppRouter() {
  return (
    <Router>
        <Routes>
            <Route path="/" exact element={<Login />} />
            <Route exact path="/" element={<Register />} />
            
        </Routes>
    </Router>
  )
}

export default AppRouter;
