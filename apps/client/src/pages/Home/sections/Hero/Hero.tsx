import styles from './Hero.module.scss'

export const Hero = () => {
   return (
      <div className={styles.root}>
         <div className={styles.title}>
            <h1>Start new project now.</h1>
            <p>With react tempalte</p>
         </div>
      </div>
   )
}
