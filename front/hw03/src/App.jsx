import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import './App.css';
import BookInsertPage from './features/book/pages/BookInsertPage';
import BookDetailPage from './features/book/pages/BookDetailPage';
import BookListPage from './features/book/pages/BookListPage';
import BookEditPage from './features/book/pages/BookEditPage';
import { Route, Routes } from 'react-router-dom';
import DefaultLayout from './app/layout/DefaultLayout';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/*" element={<DefaultLayout />}>
          <Route index element={<h1>HOME PAGE</h1>} />
          <Route />
          <Route path="book">
            <Route path="insert" element={<BookInsertPage />} />
            <Route path="list" element={<BookListPage />} />
            <Route path="detail/:id" element={<BookDetailPage />} />
            <Route path="edit/:id" element={<BookEditPage />} />
          </Route>
          <Route path="*" element={<h1>ERROR PAGE</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
