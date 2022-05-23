import React from 'react';

import styles from 'styles/components/TextArea.module.scss';

interface TextAreaProps {
    name: string;
    value: string;
    labelText?: string;
    onTextAreaChange: (text: string) => void;
}

function TextArea({
    name,
    value,
    labelText,
    onTextAreaChange,
}: TextAreaProps): JSX.Element {
    return (
        <div className={styles['text-area__container']}>
            {labelText ?? <label htmlFor={name}>{labelText}</label>}
            <textarea
                id={name}
                value={value}
                className={styles['text-area']}
                onChange={(e) => onTextAreaChange(e.target.value)}
            />
        </div>
    );
}

export default TextArea;
