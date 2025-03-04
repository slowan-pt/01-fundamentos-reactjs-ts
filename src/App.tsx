//Componente é um pedaço da aplicação que pode ser repetida (reaproveitável) com INF =!
//Componente é uma função que retorna HTML

//JSX - JavaScript + XML

import { Header } from './components/Header';
import { Post, PostType } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';
/*
Informações NEC (que serão transformadas em objetos)
author: { avatar_url: "", name: "", role: ""}
publisherAt: Date
content: String

*/


const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: '/src/assets/avatar3.png',
      name: 'Sloan Nascimento',
      role: 'Developer WEB'
    },
    content:[
      {type: 'paragraph', content: 'Fala Galera'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2025-02-25 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: '/src/assets/avatar2.jpg',
      name: 'Isabelle Nascimento',
      role: 'Programer WEB'
    },
    content:[
      {type: 'paragraph', content: 'Olá'},
      {type: 'paragraph', content: 'Fazendo testes uniários'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2025-02-28 03:00:00'),
  },
];


export function App() {
  return (
    <div>
      <Header />

    <div className={styles.wrapper}>
      <Sidebar />

      <main>
        {posts.map(post => {
          return (
                  <Post 
                  key={post.id}
                  post={post}
                />
                )
        })}
      </main>
    </div>
    
    </div>
  )
  
}