/* eslint-disable no-debugger */
import Button from 'modules/common/components/Button/Button';
import CheckBox from 'modules/common/components/CheckBox/CheckBox';
import Input from 'modules/common/components/Input/Input';
import { useUserData } from 'hooks/useUserData/useUserData';
import { IRelative } from 'types/UserData.types';
import React, { FormEvent, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

interface RelativeFormProps {
    relativeInfo?: IRelative;
    cleanRelativeData: () => void;
    closeModal: () => void;
}

// TODO: Quiza estaria mejor en un archivo de tipos
export interface IRelativeForm {
    name: string;
    child: boolean;
    vegetarian: boolean;
    vegan: boolean;
    allergies: string;
}

const defaultFormData: IRelativeForm = {
    name: '',
    child: false,
    vegetarian: false,
    vegan: false,
    allergies: '',
};

function RelativeForm({
    relativeInfo,
    closeModal,
    cleanRelativeData,
}: RelativeFormProps): JSX.Element {
    const [showAllergies, setShowAllergies] = useState<boolean>(false);
    const [username, setUserName] = useState<string>();
    const [relativeFormData, setRelativeFormData] =
        useState<IRelativeForm>(defaultFormData);

    const { addNewRelative, editRelative } = useUserData();

    useEffect(() => {
        if (relativeInfo) {
            setUserName(relativeInfo.username);
            const { name, child, vegetarian, vegan, allergies } = relativeInfo;
            setShowAllergies(!!allergies);
            setRelativeFormData({ name, child, vegetarian, vegan, allergies });
        }

        // TODO: Añadir error si no encuentra usuario

        return () => cleanRelativeData();
    }, []);

    const handleInputChange = (name: string, value: string | boolean): void => {
        setRelativeFormData((prev: IRelativeForm) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (event: FormEvent): Promise<void> => {
        event.preventDefault();

        if (username) {
            await toast.promise(
                editRelative({
                    ...relativeFormData,
                    username,
                }),
                {
                    loading: 'Editando datos...',
                    success: <b>Acompañante editado</b>,
                    error: <b>No se ha podido editar</b>,
                }
            );
        } else {
            await toast.promise(addNewRelative(relativeFormData), {
                loading: 'Creando nuevo invitado...',
                success: <b>Nuevo acompañante añadido</b>,
                error: <b>No se ha podido crear</b>,
            });
        }

        closeModal();
    };

    return (
        <>
            <h2 className="secondary-title">
                {username ? 'Editar datos' : 'Añadir persona'}
            </h2>
            <form onSubmit={handleSubmit}>
                <Input
                    name="name"
                    labelText="Nombre"
                    value={relativeFormData.name}
                    onChangeEvent={handleInputChange}
                    pattern="[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*"
                    errorMessage="Revisa el nobre introducido"
                    required
                />
                <CheckBox
                    name="child"
                    isChecked={relativeFormData.child}
                    label="¿Es niñ@?"
                    onChangeEvent={handleInputChange}
                />
                <CheckBox
                    name="vegetarian"
                    isChecked={relativeFormData.vegetarian}
                    label="¿Vegetariano?"
                    onChangeEvent={handleInputChange}
                />
                <CheckBox
                    name="vegan"
                    isChecked={relativeFormData.vegan}
                    label="¿Vegano?"
                    onChangeEvent={handleInputChange}
                />
                <CheckBox
                    name="isAllergic"
                    isChecked={showAllergies}
                    label="¿Alguna alergia?"
                    onChangeEvent={(_, checked) => setShowAllergies(checked)}
                />
                {showAllergies && (
                    <Input
                        name="allergies"
                        labelText="Introduce las alergias"
                        value={relativeFormData.allergies}
                        onChangeEvent={handleInputChange}
                        required={showAllergies}
                        pattern="[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*"
                        errorMessage="Este campo no acepta caracteres raros"
                    />
                )}

                <Button text="Enviar" btnStyle="secondary" type="submit" />
            </form>
        </>
    );
}

export default RelativeForm;
