import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import styles from './ApplicationMe.module.css'

interface UrlApp {
  photo: string
  deploy: string
  github: string
}
export interface AppMeType {
  id: number
  title: string
  about: string
  urlApp: UrlApp
  publishedAt: Date
}
interface AppProps {
  appme: AppMeType
}
export function ApplicationMe({ appme }: AppProps) {
  const publishedDateFormat = format(
    appme.publishedAt,
    "dd 'de' LLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    },
  )
  const publishedDateRelativeToNow = formatDistanceToNow(appme.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <article className={styles.appMe}>
      <img
        src={appme.urlApp.photo}
        alt="Imagem de a aplicativo DevPost, o DevPost es um aplicativo para que dev possam agregar post e outros possam deixar comentarios e curtir os postagem"
      />
      <header className={styles.applications}>
        <strong>{appme.title}</strong>
        <span>{appme.about}</span>
        <time
          title={publishedDateFormat}
          dateTime={appme.publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <footer className={styles.urlapplications}>
        <a href={appme.urlApp.deploy} target="_blank" rel="noreferrer">
          Ver Aplicação
        </a>
        <a href={appme.urlApp.github} target="_blank" rel="noreferrer">
          Ver Código
        </a>
      </footer>
    </article>
  )
}
