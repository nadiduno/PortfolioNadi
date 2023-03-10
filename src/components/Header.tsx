import styles from './module/Header.module.css'
import {  AppWindow, Database, Handshake, Heart, UsersThree } from 'phosphor-react'

export function Header() {
  return (
    <header className={styles.header}>
      <a href="#">
        <AppWindow size={28} />
        Aplicativos
      </a>
      <a href="#">
        <Database size={28} />
        Dados
      </a>
      <a href="#">
        <UsersThree size={28} />
        DevRel
      </a>
      <a href="#">
        <Handshake size={28} />
        Comunidade
      </a>
      <a href="#">
        <Heart size={28} />
        Voluntaria
      </a>
    </header>
  )
}
