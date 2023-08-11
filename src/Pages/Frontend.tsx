import { ApplicationMe, AppMeType } from "../components/ApplicationMe"
import styles from './Frontend.module.css'

const appsme: AppMeType[] = [
    {
        id: 1,
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
        id: 2,
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
        id: 3,
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
        id: 4,
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

export function Frontend() {
    return (
        <>
            <main className={styles.wrapper}>
                {appsme.map((appme) => {
                    return <ApplicationMe key={appme.id} appme={appme} />
                })}
            </main>
        </>
    )
}