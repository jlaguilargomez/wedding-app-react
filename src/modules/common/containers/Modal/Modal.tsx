/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { MutableRefObject, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import styles from 'styles/containers/Modal.module.scss';

const modalRoot = document.getElementById('modal');

interface ModalProps {
    children: JSX.Element;
    onClickClose?: () => void;
}

const Modal = ({ children, onClickClose }: ModalProps): JSX.Element => {
    const elRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
    if (!elRef.current) {
        elRef.current = document.createElement('div');
    }

    useEffect(() => {
        if (!modalRoot || !elRef.current) {
            return;
        }
        modalRoot.appendChild(elRef.current);
        // eslint-disable-next-line consistent-return
        return () => {
            if (elRef.current) {
                modalRoot.removeChild(elRef.current);
            }
        };
    }, []);

    return createPortal(
        <div className={styles['modal-layout']} onClick={onClickClose}>
            <aside
                className={styles.modal}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className={styles.modal__button}
                    type="button"
                    onClick={onClickClose}
                >
                    X
                </button>
                {children}
            </aside>
        </div>,
        elRef.current
    );
};

export default Modal;
