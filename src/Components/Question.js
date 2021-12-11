import React from 'react'

export const Question = ({ question, answer, options, onCheck }) => {
    const [checked, setChecked] = React.useState(false)

    const handleCheck = (e, index) => {
        if (answer === index) alert('заебись')
        if (checked) onCheck()
    }

    React.useEffect(() => {
        setChecked(true)
    }, [])

    return (
        <div>
            <form >
                <p><b>{question}</b></p>
                {options.map((i, index) => (
                    <p key={index} ><input name="ans" value={index} type='radio' onChange={(e) => handleCheck(e, index)} />{i}</p>
                ))}
            </form>
        </div>
    )

}

export default Question