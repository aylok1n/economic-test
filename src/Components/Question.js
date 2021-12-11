import React from 'react'
import { FormControl, FormLabel, Radio, RadioGroup, FormControlLabel } from '@mui/material'

export const Question = ({ question, answer, options, onCheck }) => {

    return (
        <div className='question'>
            <FormControl component="fieldset">
                <FormLabel component="legend">{question}</FormLabel>
                <RadioGroup
                    name="radio-buttons-group"
                >
                    {options.map((i, index) => (
                        // <p key={index} ><input name="ans" value={index} type='radio' onChange={(e) => handleCheck(e, index)} />{i}</p>
                        <FormControlLabel key={index} value={index} control={<Radio />} label={i} onChange={() => onCheck(index)} />
                    ))}
                </RadioGroup>
            </FormControl>
        </div>
    )

}

export default Question