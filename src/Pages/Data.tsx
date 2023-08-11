import { ApplicationMe, AppMeType } from "../components/ApplicationMe"
import styles from './Frontend.module.css'

const appsme: AppMeType[] = [
    {
        id: 1,
        title: 'Shoppe',
        about: 'Dashboard de Vendas',
        urlApp: {
            photo: 'https://github.com/nadiduno/PortfolioNadi/blob/main/.github/App5.png?raw=true',
            deploy: 'https://app.powerbi.com/view?r=eyJrIjoiOWViNzY0NTctNzhkMC00MzRlLWE1ZjEtMmNjN2IyZWY4ZWNhIiwidCI6IjE0YmU1ZTFkLTM2MGYtNDg0Ni1iNGIwLTJlNTkzNzc1NmQwZCJ9',
            github: 'https://github.com/nadiduno/dataPublic',
        },
        publishedAt: new Date('2023-05-22 23:00:00'),
    },
    {
        id: 2,
        title: 'Atacadao das Bebidas',
        about: 'Dashboard de Vendas',
        urlApp: {
            photo: 'https://github.com/nadiduno/PortfolioNadi/blob/main/.github/App6.jpg?raw=true',
            deploy: 'https://app.powerbi.com/groups/me/reports/dd7fe305-aacd-40f8-88aa-598068c439c7/ReportSection',
            github: 'https://github.com/nadiduno/dataPublic',
        },
        publishedAt: new Date('2023-05-16 8:00:00'),
    },
    {
        id: 3,
        title: 'Migrantes',
        about: 'Dashboard de Empregabilidade',
        urlApp: {
            photo: 'https://github.com/nadiduno/PortfolioNadi/blob/main/.github/App8.png?raw=true',
            deploy: 'https://app.powerbi.com/groups/8c95b6d3-4a45-44e1-be0b-496158e23210/reports/b4f11f14-1657-46ae-beda-8dc71e6b805e/ReportSection?experience=power-bi',
            github: 'https://github.com/nadiduno/dataPublic',
        },
        publishedAt: new Date('2023-2-14 13:34:00'),
    },
    {
        id: 4,
        title: 'Vila Móveis',
        about: 'Dashboard de Vendas',
        urlApp: {
            photo: 'https://github.com/nadiduno/PortfolioNadi/blob/main/.github/App7.jpg?raw=true',
            deploy: 'https://app.powerbi.com/view?r=eyJrIjoiODE4YTEyOTAtZjY1YS00Njc0LWEyM2YtNzBhZTQxZjcxMDNkIiwidCI6IjE0YmU1ZTFkLTM2MGYtNDg0Ni1iNGIwLTJlNTkzNzc1NmQwZCJ9',
            github: 'https://github.com/nadiduno/dataPublic',
        },
        publishedAt: new Date('2022-09-23 13:34:00'),
    }
]

export function Data() {
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