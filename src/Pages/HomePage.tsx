import { Areas } from '../components/Areas'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { NoTransitionExample, Presentation } from '../components/Presentation'
import styles from './HomePage.module.css'
import { DataScience } from '../components/DataScience'

export function HomePage() {
    return (
        <>
            {/* <Header /> */}
            <main className={styles.container}>
                <div>
                    <Sidebar />
                </div>
                <div>
                    <Presentation />
                    {/* <NoTransitionExample /> */}
                </div>
            </main>
            <div className={styles.area}>
                {/* <Areas /> */}
                {/* <DataScience /> */}
            </div>

        </>
    )
}