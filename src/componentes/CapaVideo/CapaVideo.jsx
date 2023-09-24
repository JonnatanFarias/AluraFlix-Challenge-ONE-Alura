import './CapaVideo.css'

export default function CapaVideo({ capa, link }) {
    return (
        <div className='containerCapaVideo'>
            <a href={link} target="_blank" rel="noopener noreferrer" >
                <img src={capa} alt="Capa Video" />
            </a>
        </div>
    )
}