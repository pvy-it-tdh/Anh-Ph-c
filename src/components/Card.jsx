const Card = ({ title, imageSrc, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={imageSrc} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-white">{title}</div>
        <p className="text-red-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default Card;
