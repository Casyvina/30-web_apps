import React from 'react'

const FormGroup = ({ labelText, inputType, placeholder, values, onInput, onKeyUp, onChange, className, readOnly, reference }) => {
    return (
        <div className="form-group">
            <label htmlFor="" className="">
                {labelText}
            </label>
            <input type={inputType} className={className} placeholder={placeholder} value={values} onInput={onInput} onKeyUp={onKeyUp} onChange={onChange} readOnly={readOnly} ref={reference} />
        </div>
    )
}

export default FormGroup