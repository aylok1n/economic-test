import { Container, Tab, Tabs } from '@mui/material'
import React from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Task1 from './Tasks/Task1'
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#FFF',
        },
    },
});


function App() {
    const location = useLocation();

    return (
        <>
            <div style={{ backgroundColor: '#FFF', width: '100vw' }}>
                <Tabs variant="scrollable" scrollButtons="auto" value={location.pathname}>
                    <Tab label='Основные фонды предприятия' component={Link} to={`/Task1`} value={`/Task1`} />
                    <Tab label='Еще тест' component={Link} to={`/Task2`} value={`/Task2`} />
                </Tabs>
            </div>
            <Container maxWidth="sm">
                <div>
                    <Routes>
                        <Route index path={`/Task1`} element={<Task1 />} />
                        <Route path={`/Task2`}>
                            {/* <UserEventsDataTable /> */}
                        </Route>
                        
                    </Routes>
                </div>
            </Container>
        </>
    );
}

export default App;