const CardGen = ({ item }) => {
  const { id, name, habitat, abilities, description } = item;
  return (
    <>
      <h2 className={"card " + name}>{name}</h2>
      <hr />
      <p>{ habitat }</p>
      <p>{ abilities }</p>
      <p>{description}</p>
      <sub>ID: {id}</sub>
    </>
  );
};

export default CardGen;
