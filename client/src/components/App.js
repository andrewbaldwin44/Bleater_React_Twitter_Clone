import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from "styled-components";
import GlobalStyles from './GlobalStyles';

import Sidebar from './Sidebar';
import HomeFeed from './HomeFeed';
import Notifications from './Notifications';
import Bookmarks from './Bookmarks';
import TweetDetails from './TweetDetails';
import Profile from './Profile';

function App() {
  return (
    <Main>
      <Router>
        <GlobalStyles />
        <Sidebar />
        <Switch>
          <Route exact path='/' >
            <HomeFeed />
          </Route>
          <Route exact path='/notifications' >
            <Notifications />
          </Route>
          <Route exact path='/bookmarks' >
            <Bookmarks />
          </Route>
          <Route exact path='/tweet/:tweetID' >
            <TweetDetails />
          </Route>
          <Route exact path='/users/:profileID' >
            <Profile />
          </Route>
        </Switch>
      </Router>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  width: 80%;
  margin: 50px auto;
`;

export default App;
