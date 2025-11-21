const CardGen = ({ item }) => {
  const { id, name, habitat, abilities, description } = item;
  return (
    <div className={`card ${id}`}>
      <h3>{name}</h3>
      <p><span className="bold">Habitat: </span>{ habitat }</p>
      <p>{description}</p>
      <p className="green">Abilities: </p>
      <ul>
        {abilities.map((ability) => <li>{ability}</li>)}
      </ul>
    </div>
  );
};

export default CardGen;
