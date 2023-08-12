import { ApplicationMe, AppMeType } from '../components/ApplicationMe'
import styles from './Areas.module.css'
import logomongodb from '../assets/logomongodb.svg'
import logopython from '../assets/logopython.svg'
import logostyled from '../assets/logostyledcomponent.svg'
import logotypescript from '../assets/logotypescript.svg'
import logoreact from '../assets/logoreact.svg'

const appsme: AppMeType[] = [
  {
    id: 1,
    title: 'Dados',
    about: 'Análise e depuração de dados,para extrair insights que podem ajudar na tomada de decisões.',
    urlApp: {
      photo: 'https://github.com/nadiduno/PortfolioNadi/blob/main/.github/Dados.png?raw=true',
      deploy: '/data',
      github: 'Ver meus trabalhos',
    },
    publishedAt: new Date('2023-08-10 23:00:00'),
  },
  {
    id: 2,
    title: 'Front-end',
    about: 'Paixão por escrever códigos eficientes usáveis seguindo os critérios de acessibilidade.',
    urlApp: {
      photo: 'https://github.com/nadiduno/PortfolioNadi/blob/main/.github/Frontend.png?raw=true',
      deploy: '/frontend',
      github: 'Ver meus trabalhos',
    },
    publishedAt: new Date('2023-08-10 23:00:00'),
  }
]

export function Areas() {
  return (
    <div className={styles.layout}>
      <main className={styles.wrapper}>
        {appsme.map((appme) => {
          return (
            <div className={styles.boxmain}>
              <div className={styles.box1}>
                <img src={appme.urlApp.photo} alt="" />
              </div>
              <div className={styles.box2}>
                <p>{appme.title}</p>
                <p>{appme.about}</p>
                <p>Tecnologias</p>
                <div className={styles.logoteach}>
                  <img src={logoreact} alt="" />
                </div>
                <a
                  href={appme.urlApp.deploy}
                  className={styles.socialnetworks}
                  rel="noreferrer"
                >
                  Ver meus trabalhos
                </a>
              </div>

            </div>
          )
        })}
      </ main>
    </div>

  )
}

