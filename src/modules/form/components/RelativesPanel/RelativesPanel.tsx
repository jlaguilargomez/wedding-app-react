import ActionButton from 'modules/common/components/ActionButton/ActionButton';
import { IRelative } from 'types/UserData.types';
import Pencil from 'assets/svg/pencil.svg';
import Eraser from 'assets/svg/eraser.svg';
import Person from 'assets/svg/person.svg';
import React, { useState } from 'react';

import styles from 'styles/components/RelativesPanel.module.scss';
import Modal from 'modules/common/containers/Modal/Modal';
import Button from 'modules/common/components/Button/Button';

interface IUserToRemove {
    name: string;
    username: string;
}
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
    const [showModal, setShowModal] = useState<boolean>(false);
    const [userToRemove, setUserToRemove] = useState<IUserToRemove | null>(
        null
    );

    const toggleModal = (): void =>
        setShowModal((prevValue: boolean) => !prevValue);

    if (!relatives?.length) {
        <h1>No hay datos de asistentes</h1>;
    }
    return (
        <>
            <section className={styles['relatives-panel__list']}>
                {relatives &&
                    relatives.map(({ name, username }) => (
                        <div
                            className={styles['relatives-panel__elem']}
                            key={username}
                        >
                            <p>{name}</p>
                            <div className="flex">
                                <ActionButton
                                    icon={Pencil}
                                    onClickEvent={() => onEditUser(username)}
                                />{' '}
                                <ActionButton
                                    icon={Eraser}
                                    onClickEvent={() => {
                                        setUserToRemove({ name, username });
                                        toggleModal();
                                    }}
                                />
                            </div>
                        </div>
                    ))}
            </section>
            <div className={styles['relatives-panel__add']}>
                <p>Añadir</p>
                <div className="flex">
                    <ActionButton icon={Person} onClickEvent={onAddNewUser} />
                </div>
            </div>
            {showModal && (
                <Modal
                    onClickClose={() => {
                        toggleModal();
                        setUserToRemove(null);
                    }}
                >
                    {userToRemove ? (
                        <>
                            {' '}
                            <>
                                <h2 className="secondary-title">
                                    Eliminar asistente
                                </h2>
                                <p
                                    className={
                                        styles['relatives-panel__modal-text']
                                    }
                                >
                                    ¿Quieres quitar a {userToRemove.name} de la
                                    lista?
                                </p>
                                <Button
                                    text="Confirmar"
                                    btnStyle="secondary"
                                    onClickEvent={() => {
                                        onRemoveUser(userToRemove.username);
                                        toggleModal();
                                        setUserToRemove(null);
                                    }}
                                />
                            </>
                        </>
                    ) : (
                        <h2>No hay nadie seleccionado</h2>
                    )}
                </Modal>
            )}
        </>
    );
}

export default RelativesPanel;
