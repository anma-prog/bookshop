import Book from './Book'

function BookSection({ id, title, children }) {
  return (
    <section id={id}>
      <h3>{title}</h3>
      <div className="books">
        {
          children.map(item => (
            <Book key={item.id} data={item}></Book>
          ))
        }
      </div>
    </section>
  );
}

export default BookSection;
