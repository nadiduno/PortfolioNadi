import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { FormEvent, ChangeEvent, InvalidEvent, useState } from 'react'
import styles from './module/ApplicationMe.module.css'

interface UrlApp {
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
  appme : AppMeType
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
  const [comments, setComments] = useState(['Muito bom, parabéns!!! 👏'])
  const [newCommentText, setNewCommentText] = useState('')
  const isNewCommentEmpty = newCommentText.length === 0
  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault()
    setComments([...comments, newCommentText])
    setNewCommentText('')
  }
  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }
  function handleNewCommnentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatorio!')
  }
  function deleteComment(commentToDelete: string) {
    const commentWhithOutDeleteOne = comments.filter((comment) => {
      return comment !== commentToDelete
    })
    setComments(commentWhithOutDeleteOne)
  }
  return (
    <article className={styles.appMe}>
      <header>
        <div className={styles.author}>
          //Imagen do App 
          <div className={styles.authorInfo}>
            <strong>{appme.title}</strong>
            <span>{appme.about}</span>
          </div>
        </div>
        <time
          title={publishedDateFormat}
          dateTime={appme.publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <footer>
      <span>{appme.urlApp.deploy}</span>
      <span>{appme.urlApp.deploy}</span>
      </footer>
    </article>
  )
}
