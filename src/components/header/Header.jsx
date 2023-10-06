import style from './Header.module.css'

import Tittle from '../title/Title'
import Subtitle from '../subTitle/Subtitle'

function Header () {
  return (
    <div className={style.header}>
      <Tittle>Jogo da Velha</Tittle>
      <Subtitle>Criador por Jean Celin</Subtitle>
    </div>
    
  )
}

export default Header