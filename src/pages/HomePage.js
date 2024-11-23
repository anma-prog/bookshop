import { useEffect, useState } from 'react';

import BookSection from '../widgets/BookSection';
import NavigationBar from '../widgets/NavigationBar';
import CartOverlay from '../widgets/CartOverlay';

function HomePage() {
  const [ booksJson, setBooks ] = useState(null);

  useEffect(() => {
    fetch('/api/books.json')
      .then(response => response.json())
      .then(data => setBooks(data));
  }, []);

  const navData = [
    {
      id: '#main',
      label: 'Книги под заказ',
      active: true,
    },
    {
      id: '#our_books',
      label: 'Наши книги',
    }
  ];

  if (booksJson == null) {
    return (
      <main className="App">
        <center>
          <p>Загрузка</p>
        </center>
      </main>
    );
  }

  return (
    <>
      <main className="App">
        <NavigationBar sections={navData} />
        <BookSection id={navData[0].id} title={navData[0].label}>
          {booksJson['order_books']}
        </BookSection>
        <BookSection id={navData[1].id} title={navData[1].label}>
          {booksJson['our_books']}
        </BookSection>
      </main>
      <CartOverlay />
    </>
  );
}

export default HomePage;
