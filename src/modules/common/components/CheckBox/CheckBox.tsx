import React from 'react';

import cn from 'classnames';

interface CheckboxProps {
    name: string;
    checked: boolean;
    label: string;
    onChangeEvent: () => void;
}

function CheckBox({
    name,
    checked,
    label,
    onChangeEvent,
}: CheckboxProps): JSX.Element {
    return (
        <label className={cn('custom-checkbox')} htmlFor={name}>
            <input
                id={name}
                name={name}
                type="checkbox"
                checked={checked}
                onChange={onChangeEvent}
            />
            <span className="checkmark" />
            {label}
        </label>
    );
}

export default CheckBox;
