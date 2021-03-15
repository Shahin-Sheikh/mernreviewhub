import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Video from './video/Video';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
const HomePage = React.lazy(() => import('./components/HomePage'));
const SingleMoviePage = React.lazy(() => import('./components/singlePage'));
function App() {
  return (
    <Router>
      <Navbar />
      <React.Suspense fallback={'loading  .....'}>
        <Route path="/" exact component={HomePage} />
        <Route path="/" exact component={Video} />
        <Switch>
          <Route path="/movies/:id" component={SingleMoviePage} />
          <Route exact path={'/sign-in'} component={Login} />
          <Route exact path={'/sign-up'} component={Signup} />
        </Switch>
      </React.Suspense>
      <Footer />
    </Router>
  );
}

export default App;
