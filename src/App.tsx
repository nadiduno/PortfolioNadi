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
      visual: 'https://github.com/nadiduno/test-react/blob/main/.github/ProjectNadiDunoDesenvolvedorFrontEnd.png?raw=true',
      deploy: 'http://github.com/nadiduno.png',
      github: 'http://github.com/nadiduno.png',
    },
    publishedAt: new Date ('2023-02-26 13:34:00'),
  },
]
export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {appsme.map((appme) => {
            return <ApplicationMe key={appme.id} appme={appme} />
          })}
        </main>
      </div>
    </div>
  )
}
