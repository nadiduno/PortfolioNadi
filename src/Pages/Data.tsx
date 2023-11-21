import { ApplicationMe, AppMeType } from "../components/ApplicationMe"
import { DataProject } from "../components/DataProject"
import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import styles from './Frontend.module.css'

export function Data() {
    return (
        <>
            <Header />
            <main className={styles.container}>
                <div>
                    <Sidebar />
                </div>
                <main className={styles.wrapper}>
                    <DataProject />
                </main>
            </main>
        </>
    )
}
