import Navbar from './NavBar';
import Home from './Home';
import CourseDetails from './CourseDetails';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Footer from './Footer';
import Quiz from './Quiz';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/courses/:slug" exact>
            <CourseDetails />
          </Route>
          <Route path="/quiz" exact>
            <Quiz />
          </Route>
          <Route path="*">
            <div className="not-found">
              <h1>404 - Not Found</h1>
            </div>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
