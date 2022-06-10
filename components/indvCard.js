import styles from '../styles/card.module.css'
import Image from 'next/image';
import fail from '../public/dummy.jpg'

const IndvCard = ({data}) =>{
    return(
        <div className={styles.colFlex2}>
            <Image className={styles.forImage} src={fail} height={100} width={100}/>
            <p className={styles.pText}>{data.Name}&nbsp;</p>
            <p>Some Description</p>
        </div>
    )
}

export default IndvCard;