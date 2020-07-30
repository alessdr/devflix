import React from 'react';

function FormTextArea(props) {
    return (
        <div>
            <label>
                { props.label }:
                <textarea name={props.name} value={props.value} onChange={props.onChange}/>
            </label>
        </div>
    )
}

export default FormTextArea;