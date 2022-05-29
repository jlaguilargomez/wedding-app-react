import React, { FormEvent, useEffect, useState } from 'react';

import { useUserData } from 'hooks/useUserData/useUserData';
import Loader from 'modules/common/components/Loader/Loader';
import Modal from 'modules/common/containers/Modal/Modal';

import cn from 'classnames';

import CheckBox from 'modules/common/components/CheckBox/CheckBox';
import RelativeForm from 'modules/form/containers/RelativeForm/RelativeForm';
import RelativesPanel from 'modules/form/components/RelativesPanel/RelativesPanel';
import { IRelative } from 'types/UserData.types';
import handleToast from 'utils/handleToast';
import TextArea from 'modules/common/components/TextArea/TextArea';
import Button from 'modules/common/components/Button/Button';

import styles from 'styles/pages/JoinForm.module.scss';

function JoinForm(): JSX.Element {
    const {
        userData,
        loadingUser,
        updateTravelData,
        removeRelative,
        updateAdditionalInfo,
    } = useUserData();

    const [relativeToEdit, setRelativeToEdit] = useState<
        IRelative | undefined
    >();
    const [showUserModal, setShowUserModal] = useState<boolean>(false);
    const [additionalContent, setAdditionalContent] = useState<string>('');

    useEffect(() => {
        setAdditionalContent(userData?.aditionalInfo || '');
    }, [userData]);

    const toggleUserModal = (): void => setShowUserModal((prev) => !prev);

    const onSubmitHandler = async (e: FormEvent): Promise<void> => {
        e.preventDefault();
        await handleToast(updateAdditionalInfo(additionalContent), {
            loading: 'Enviando comentario...',
            success: <b>¡Recibido!</b>,
            error: <b>No se han podido actualizar los datos</b>,
        });
    };

    const updateUserData = async (
        param: string,
        newData: boolean
    ): Promise<void> => {
        await handleToast(updateTravelData(param, newData), {
            loading: 'Actualizando los datos del bus...',
            success: <b>¡Recibido!</b>,
            error: <b>No se han podido actualizar los datos</b>,
        });
    };

    const handleRemoveRelative = async (username: string): Promise<void> => {
        await handleToast(removeRelative(username), {
            loading: 'Eliminando usuario de la lista...',
            success: <b>¡Eliminado!</b>,
            error: <b>No se han podido eliminar al usuario</b>,
        });
    };

    if (loadingUser) {
        return <Loader show />;
    }

    if (!userData) {
        return <h2>¡No hay datos de usuario!</h2>;
    }

    return (
        <main className={styles['join-form__container']}>
            <section className={cn(styles['join-form__section'])}>
                <p className={styles['join-form__text']}>
                    Añade en el formulario tus datos y los de tus acompañantes.
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
                    onRemoveUser={handleRemoveRelative}
                    onAddNewUser={toggleUserModal}
                />
            </section>

            <section className={cn(styles['join-form__section'])}>
                <p className={styles['join-form__text']}>
                    ¿Necesitáis autobús?
                </p>
                <div>
                    <CheckBox
                        name="onArrive"
                        isChecked={
                            userData.byBus ? userData.byBus.onArrive : false
                        }
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
                </div>
            </section>

            <section className={cn(styles['join-form__section'])}>
                <form
                    className={styles['join-form__family-info']}
                    onSubmit={onSubmitHandler}
                >
                    <TextArea
                        value={additionalContent}
                        name="additional"
                        labelText="Si quieres añadir algo, ¡este es el sitio!"
                        onTextAreaChange={setAdditionalContent}
                    />
                    <div className={styles['join-form__button']}>
                        <Button type="submit" text="Enviar comentario" />
                    </div>
                </form>
            </section>
            {showUserModal && (
                <Modal onClickClose={toggleUserModal}>
                    <RelativeForm
                        closeModal={toggleUserModal}
                        relativeInfo={relativeToEdit}
                        cleanRelativeData={() => setRelativeToEdit(undefined)}
                    />
                </Modal>
            )}
        </main>
    );
}

export default JoinForm;
