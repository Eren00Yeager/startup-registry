import styles from '../styles/card.module.css'

const IndvCard = ({data}) =>{
    return(
        <div className={styles.colFlex2}>
            <p>{data.Name}&nbsp;</p>
        </div>
    )
}

export default IndvCard;