import Button from 'modules/common/components/Button/Button';
import CheckBox from 'modules/common/components/CheckBox/CheckBox';
import Input from 'modules/common/components/Input/Input';
import { IRelative } from 'modules/common/types/UserData.types';
import React, { useState } from 'react';

interface RelativeFormProps {
    relativeInfo?: IRelative;
}

interface IRelativeForm {
    name: string;
    child: string;
    vegetarian: string;
    allergies: Array<string>;
}

function RelativeForm({ relativeInfo }: RelativeFormProps): JSX.Element {
    const [showAllergies, setShowAllergies] = useState<boolean>(true);
    const [relativeFormData, setRelativeFormData] = useState<IRelativeForm>();

    console.log(relativeInfo);
    return (
        <>
            <h2>Añadir invitado</h2>
            <form>
                <Input
                    name="name"
                    labelText="Nombre"
                    value="Pepe"
                    onChangeEvent={console.log}
                />
                <CheckBox
                    name="child"
                    isChecked={false}
                    label="¿Es infante?"
                    onChangeEvent={console.log}
                />
                <CheckBox
                    name="vegetarian"
                    isChecked={false}
                    label="¿Vegetariano?"
                    onChangeEvent={console.log}
                />
                <CheckBox
                    name="isAllergic"
                    isChecked={showAllergies}
                    label="Tienes alergias?"
                    onChangeEvent={(_, checked) => setShowAllergies(checked)}
                />
                {showAllergies && (
                    // TODO: quiza mejor un textarea aqui
                    <Input
                        name="alergies"
                        labelText="Introduce tus alergias"
                        value="Costillas, mierda"
                        onChangeEvent={console.log}
                    />
                )}

                <Button text="Enviar" btnStyle="secondary" type="submit" />
            </form>
        </>
    );
}

export default RelativeForm;
