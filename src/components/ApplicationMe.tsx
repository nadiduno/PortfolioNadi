import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import styles from './ApplicationMe.module.css'

interface UrlApp {
  visual: string
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
      <header>
        <img src={appme.urlApp.visual} alt=" " />
        <span>{appme.urlApp.deploy}</span>
        <strong>{appme.title}</strong>
        <span>{appme.about}</span>
        <time
          title={publishedDateFormat}
          dateTime={appme.publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <footer>
        <span>{appme.urlApp.deploy}</span>
        <span>{appme.urlApp.github}</span>
      </footer>
    </article>
  )
}
