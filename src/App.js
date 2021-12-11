import { Container, Tab, Tabs } from '@mui/material'
import React from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Task1 from './Tasks/Task1'

function App() {
    const location = useLocation();

    return (
        <>
            <div style={{ backgroundColor: '#FFF', width: '100vw' }}>
                <Tabs variant="scrollable" scrollButtons="auto" value={location.pathname}>
                    <Tab label='Основные фонды предприятия' component={Link} to={`/economic-test/Task1`} value={`/economic-test/Task1`} />
                    <Tab label='Еще тест' component={Link} to={`/economic-test/Task2`} value={`/economic-test/Task2`} />
                </Tabs>
            </div>
            <Container maxWidth="sm">
                <div>
                    <Routes>
                        <Route index path={`/economic-test/Task1`} element={<Task1 />} />
                        <Route path={`/economic-test/Task2`} element={<div>сука пусто</div>} />
                    </Routes>
                </div>
            </Container>
        </>
    );
}

export default App;