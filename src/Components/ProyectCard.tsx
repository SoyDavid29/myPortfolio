import type {Proyect} from "../db/ProyectsDb";

const ProyectCard: React.FC<Proyect> = ({img, tittle, description, link }) => {

    return(
        <aside>
            <div>
                <a href={link}></a>
            </div>
            <div>
                <img src={img} alt="" />
                <h2>{tittle}</h2>
                <p>{description}</p>
            </div>
        </aside>
    );

} 
export default ProyectCard;