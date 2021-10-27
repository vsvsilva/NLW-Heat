import styles from './styles.module.scss'
import logoImg from '../../assets/logo.svg'

export function MessageList() {
    return(
        <div className={styles.messageListWrapper}>
            <img src={logoImg} alt="DoWhile 2021" />
            <ul className={styles.messageList}>
                <li className={styles.message}>
                    <p className={styles.messageContent}>alguma mensagem maneira, só pra testar mesmo!</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/vsvsilva.png" alt="Vitor Souza" />
                        </div>
                        <span>Vitor Souza</span>
                    </div>
                </li>

                <li className={styles.message}>
                    <p className={styles.messageContent}>alguma mensagem maneira, só pra testar mesmo!</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/vsvsilva.png" alt="Vitor Souza" />
                        </div>
                        <span>Vitor Souza</span>
                    </div>
                </li>

                <li className={styles.message}>
                    <p className={styles.messageContent}>alguma mensagem maneira, só pra testar mesmo!</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/vsvsilva.png" alt="Vitor Souza" />
                        </div>
                        <span>Vitor Souza</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}