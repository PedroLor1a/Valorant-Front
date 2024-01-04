const Card = ({ name, img, role }) => {
  return (
    <div>
      <div>
        <img src={img} alt={name} />
      </div>
      <div>
        <h3>Name: {name}</h3>
        <h3>Role: {role} </h3>
      </div>
    </div>
  );
};

export default Card;
