import React from 'react';
import cn from 'classnames';

import styles from 'styles/components/InfoCard.module.scss';

interface InfoCardProps {
    children: JSX.Element;
}

function InfoCard({ children }: InfoCardProps): JSX.Element {
    return (
        <section className={cn(styles['info-card'], 'text')}>
            {children}
        </section>
    );
}

export default InfoCard;
