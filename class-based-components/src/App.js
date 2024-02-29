import { Component } from 'react';
import FindUsers from './components/FindUsers';

import UsersContext from './components/UsersContext';
const DUMMY_USERS = [
  { id: "1u", name: "Max" },
  { id: "u2", name: "Manual" },
  { id: "u3", name: "Julie" },
];

class App extends Component {
    constructor() {
        super();
        this.state = {
          title: "Class Based Props",
        };
    }
    render() {
        const usersContext = {
            users: DUMMY_USERS
        }
        return (
          <UsersContext.Provider value={usersContext}>
            <div>
              <FindUsers />
            </div>
          </UsersContext.Provider>
        );
    };
}

export default App;