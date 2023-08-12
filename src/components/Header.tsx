import styles from './Header.module.css'
import { AppWindow, Database, House, } from 'phosphor-react'
export function Header() {
  return (
    <header className={styles.header}>
      <div>

      </div>
      <div>
        <a href="/data" title='dados' >
          <Database size={24} />
          {/* Dados */}
        </a>
        <a href="/frontend" title='frontend'>
          <AppWindow size={24} />
          {/* Aplicativos */}
        </a>
        <a href="/" title='home' >
          <House size={24} />
          {/* Home */}
        </a>
        {/* <a href="#">
          <UsersThree size={24} />
          DevRel
        </a> */}
        {/* <a href="#">
          <Handshake size={24} />
          Comunidade
        </a> */}
        {/* <a href="#">
          <Heart size={24} />
          Voluntaria
        </a> */}
      </div>
    </header>
  )
}
