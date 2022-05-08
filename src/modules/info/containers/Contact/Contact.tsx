import React from 'react';

import WhatsappIcon from 'assets/svg/WhatsApp.svg';
import PhoneIcon from 'assets/svg/phone-call.svg';

import styles from 'styles/containers/Contact.module.scss';

interface ContactInfoProps {
    name: string;
    phoneNumber: string;
}

function ContactInfo({ name, phoneNumber }: ContactInfoProps): JSX.Element {
    return (
        <div className={styles['contact-info']}>
            <div className={styles['contact-info__row']}>
                <p className={styles['contact-info__column']}>
                    <span>{name}</span>
                    <span>{phoneNumber}</span>
                </p>

                <a href={`https://wa.me/+34${phoneNumber}`}>
                    <img
                        className={styles.contact__icon}
                        src={WhatsappIcon}
                        alt="whatsapp icon"
                    />
                </a>
                <a href={`tell:+34${phoneNumber}`}>
                    <img
                        className={styles.contact__icon}
                        src={PhoneIcon}
                        alt="whatsapp icon"
                    />
                </a>
            </div>
        </div>
    );
}

function Contact(): JSX.Element {
    return (
        <>
            <h2 className="secondary-title">Contacto</h2>
            <div>
                <ContactInfo name="Jose Luis" phoneNumber="616379123" />
                <ContactInfo name="Maru" phoneNumber="620754067" />
            </div>
        </>
    );
}

export default Contact;
