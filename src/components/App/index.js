import './App.css';
import Input from '../Input'
import Button from '../Button';
import Card from '../Card';
import React, { useEffect, useState } from 'react';
import api from '../../utils/api';
import Spinner from '../Spinner';

function App() {
  const [searchRequest, setSearchRequest] = useState('');
  const [submit, setSubmit] = useState(false);
  const [cards, setCards] = useState(null);

  useEffect(() => {
    if (submit) {
      api.search(searchRequest)
        .then((data) => {
          const result = data.results.map(item => ({
            id: item.id,
            src: item.urls.regular,
            alt: item.alt_description,
            title: item.description,
            author: item.user.name,
            html: item.links.html
          }));
          setCards(result);
        })
        .catch(err => console.log(err))
        .finally(() => {
          setSubmit(false);
        })
    }
  }
    , [submit])

  return (
    <div className="App">
      <div className="App-search-element">
        <Input placeholder="Insert search request" handleChange={(e) => setSearchRequest(e.target.value)} />
        <Button text="Search" handleClick={() => setSubmit(true)} />
        {submit ? <Spinner /> : null}
      </div>
      
      {cards ? (
        <div className="App-cards">
          {cards.map(card => <Card key={card.id} {...card} />)}
        </div>) : null}
    </div>

  );
}

export default App;
