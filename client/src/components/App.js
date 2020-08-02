import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from "styled-components";
import GlobalStyles from './GlobalStyles';

import Sidebar from './Sidebar';
import Headbar from "./Headbar/Headbar";
import { HeadbarProvider } from "./Headbar/HeadbarContext";
import HomeFeed from './HomeFeed';
import Notifications from './Notifications';
import Bookmarks from './Bookmarks';
import TweetDetails from './TweetDetails';
import Profile from './Profile';
import Spinner from './Spinner';
import { CurrentUserContext } from './CurrentUserContext';
import { COLORS, PAGE_DIMENSIONS } from "../constants";

const { borderColor } = COLORS;
const { mainWidth } = PAGE_DIMENSIONS;

function App() {
  const { status } = useContext(CurrentUserContext);

  return (
    <Main>
      <Router>
        <GlobalStyles />
        {status === 'idle' ? (
          <>
            <Sidebar />
            <HeadbarProvider>
              <PageContainer>
                <Headbar />
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
              </PageContainer>
              </HeadbarProvider>
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

const PageContainer = styled.div`
  margin-left: 18vw;
  border-left: 1px solid ${borderColor};
  border-right: 1px solid ${borderColor};
  min-height: 100vh;
  height: 100%;
  width: ${mainWidth};
`;

const PageContent = styled.div`
  margin-top: 80px;
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 200px;
  margin-top: 40px;
`;

export default App;
