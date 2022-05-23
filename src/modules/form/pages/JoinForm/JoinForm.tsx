import React, { useState } from 'react';

import toast from 'react-hot-toast';

import styles from 'styles/pages/JoinForm.module.scss';
import { useUserData } from 'hooks/useUserData/useUserData';
import Loader from 'modules/common/components/Loader/Loader';
import Modal from 'modules/common/containers/Modal/Modal';

import CheckBox from 'modules/common/components/CheckBox/CheckBox';
import RelativeForm from 'modules/form/containers/RelativeForm/RelativeForm';
import RelativesPanel from 'modules/form/components/RelativesPanel/RelativesPanel';
import { IRelative } from 'types/UserData.types';
import handleToast from 'utils/handleToast';
import TextArea from 'modules/common/components/TextArea/TextArea';

function JoinForm(): JSX.Element {
    const { userData, loadingUser, updateTravelData, removeRelative } =
        useUserData();

    // TODO: Tipa esto
    const [relativeToEdit, setRelativeToEdit] = useState<
        IRelative | undefined
    >();
    const [showUserModal, setShowUserModal] = useState<boolean>(false);

    const toggleUserModal = (): void => setShowUserModal((prev) => !prev);

    const updateUserData = async (
        param: string,
        newData: boolean
    ): Promise<void> => {
        await handleToast(updateTravelData(param, newData), {
            loading: 'Actualizando...',
            success: <b>Datos actualizados</b>,
            error: <b>No se han podido actualizar los datos</b>,
        });
    };

    if (loadingUser) {
        return <Loader show />;
    }

    if (!userData) {
        return <h2>¡No hay datos de usuario!</h2>;
    }

    return (
        <>
            <p className={styles['join-form__text']}>
                Esto es un simple formulario para que introduzcas los datos de
                los que vais a venir a la boda.
            </p>
            <p className={styles['join-form__text']}>
                Por favor, añade los datos de tantos como seais incluyéndote a
                ti mismo.
            </p>
            <p className={styles['join-form__text']}>¡Gracias!</p>
            <RelativesPanel
                relatives={userData.relatives}
                onEditUser={(username: string) => {
                    const relativeSelected = userData.relatives.filter(
                        (rel) => rel.username === username
                    )[0];
                    setRelativeToEdit(relativeSelected);

                    toggleUserModal();
                }}
                onRemoveUser={removeRelative}
                onAddNewUser={toggleUserModal}
            />
            <form className={styles['join-form__family-info']}>
                <p>¿Necesitarías autobús?</p>
                <CheckBox
                    name="onArrive"
                    isChecked={userData.byBus ? userData.byBus.onArrive : false}
                    label="Bus a la ida"
                    onChangeEvent={updateUserData}
                />
                <CheckBox
                    name="onOutward"
                    isChecked={
                        userData.byBus ? userData.byBus.onOutward : false
                    }
                    label="Bus a la vuelta"
                    onChangeEvent={updateUserData}
                />

                <p>¿Necesitarías autobús?</p>
                {/* TODO: Dale formato a esto y muestralo */}
                <TextArea
                    label="Texto"
                    content={userData.aditionalInfo}
                    onTextAreaChange={console.log}
                />
            </form>
            {showUserModal && (
                <Modal onClickClose={toggleUserModal}>
                    <RelativeForm
                        closeModal={toggleUserModal}
                        relativeInfo={relativeToEdit}
                        cleanRelativeData={() => setRelativeToEdit(undefined)}
                    />
                </Modal>
            )}
        </>
    );
}

export default JoinForm;
