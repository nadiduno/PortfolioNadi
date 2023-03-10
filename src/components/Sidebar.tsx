import { PencilLine } from 'phosphor-react'
import styles from './module/Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://github.com/nadiduno/PortfolioNadi/blob/main/src/assets/nadiCode.png?raw=true"
        alt="Foto de Nadi Duno, Nadi é uma mulher, parda de cabelo curto, a foto esta em branco e preto, com um circulo verde neon com codigos de programação"
      />
      <div className={styles.profile}>
        
        <strong>Nadi Duno</strong>
        <span>DevRel | Web Developer</span>
      </div>
    </aside>
  )
}
