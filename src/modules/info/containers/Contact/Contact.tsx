import React from 'react';

function Contact(): JSX.Element {
    return (
        <>
            <h2 className="secondary-title">Contacto</h2>
            <div>
                <p>
                    Jose Luis{' '}
                    <a href="https://wa.me/+34616379123">616 37 91 23</a>
                </p>
                <p>
                    Maru <span>620 75 40 67</span>
                </p>
            </div>
        </>
    );
}

export default Contact;
