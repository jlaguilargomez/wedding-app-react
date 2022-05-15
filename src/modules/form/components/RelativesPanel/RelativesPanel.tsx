import ActionButton from 'modules/common/components/ActionButton/ActionButton';
import { IRelative } from 'modules/common/types/UserData.types';
import React from 'react';

// TODO: Cambia el modulo
import styles from 'styles/pages/JoinForm.module.scss';

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
                {relatives &&
                    relatives.map(({ name, username }) => (
                        <div
                            className={styles['join-form__elem']}
                            key={username}
                        >
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

export default RelativesPanel;
