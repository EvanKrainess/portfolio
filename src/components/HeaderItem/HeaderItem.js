import './HeaderItem.css'
export default function HeaderItem( {imagePath, altText, link} ){
    return (
        <a href={link} target="_blank" rel="noreferrer">
          <img src={imagePath} alt={altText} />
        </a>
      );
}