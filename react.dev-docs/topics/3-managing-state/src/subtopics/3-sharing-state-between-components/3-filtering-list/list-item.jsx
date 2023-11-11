const ListItem = ({ item }) => {
  const { name, imageUrl, description } = item;
  return (
    <div className="list__item__container">
      <img src={imageUrl} alt={`${name}'s pic`} />
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ListItem;
