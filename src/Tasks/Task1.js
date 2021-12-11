import React from 'react'
import Question from '../Components/Question'
import { Container, Button } from '@mui/material'
import './index.css';

export const Task1 = ({ data }) => {
    const [show, setShow] = React.useState(1)
    const [answers, setAnswers] = React.useState({})
    const [result, setResult] = React.useState(false)

    const onCheck = (index, value) => {
        if (show < index + 2) setShow(index + 2)
        const answ = { ...answers }
        answ[index] = value
        setAnswers(answ)
    }

    const save = () => {
        let res = 0
        Object.entries(answers).map(([key, value]) => {
            !!(data[key].answer === value) && res++
        })
        setResult(res)
    }

    return (
        <div style={{ marginTop: 20 }} >
            <Container maxWidth="sm">
                {
                    data.slice(0, show).map((i, index) => (
                        <Question key={index} {...i} onCheck={(val) => onCheck(index, val)} />
                    ))
                }
                {
                    !!(show === 11) && <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 80 }}>
                        <Button onClick={save} variant="contained">Результат</Button>
                    </div>
                }
                {!!result && <h4>Вы набрали {result}/{data.length} баллов</h4>}
            </Container>
        </div >
    )

}

export default Task1