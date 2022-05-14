/* eslint-disable no-debugger */
import Button from 'modules/common/components/Button/Button';
import CheckBox from 'modules/common/components/CheckBox/CheckBox';
import Input from 'modules/common/components/Input/Input';
import { useUserData } from 'modules/common/hooks/useUserData/useUserData';
import { IRelative } from 'modules/common/types/UserData.types';
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
    allergies: string;
}

const defaultFormData: IRelativeForm = {
    name: '',
    child: false,
    vegetarian: false,
    allergies: '',
};

function RelativeForm({
    relativeInfo,
    closeModal,
    cleanRelativeData,
}: RelativeFormProps): JSX.Element {
    const [showAllergies, setShowAllergies] = useState<boolean>(true);
    const [username, setUserName] = useState<string>();
    const [relativeFormData, setRelativeFormData] =
        useState<IRelativeForm>(defaultFormData);

    const { addNewRelative, editRelative } = useUserData();

    useEffect(() => {
        if (relativeInfo) {
            setUserName(relativeInfo.username);
            const { name, child, vegetarian, allergies } = relativeInfo;
            setShowAllergies(!!allergies);
            setRelativeFormData({ name, child, vegetarian, allergies });
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
                    loading: 'Editando invitado...',
                    success: <b>Acompañante editado</b>,
                    error: <b>No se ha podido crear</b>,
                }
            );
        } else {
            // TODO: Seria bueno crear un componente que se encargara de esto
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
            <h2>Añadir invitado</h2>
            <form onSubmit={handleSubmit}>
                <Input
                    name="name"
                    labelText="Nombre"
                    value={relativeFormData.name}
                    onChangeEvent={handleInputChange}
                    required
                />
                <CheckBox
                    name="child"
                    isChecked={relativeFormData.child}
                    label="¿Es infante?"
                    onChangeEvent={handleInputChange}
                />
                <CheckBox
                    name="vegetarian"
                    isChecked={relativeFormData.vegetarian}
                    label="¿Vegetariano?"
                    onChangeEvent={handleInputChange}
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
                        name="allergies"
                        labelText="Introduce tus alergias"
                        value={relativeFormData.allergies}
                        onChangeEvent={handleInputChange}
                        required={showAllergies}
                    />
                )}

                <Button text="Enviar" btnStyle="secondary" type="submit" />
            </form>
        </>
    );
}

export default RelativeForm;
