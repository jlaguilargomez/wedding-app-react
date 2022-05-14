import ActionButton from 'modules/common/components/ActionButton/ActionButton';
import NavButton from 'modules/common/components/NavButton/NavButton';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

import styles from 'styles/pages/JoinForm.module.scss';
import { useNavigate } from 'react-router-dom';
import { useUserData } from 'modules/common/hooks/useUserData/useUserData';
import Loader from 'modules/common/components/Loader/Loader';
import { IRelative } from 'modules/common/types/UserData.types';
import Modal from 'modules/common/containers/Modal/Modal';
import Input from 'modules/common/components/Input/Input';
import Button from 'modules/common/components/Button/Button';
import CheckBox from 'modules/common/components/CheckBox/CheckBox';
import TextArea from 'modules/common/components/TextArea/TextArea';

interface RepativesPanelProps {
    relatives: Array<IRelative>;
    onEditUser: (username: string) => void;
    onRemoveUser: (username: string) => void;
    onAddNewUser: () => void;
}

function RelativesPanel({
    relatives,
    onEditUser,
    onRemoveUser,
    onAddNewUser,
}: RepativesPanelProps): JSX.Element {
    if (!relatives?.length) {
        <h1>No hay datos de familiares</h1>;
    }
    return (
        <>
            <section className={styles['join-form__list']}>
                {relatives.map(({ name, username }) => (
                    <div className={styles['join-form__elem']} key={username}>
                        <p>{name}</p>
                        <div className="flex">
                            <ActionButton
                                icon="E"
                                onClickEvent={() => onEditUser(username)}
                            />{' '}
                            <ActionButton
                                icon="R"
                                onClickEvent={() => {
                                    onRemoveUser(username);
                                }}
                            />
                        </div>
                    </div>
                ))}
            </section>
            <div className={styles['join-form__elem']}>
                <p>Añadir invitado</p>
                <div className="flex">
                    <ActionButton icon="+" onClickEvent={onAddNewUser} />
                </div>
            </div>
        </>
    );
}

function UserDataForm(): JSX.Element {
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
                    name="go"
                    isChecked={false}
                    label="Ida"
                    onChangeEvent={console.log}
                />
                <Input
                    name="alergies"
                    labelText="Alergias"
                    value="Costillas, mierda"
                    onChangeEvent={console.log}
                />

                <Button text="Enviar" btnStyle="secondary" type="submit" />
            </form>
        </>
    );
}

function JoinForm(): JSX.Element {
    const navigate = useNavigate();
    const { userData, loadingUser, updateTravelData } = useUserData();
    const [showUserModal, setShowUserModal] = useState<boolean>(false);

    const toggleUserModal = (): void => setShowUserModal((prev) => !prev);

    const updateUserData = async (
        param: string,
        newData: boolean
    ): Promise<void> => {
        await toast.promise(updateTravelData(param, newData), {
            loading: 'Actualizando...',
            success: <b>Datos actualizados</b>,
            error: <b>No se han podido actualizar los datos</b>,
        });
    };

    if (loadingUser) {
        return <Loader show />;
    }

    if (!userData) {
        return <h1>No hay datos de usuario!</h1>;
    }

    return (
        <>
            <h1>Únete</h1>
            <RelativesPanel
                relatives={userData.relatives}
                onEditUser={console.log}
                onRemoveUser={console.log}
                onAddNewUser={toggleUserModal}
            />
            <form className={styles['join-form__family-info']}>
                <p>¿Necesitas bus?</p>
                <CheckBox
                    name="onArrive"
                    isChecked={userData.byBus.onArrive}
                    label="Ida"
                    onChangeEvent={updateUserData}
                />
                <CheckBox
                    name="onOutward"
                    isChecked={userData.byBus.onOutward}
                    label="Vuelta"
                    onChangeEvent={updateUserData}
                />

                <TextArea
                    label="Texto"
                    content={userData.aditionalInfo}
                    onTextAreaChange={console.log}
                />
            </form>
            {showUserModal && (
                <Modal onClickClose={toggleUserModal}>
                    <UserDataForm />
                </Modal>
            )}
            <NavButton position="back" onClickEvent={() => navigate('/main')} />
        </>
    );
}

export default JoinForm;
