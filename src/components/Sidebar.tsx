import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div>
        <div>
          <span className={styles.Name1}>Eu sou</span>
          <span className={styles.Name2}>Nadi Duno</span>
          <span className={styles.Name1}>a web developer</span>
        </div>
        <img
          className={styles.cover}
          src="https://github.com/nadiduno/PortfolioNadi/blob/main/src/assets/nadiCode.png?raw=true"
          alt="Foto de Nadi Duno, Nadi é uma mulher, parda de cabelo curto, a foto esta em branco e preto, com um circulo verde neon com codigos de programação"
        />
      </div>
    </aside>
  )
}
