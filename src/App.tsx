import { Header } from './components/Header'
import { ApplicationMe, AppMeType } from './components/ApplicationMe'
import { Sidebar } from './components/Sidebar'
import styles from './App.module.css'
import './global.css'

const appsme: AppMeType[] = [
  {
    id: 1,
    title: 'DevPost',
    about: 'Postagem na rede social',
    urlApp: {
      photo: 'https://github.com/nadiduno/PortfolioNadi/blob/main/src/assets/nadiCode.png?raw=true',
      deploy: 'http://github.com/nadiduno',
      github: 'http://github.com/nadiduno',
    },
    publishedAt: new Date('2023-02-26 13:34:00'),
  },
  {
    id: 2,
    title: 'DevPost',
    about: 'Postagem na rede social',
    urlApp: {
      photo: 'https://github.com/nadiduno/PortfolioNadi/blob/main/src/assets/nadiCode.png?raw=true',
      deploy: 'http://github.com/nadiduno',
      github: 'http://github.com/nadiduno',
    },
    publishedAt: new Date('2023-02-26 13:34:00'),
  },
  {
    id: 3,
    title: 'DevPost',
    about: 'Postagem na rede social',
    urlApp: {
      photo: 'https://github.com/nadiduno/PortfolioNadi/blob/main/src/assets/nadiCode.png?raw=true',
      deploy: 'http://github.com/nadiduno',
      github: 'http://github.com/nadiduno',
    },
    publishedAt: new Date('2023-02-26 13:34:00'),
  },
  {
    id: 4,
    title: 'DevPost',
    about: 'Postagem na rede social',
    urlApp: {
      photo: 'https://github.com/nadiduno/PortfolioNadi/blob/main/src/assets/nadiCode.png?raw=true',
      deploy: 'http://github.com/nadiduno',
      github: 'http://github.com/nadiduno',
    },
    publishedAt: new Date('2023-02-26 13:34:00'),
  },
]
export function App() {
  return (
    <div>
      <Header />
      <div className={styles.layout}>
        <Sidebar />
        <main className={styles.wrapper}>
          {appsme.map((appme) => {
            return <ApplicationMe key={appme.id} appme={appme} />
          })}
        </main>
      </div>
    </div>
  )
}
