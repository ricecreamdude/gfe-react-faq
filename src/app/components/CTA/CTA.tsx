import styles from './CTA.module.css'

export default function CTA(){

    return(
    <div className={styles.container}>
        <div>
            <h5 className={styles.title}>Can’t find the answer you’re looking for?</h5>
            <p className={styles.text}> Reach out to our <a className={styles.link}>customer support</a> team.</p>
        </div>
        <div className={styles.buttonSection}>
            <button className={styles.button}>Get in touch</button>
        </div>
    </div>
    )
}