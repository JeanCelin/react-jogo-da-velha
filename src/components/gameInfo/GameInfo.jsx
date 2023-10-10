import styles from './/GameInfo.module.css'
import Icon from '../icon/Icon'
import Button from '../button/Button'

function GameInfo ({currentPlayer, winner, onReset}) {
  
  const shouldEnableButton = () => {
    if (winner !==0) return true
  }
  return (
    <div className={styles.gameInfo}>
      {
        winner === 0 &&
        <>
          <h4>Próximo a jogar:</h4>
          {
             currentPlayer === 1 && <Icon iconName="icon-circle" />
          }
          {
            currentPlayer === -1 && <Icon iconName="icon-x" />
          }        
         </>
    
      }
      {
        winner !== 0 && 
        <>
        <h4>Fim de jogo! Vencedor:</h4>
          {
            winner === 1 && <Icon iconName="icon-circle" />
          }
          {
            winner === -1 && <Icon iconName="icon-x" />
          }   
          
        </>
            
      }   
      <Button
        onClick={onReset}
        disabled={!shouldEnableButton()}
      >
        Reiniciar
      </Button> 
    </div>
  )
}

export default GameInfo