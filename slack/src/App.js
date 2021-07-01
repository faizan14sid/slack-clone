import "./App.css";
import { Header } from "./Components/Header";
import { Sidebar } from "./Components/Sidebar";
import { Chat } from './Components/Chat';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
      <Header />
      <div className="app_body">
        <Sidebar />
        <Switch>
          <Route path='/channel/:channelId'>
          <Chat />
          </Route>
          <Route path='/'><h1>welcome on slack</h1></Route>
        </Switch>
      </div>
      </Router>
    </div>
  );
}

export default App;
