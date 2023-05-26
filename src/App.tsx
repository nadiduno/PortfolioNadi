import { Header } from './components/Header'
import { ApplicationMe, AppMeType } from './components/ApplicationMe'
// import { Sidebar } from './components/Sidebar'
import styles from './App.module.css'
import './global.css'

const appsme: AppMeType[] = [
  {
    id: 1,
    title: 'Shoppe',
    about: 'Dashboard de Vendas',
    urlApp: {
      photo: 'https://github.com/nadiduno/PortfolioNadi/blob/main/.github/App5.png?raw=true',
      deploy: 'https://app.powerbi.com/view?r=eyJrIjoiOWViNzY0NTctNzhkMC00MzRlLWE1ZjEtMmNjN2IyZWY4ZWNhIiwidCI6IjE0YmU1ZTFkLTM2MGYtNDg0Ni1iNGIwLTJlNTkzNzc1NmQwZCJ9',
      github: 'https://github.com/nadiduno/post',
    },
    publishedAt: new Date('2023-05-22 23:00:00'),
  },
  {
    id: 2,
    title: 'Atacadao das Bebidas',
    about: 'Dashboard de Vendas',
    urlApp: {
      photo: 'https://app.powerbi.com/groups/me/reports/dd7fe305-aacd-40f8-88aa-598068c439c7/ReportSection',
      deploy: 'https://post-nadiduno.vercel.app/',
      github: 'https://github.com/nadiduno/post',
    },
    publishedAt: new Date('2023-05-1 13:34:00'),
  },
  {
    id: 3,
    title: 'DevPost',
    about: 'Criar postagem e comentarios',
    urlApp: {
      photo: 'https://github.com/nadiduno/PortfolioNadi/blob/main/.github/App1.png?raw=true',
      deploy: 'https://post-nadiduno.vercel.app/',
      github: 'https://github.com/nadiduno/post',
    },
    publishedAt: new Date('2023-02-27 13:34:00'),
  },
  {
    id: 4,
    title: 'Gallery Img',
    about: 'Consumindo a API de Unsplash',
    urlApp: {
      photo: 'https://github.com/nadiduno/PortfolioNadi/blob/main/.github/App2.png?raw=true',
      deploy: 'https://gallery-unsplash-nadiduno.vercel.app/',
      github: 'https://github.com/nadiduno/GalleryUnsplash',
    },
    publishedAt: new Date('2022-12-26 13:34:00'),
  },
  {
    id: 5,
    title: 'E-Commerce',
    about: 'Venda de canecas e camisetas',
    urlApp: {
      photo: 'https://github.com/nadiduno/PortfolioNadi/blob/main/.github/App3.png?raw=true',
      deploy: 'https://ecommercemarmitech.vercel.app/',
      github: 'https://github.com/nadiduno/ecommercemarmitech',
    },
    publishedAt: new Date('2022-08-31 13:34:00'),
  },
  {
    id: 6,
    title: 'Finance',
    about: 'Registro de finanças pessoal',
    urlApp: {
      photo: 'https://github.com/nadiduno/PortfolioNadi/blob/main/.github/App4.png?raw=true',
      deploy: 'https://financeperson.vercel.app/',
      github: 'https://github.com/nadiduno/financeperson',
    },
    publishedAt: new Date('2022-08-28 13:34:00'),
  },
]
export function App() {
  return (
    <div>
      <Header />
      <div className={styles.layout}>
        {/* <Sidebar /> */}
        <main className={styles.wrapper}>
          {appsme.map((appme) => {
            return <ApplicationMe key={appme.id} appme={appme} />
          })}
        </main>
      </div>
    </div>
  )
}
