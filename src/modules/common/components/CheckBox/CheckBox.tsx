import React from 'react';

import cn from 'classnames';

interface CheckboxProps {
    name: string;
    isChecked: boolean;
    label: string;
    onChangeEvent: (name: string, checked: boolean) => void;
}

function CheckBox({
    name,
    isChecked,
    label,
    onChangeEvent,
}: CheckboxProps): JSX.Element {
    return (
        <label className={cn('custom-checkbox')} htmlFor={name}>
            <input
                id={name}
                name={name}
                type="checkbox"
                checked={isChecked}
                onChange={(e: any) =>
                    onChangeEvent(e.target.name, e.target.checked)
                }
            />
            <span className="checkmark" />
            {label}
        </label>
    );
}

export default CheckBox;
