import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from "styled-components";
import GlobalStyles from './GlobalStyles';

import Sidebar from './Sidebar';
import HomeFeed from './HomeFeed';
import Notifications from './Notifications';
import Bookmarks from './Bookmarks';
import TweetDetails from './TweetDetails';
import Profile from './Profile';
import Spinner from './Spinner';
import { CurrentUserContext } from './CurrentUserContext';
import { COLORS } from "../constants";

const { borderColor } = COLORS;

function App() {
  const { status } = useContext(CurrentUserContext);

  return (
    <Main>
      <Router>
        <GlobalStyles />
        {status === 'idle' ? (
          <>
            <Sidebar />
            <PageContent>
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
            </PageContent>
          </>
      ) : (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      )
        }
      </Router>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  margin-left: 5vw;
`;

const PageContent = styled.div`
  margin-left: 18vw;
  padding-left: 30px;
  padding-right: 50px;
  border-left: 1px solid ${borderColor};
  border-right: 1px solid ${borderColor};
  min-height: 100vh;
  height: 100%;
  width: 52vw;
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 200px;
  margin-top: 40px;
`;

export default App;
