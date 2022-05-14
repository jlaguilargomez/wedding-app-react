import React from 'react';

interface TextAreaProps {
    label: string;
    content?: string;
    onTextAreaChange: (text: string) => void;
}

function TextArea({
    label,
    content,
    onTextAreaChange,
}: TextAreaProps): JSX.Element {
    return (
        <label htmlFor="additionalInfo">
            {label}
            <textarea
                id="additionalInfo"
                value={content}
                onChange={(e) => onTextAreaChange(e.target.value)}
            />
        </label>
    );
}

export default TextArea;
