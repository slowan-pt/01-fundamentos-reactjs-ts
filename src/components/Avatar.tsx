import {ImgHTMLAttributes} from 'react';
import styles from './Avatar.module.css';

interface Avatarprops extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
}

export function Avatar ({hasBorder = true, ...props}: Avatarprops ) {
    return (
        //<img className={styles.avatar} src={props.src}

        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
            {...props}
        />
    );
}  