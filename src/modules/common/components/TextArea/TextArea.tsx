import React from 'react';

interface TextAreaProps {
    label: string;
}

function TextArea({ label }: TextAreaProps): JSX.Element {
    return (
        <label htmlFor="additionalInfo">
            <input id="additionalInfo" type="textarea" />
            {label}
        </label>
    );
}

export default TextArea;
