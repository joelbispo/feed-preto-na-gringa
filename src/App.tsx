import { Header } from './components/Header'
import { Post } from './components/Post'
import './global.css'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      name: 'Joel',
      avatarUrl: 'https://github.com/joelbispo.png',
      role: 'Software Engineer'
    },
    content: [
      { id: 1, type: 'paragraph', content: 'Fala Galera' },
      { id: 2, type: 'paragraph', content: 'Eu saio uma hora( uma hora só) das redes sociais e a dona do mundo anuncia a turnê.' },
      { id: 3, type: 'paragraph', content: 'Num eh possível que com esse tanto de cidade que ela anunciou aqui perto eu não vou conseguir comprar nenhum ingresso.' },
      { id: 4, type: 'link', content: 'https://twitter.com/joel_bispo/status/1620784108237647872?s=20&t=TA6int68-RvuO1emUIh-qg' },
    ],
    publishedAt: new Date('2023-05-02 08:13:38'),
  },
  {
    id: 2,
    author: {
      name: 'Maressa',
      avatarUrl: 'https://pbs.twimg.com/profile_images/1431980946492887044/Cpsr0uv7_400x400.jpg',
      role: 'Psychologist'
    },
    content: [
      { id: 1, type: 'paragraph', content: 'E ontem que eu fui fazer snorkeling e comecei a ouvir uma gritaria… era um baby shark passando do meu ladinho' },
      { id: 2, type: 'link', content: 'https://twitter.com/maressabbispo/status/1612664360341753856?s=20&t=TA6int68-RvuO1emUIh-qg' },
    ],
    publishedAt: new Date('2023-10-01 10:20:25'),
  },

]

export function App() {
  return (

    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post => {
              return (
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
        </main>

      </div>
    </div>
  )
}
