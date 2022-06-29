import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Card from './components/Card';
//import katie from './images/image 12.png';
import data from './data';

function App() {
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        /* {...item}*/
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.rating.reviewCount}
        country={item.location}
        title={item.title}
        price={item.price}
        openSpots={item.openSpots}
      />
    )
  })
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>





    </div>
  );
}

export default App;
