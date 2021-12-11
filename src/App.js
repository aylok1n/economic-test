import { Container, Tab, Tabs } from '@mui/material'
import React from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Task1 from './Tasks/Task1'
import './index.css';

function App() {
    const location = useLocation();

    return (
        <>
            <div style={{ backgroundColor: '#FFF', width: '100vw' }}>
                <Tabs variant="scrollable" scrollButtons="auto" value={location.pathname}>
                    <Tab label='Основные фонды предприятия' component={Link} to={`/economic-test/Task1`} value={`/economic-test/Task1`} />
                    <Tab label='Производственная мощность предприятия' component={Link} to={`/economic-test/Task2`} value={`/economic-test/Task2`} />
                    <Tab label='Инвестиции и инвестиционная деятельность предприятия' component={Link} to={`/economic-test/Task3`} value={`/economic-test/Task3`} />
                </Tabs>
            </div>
            <Container maxWidth="sm">
                <div>
                    <h6>inst: <a href='https://www.instagram.com/aylok1n/' >aylok1n</a></h6>
                    <Routes>
                        <Route index path={`/economic-test/Task1`} element={<Task1 data={require('./data/task1.json')} />} />
                        <Route path={`/economic-test/Task2`} element={<Task1 data={require('./data/task2.json')} />} />
                        <Route path={`/economic-test/Task3`} element={<Task1 data={require('./data/task3.json')} />} />
                    </Routes>
                </div>
            </Container>
        </>
    );
}

export default App;