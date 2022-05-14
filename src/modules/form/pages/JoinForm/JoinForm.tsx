import React, { useState } from 'react';

import NavButton from 'modules/common/components/NavButton/NavButton';

import toast from 'react-hot-toast';

import styles from 'styles/pages/JoinForm.module.scss';
import { useNavigate } from 'react-router-dom';
import { useUserData } from 'modules/common/hooks/useUserData/useUserData';
import Loader from 'modules/common/components/Loader/Loader';
import Modal from 'modules/common/containers/Modal/Modal';

import CheckBox from 'modules/common/components/CheckBox/CheckBox';
import TextArea from 'modules/common/components/TextArea/TextArea';
import RelativeForm from 'modules/form/containers/RelativeForm/RelativeForm';
import RelativesPanel from 'modules/form/components/RelativesPanel/RelativesPanel';
import { IRelative } from 'modules/common/types/UserData.types';

function JoinForm(): JSX.Element {
    const { userData, loadingUser, updateTravelData, removeRelative } =
        useUserData();

    // TODO: Tipa esto
    const [relativeToEdit, setRelativeToEdit] = useState<
        IRelative | undefined
    >();
    const [showUserModal, setShowUserModal] = useState<boolean>(false);
    const navigate = useNavigate();

    const toggleUserModal = (): void => setShowUserModal((prev) => !prev);

    const updateUserData = async (
        param: string,
        newData: boolean
    ): Promise<void> => {
        // TODO: Seria bueno crear un componente que se encargara de esto
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

                {/* TODO: Dale formato a esto y muestralo */}
                {/* <TextArea
                    label="Texto"
                    content={userData.aditionalInfo}
                    onTextAreaChange={console.log}
                /> */}
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
            <NavButton position="back" onClickEvent={() => navigate('/main')} />
        </>
    );
}

export default JoinForm;
