import React from 'react'
import Question from '../Components/Question'
import { Container } from '@mui/material'

const data = require('../data/task1.json')

export const Task1 = (props) => {
    const [show, setShow] = React.useState(1)
    const [answers, setAnswers] = React.useState({})

    const onCheck = (index, value) => {
        if (show < index + 2) setShow(index + 2)
        const answ = { ...answers }
        answ[index] = value
        setAnswers(answ)
    }

    return (
        <div style={{ marginTop: 20 }}>
            <Container maxWidth="sm">
                {
                    data.slice(0, show).map((i, index) => (
                        <Question key={index} {...i} onCheck={(val) => onCheck(index, val)} />
                    ))
                }
            </Container>
        </div>
    )

}

export default Task1