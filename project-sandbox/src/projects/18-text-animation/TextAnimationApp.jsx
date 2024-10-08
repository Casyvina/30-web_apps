import React, { useState, useRef, useEffect } from 'react'
import Button from '../components/Button'
import FormGroup from '../components/FormGroup'
import AnimatedText from "react-animated-text-content"

const TextAnimationApp = () => {
    const [inputValue, setInputValue] = useState('')
    const [animatedText, setAnimatedText] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleClear = () => {
        setAnimatedText(inputValue);
        setInputValue(() => '');
    }

    let inputText = useRef(null)

    useEffect(() => {
        inputText.current.focus()
    });

    return (
        <div className='conatainer text-center'>
            <form action="" className="container d-flex mt-4" onSubmit={(e) => e.preventDefault(e)}>
                <FormGroup labelText={"Type in your text to be animated"} inputType={"text"} placeholder={'Your text'} values={inputValue} onChange={handleInputChange} reference={inputText} />
                <Button text='clear' btnClass={"btn-large btn-danger"} onClick={handleClear} />
            </form>
            {animatedText && <AnimatedText
                className='title'
                type="char"
                interval={.04}
                duration={1.1}
                animation={{
                    // x: "-150px",
                    y: "-250px",
                    ease: "easeIn",
                }}
            >
                {animatedText}
            </AnimatedText>}
        </div>
    )
}

export default TextAnimationApp