import React from 'react'
import './index.css';
import { FormControl, Radio, RadioGroup, FormControlLabel } from '@mui/material'
import { blue, } from '@mui/material/colors';

export const Question = ({ question, answer, options, onCheck }) => {

    return (
        <div className='question'>
            <FormControl component="fieldset">
                <h1>{question}</h1>
                <RadioGroup
                    name="radio-buttons-group"
                >
                    {options.map((i, index) => (
                        <FormControlLabel
                            key={index}
                            value={index}
                            control={<Radio sx={{
                                color: blue[50],
                                '&.Mui-checked': {
                                    color: blue[200],
                                },
                            }} />}
                            label={<span className=''>{i}</span>}
                            onChange={() => onCheck(index)}
                        />
                    ))}
                </RadioGroup>
            </FormControl>
        </div>
    )

}

export default Question