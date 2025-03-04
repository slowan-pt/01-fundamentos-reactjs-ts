import { Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css';
import { ThumbsUp } from '@phosphor-icons/react/dist/ssr';
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({content, onDeleteComment}: CommentProps) {

    const [countLike, setCountLike] = useState(0); 

    function handleDeleteComment(){
        onDeleteComment(content);
    }

    function handleCountLike (){
       
        /* Para ATU os likes, posso usar: setCountLike (countLike +1);   ou função*/

        setCountLike((aplaudir) => {
            return aplaudir + 1;
        });

    }

    return (
        <div className={styles.comment}>
            <Avatar 
                hasBorder={false} 
                src="/src/assets/avatar2.jpg" 
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Sloan Nascimento</strong>
                            <time title="11 de FEV às 04:51" dateTime="2025-05-23 04:49:20">Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={20} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleCountLike}>
                        <ThumbsUp />
                        Aplaudir <span>{countLike}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}