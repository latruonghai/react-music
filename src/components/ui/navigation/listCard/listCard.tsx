import Card from '../card';

const listCards = ({ title, datas }) => {
  const styleCard = title => {
    switch (title) {
      case 'Mới Phát Hành':
        return 'grid grid-cols-3';
      default:
        return 'flex';
    }
  };
  return (
    <section>
      <span className="text-xl text-white pl-6">{title}</span>
      <div className={`${styleCard(title)}`}>
        {datas.map(item => (
          <Card item={item} title={title} key={item.id} />
        ))}
        ;
      </div>
    </section>
  );
};

export default listCards;
