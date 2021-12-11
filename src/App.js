import { Container, Tab, Tabs } from '@mui/material'
import React from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Task1 from './Tasks/Task1'

function App() {
  const location = useLocation();

  return (
    <Container maxWidth="sm">
      <Tabs variant="scrollable" scrollButtons="auto" value={location.pathname}>
        <Tab label='Основные фонды предприятия' component={Link} to={`/Task1`} value={`/Task1`} />
        <Tab label='Еще тест' component={Link} to={`/Task2`} value={`/Task2`} />
      </Tabs>
      <div >
        <Routes>
          <Route path={`/Task1`} element={<Task1 />} />
          <Route path={`/Task2`}>
            {/* <UserEventsDataTable /> */}
          </Route>
        </Routes>
      </div>
    </Container>
  );
}

export default App;