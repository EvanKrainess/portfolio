import './ExperienceNode.css'


export default function ExperienceNode({imgPath, title, description, startDate, endDate}){

    return (
        <div className='experience-node'>
            <div className='experience-information'>
                <p>{title}</p>
                <p>{startDate}-{endDate}</p>
                <p>{description}</p>
            </div>
            <img src={imgPath} alt="Company"></img>
        </div>
    )
}