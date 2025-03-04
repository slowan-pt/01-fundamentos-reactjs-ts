import styles from './Avatar.module.css';

interface Avatarprops {
    hasBorder?: boolean;
    src: string;
    alt?: string
}

export function Avatar ({hasBorder = true, src, alt}: Avatarprops ) {
    return (
        //<img className={styles.avatar} src={props.src}

        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
            src={src} 
            alt={alt}
        />
    );
}  