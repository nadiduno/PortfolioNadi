import { Areas } from '../components/Areas'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import styles from './HomePage.module.css'

export function HomePage() {
    return (
        <>
            <Header />
            <main className={styles.container}>
                <div>
                    <Sidebar />
                </div>
                <div>
                    <Areas />
                </div>
            </main>
        </>
    )
}