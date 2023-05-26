import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div>
        <div>
          <span className={styles.name1}>👋 Eu sou</span>
          <span className={styles.name2}>Nadi Duno</span>
          <span className={styles.name3}>a DevRel</span>
        </div>
        <div className={styles.wrapper}>
          <img
            className={styles.cover}
            src="https://github.com/nadiduno/PortfolioNadi/blob/main/src/assets/nadiCode.png?raw=true"
            alt="Foto de Nadi Duno, Nadi é uma mulher, parda de cabelo curto, a foto esta em branco e preto, com um circulo verde neon com codigos de programação"
          />
          <div >
          <a 
            href='https://www.slideshare.net/nadi192002/practica-1-de-photoshop-12676380' 
            target="_blank"
            className={styles.socialnetworks} 
            rel="noreferrer">
            Criação de Conteúdo
          </a>
          <a 
            href='https://devrelnadiduno.blogspot.com/' 
            target="_blank"
            className={styles.socialnetworks} 
            rel="noreferrer">
            Diario de Estudo
          </a>
          
          <a 
            href='https://www.linkedin.com/in/nadiduno/' 
            target="_blank" 
            className={styles.socialnetworks}
            rel="noreferrer">
            LinkedIn
          </a>
          <a 
            href='https://instagram.com/nadiduno.dev/' 
            target="_blank" 
            className={styles.socialnetworks}
            rel="noreferrer">
            Instagram
          </a>            
          
          <a 
            href='https://www.youtube.com/nadiduno' 
            target="_blank" 
            className={styles.socialnetworks}
            rel="noreferrer">
            Youtube
          </a>            
          </div>
        </div>
      </div>
    </aside>
  )
}
