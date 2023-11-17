import { NavLink } from 'react-router-dom'
import { AppMeType } from './ApplicationMe'

import logostyled from '../assets/logostyledcomponent.svg'
import logotypescript from '../assets/logotypescript.svg'
import logomongodb from '../assets/logomongodb.svg'
import logopython from '../assets/logopython.svg'
import logosql from '../assets/logosql.svg'
import logosass from '../assets/logosass.svg'
import logofigma from '../assets/logofigma.svg'
import logogithub from '../assets/logogithub.svg'
import logojupyter from '../assets/logojupyter.svg'
import logopowerbi from '../assets/logopowerbi.svg'
import logoreact from '../assets/logoreact.svg'

import styles from './DataScience.module.css'
import { Data } from '../Pages/Data'

let logos: string[][] = [
  [`${logopython}`, `${logosql}`, `${logomongodb}`, `${logojupyter}`, `${logopowerbi}`],
  [`${logoreact}`, `${logotypescript}`, `${logostyled}`, `${logosass}`, `${logofigma}`, `${logogithub}`,]
]


export function DataScience() {
  return (
    <div className={styles.layout}>
      <p className={styles.textmain}>
        Dados
      </p>
      <p>
        Análise e depuração de dados, para extrair insights que podem ajudar na tomada de decisões.
      </p>
      <hr />
      {/* <nav>
        <NavLink to='' title='' className={styles.button1}>
          Ver trabalhos na área de dados
        </NavLink>
      </nav> */}

      {/* IMAGENES QUADRADAS  */}
      {/* <div className={styles.box1}>
        <img
          className={styles.appdata}
          src='https://github.com/nadiduno/PortfolioNadi/blob/main/src/assets/nadiPhotoCode.png?raw=true'
          alt=''
        />
        <div className={styles.box2}>
          <img
            className={styles.appdata}
            src='https://github.com/nadiduno/PortfolioNadi/blob/main/src/assets/nadiPhotoCode.png?raw=true'
            alt=''
          />
          <div className={styles.box3}>
            <img
              className={styles.appdata}
              src='https://github.com/nadiduno/PortfolioNadi/blob/main/src/assets/nadiPhotoCode.png?raw=true'
              alt=''
            />
            <img
              className={styles.appdata}
              src='https://github.com/nadiduno/PortfolioNadi/blob/main/src/assets/nadiPhotoCode.png?raw=true'
              alt=''
            />
            <img
              className={styles.appdata}
              src='https://github.com/nadiduno/PortfolioNadi/blob/main/src/assets/nadiPhotoCode.png?raw=true'
              alt=''
            />
            <img
              className={styles.appdata}
              src='https://github.com/nadiduno/PortfolioNadi/blob/main/src/assets/nadiPhotoCode.png?raw=true'
              alt=''
            />
          </div>
        </div>
      </div>
       */}
       <Data />
    </div>

  )
}

