import { Button, Card, Placeholder } from 'react-bootstrap';
import { ApplicationMe, AppMeType } from "../components/ApplicationMe"
import styles from './Areas.module.css'

const appsme: AppMeType[] = [
  {
    id: 1,
    title: 'Front-end',
    about: 'Front-end',
    urlApp: {
      photo: 'https://github.com/nadiduno/PortfolioNadi/blob/main/.github/App5.png?raw=true',
      deploy: '/frontend',
      github: '#',
    },
    publishedAt: new Date('2023-08-10 23:00:00'),
  },
  {
    id: 2,
    title: 'Dados',
    about: 'Dados',
    urlApp: {
      photo: 'https://github.com/nadiduno/PortfolioNadi/blob/main/.github/App6.jpg?raw=true',
      deploy: '/data',
      github: '#',
    },
    publishedAt: new Date('2023-08-10 23:00:00'),
  },
]

export function Areas() {
  return (
    <div className={styles.layout}>
      <main className={styles.wrapper}>
        {appsme.map((appme) => {
          return (
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={appme.urlApp.photo} />
              <Card.Body>
                <Card.Title>{appme.title}</Card.Title>
                <Card.Text>
                  {appme.about}
                </Card.Text>
                <a
                  href={appme.urlApp.deploy}
                  className={styles.socialnetworks}
                  rel="noreferrer"
                >
                  {appme.title}
                </a>
              </Card.Body>
            </Card>
          )
        })}
      </ main>
    </div>

  )
}
