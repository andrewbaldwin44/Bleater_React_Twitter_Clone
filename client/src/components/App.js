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
  margin: 50px 200px;
`;

const PageContent = styled.div`
  margin-left: 200px;
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 200px;
`;

export default App;
