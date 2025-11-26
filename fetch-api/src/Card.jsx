import './Card.css'

function Card({ price, title, bio }) {

  return (
    <div className="card">
    <img src="{img}" alt="" />
      <h2 className="name">{price}</h2>
      <p className='title'>{title}</p>
      <p className='bio'>{bio}</p>
    </div>
  );
  
}

export default Card;
