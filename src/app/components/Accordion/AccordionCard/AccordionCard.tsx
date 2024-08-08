import { useState } from 'react';
import styles from './AccordionCard.module.css'

export interface IAccordionCardProps {
    title: string;
    text: string;
}


function ToggleButton({expanded}: {expanded: boolean}){

    if (expanded) return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20ZM10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM5 9H15V11H5V9Z" fill="#A3A3A3"/>
    </svg>

    return  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 9V5H11V9H15V11H11V15H9V11H5V9H9ZM10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20ZM10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z" fill="#A3A3A3"/>
    </svg>

}

export default function AccordionCard({ title, text}: IAccordionCardProps){
    
    const [expanded, setExpanded] = useState(true); // Expand/Close
    
    const handleClick = () => setExpanded(!expanded) // Toggle

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h6 className={styles.title}>{title}</h6>
                <div className={styles.icons}>
                    <button className={styles.toggle} onClick={handleClick}>
                        <ToggleButton expanded={expanded}/>
                    </button>
                </div>
            </div>
            {expanded && <p className={styles.text}>{text}</p>}
        </div>
    )
}