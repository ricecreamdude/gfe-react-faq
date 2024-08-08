import faqData from './../../data/faqs.json'
import AccordionCard, { IAccordionCardProps } from './AccordionCard/AccordionCard'

export default function Accordion() {
 
    //Usually we have some sort of API that is fetching data that will be using to populate the questions
    return(
        <div className="faq-container"> 
            {faqData.data.map( (faq: IAccordionCardProps, index: number) => {
                return <AccordionCard 
                    title={faq.title}
                    text={faq.text}
                    key={index}
                />
            })}
        </div>
    )

}