import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div>
        <div>
          <div className={styles.hand}>👋</div>
          <span className={styles.name1}>Eu sou</span>
          <span className={styles.name2}>Nadi Duno</span>
          {/* <span className={styles.name3}>a DevRel</span> */}
        </div>
        <div className={styles.wrapper}>
          <img
            className={styles.cover}
            // https://github.com/nadiduno/PortfolioNadi/blob/main/src/assets/nadiPhotoCode2.png
            src="https://avatars.githubusercontent.com/u/6678054?v=4?raw=true"
            alt="Foto de Nadi Duno, Nadi é uma mulher, parda de cabelo curto, a foto esta em branco e preto, com um circulo verde neon com codigos de programação"
          />
          <div>
            {/* <a
              href="https://www.slideshare.net/nadi192002/practica-1-de-photoshop-12676380"
              target="_blank"
              className={styles.socialnetworks}
              rel="noreferrer"
            >
              Criação de Conteúdo
            </a>
            <a
              href="https://devrelnadiduno.blogspot.com/2023/06/fronteditor-para-codar.html"
              target="_blank"
              className={styles.socialnetworks}
              rel="noreferrer"
            >
              Diario de Estudo
            </a> */}

            <a
              href="https://www.linkedin.com/pulse/boa-pr%25C3%25A1ctica-ao-declarar-vari%25C3%25A1veis-nadi-duno/?trackingId=%2FlmGTflHTPGjt5KlofYHKQ%3D%3D"
              target="_blank"
              className={styles.socialnetworks}
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com/nadiduno.dev/"
              target="_blank"
              className={styles.socialnetworks}
              rel="noreferrer"
            >
              Instagram
            </a>

            <a
              href="https://www.youtube.com/watch?v=sG0e7vlFRDE&t=32s"
              target="_blank"
              className={styles.socialnetworks}
              rel="noreferrer"
            >
              Youtube
            </a>
          </div>
        </div>
      </div>
    </aside>
  )
}
