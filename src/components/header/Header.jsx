import style from './Header.module.css'

import Tittle from '../title/Title'
import Subtitle from '../subTitle/Subtitle'
import Icon from '../icon/Icon'

function Header () {
  return (
    <div className={style.header}>
      <Tittle>Jogo da Velha</Tittle>
      <Subtitle>Criador por Jean Celin</Subtitle>
      <div className={style.iconContent}>
        <Icon iconName="github" link="https://github.com/JeanCelin" />
      </div>
    </div>
    
  )
}

export default Header