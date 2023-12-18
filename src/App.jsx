import { useEffect, useState } from "react";

import styles from "./styles/App.module.css";
import Card from "./components/Card";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://libyantourismapi.vercel.app/places')
    .then(res => res.json())
    .then( data => setData(data));


  },[]);

  return (
    <div className={styles.wrapper}>
     
      <article>
        <h2>Very quick about</h2>
        <p>
          <strong><i>Libya</i></strong>  , oh, what an enchanting destination! Picture this: vast
          stretches of golden desert dunes, ancient ruins that whisper tales of
          civilizations past, and a coastline that kisses the Mediterranean Sea.
          Let's embark on a journey together, shall we? Start your adventure in
          Tripoli, the capital city. Lose yourself in the labyrinthine lanes of
          the historic old town, where you'll find bustling markets, traditional
          cafes, and a vibrant atmosphere that's simply infectious. The Red
          Castle, perched on the hill, offers panoramic views of the city—a
          perfect introduction to Libya's rich history. Now, let the winds of
          exploration carry you to Leptis Magna, an archaeological marvel that
          rivals the grandeur of Rome. Wander through the remarkably preserved
          Roman ruins—theatres, temples, and triumphal arches—all against the
          backdrop of the azure Mediterranean. As the day unfolds, venture into
          the heart of the Sahara Desert. The dunes are a mesmerizing sea of
          gold, shifting and changing with the whims of the wind. Imagine riding
          a camel across this otherworldly landscape, the silence broken only by
          the gentle sway of your mount and the rustle of the desert breeze.
          Feeling a bit adventurous? The Akakus Mountains beckon with their
          prehistoric rock art and hidden oases. A trek through this rugged
          terrain will reward you with breathtaking vistas and a profound
          connection to Libya's natural beauty. But let's not forget the allure
          of the Libyan cuisine. Indulge in local delights like couscous,
          aromatic spices, and succulent grilled meats. Don't miss out on
          sipping traditional mint tea in a tranquil oasis, surrounded by the
          desert's quiet majesty. Libya is a tapestry of history, culture, and
          natural wonders waiting to be explored. So, pack your bags, embrace
          the unknown, and let the charm of Libya captivate your adventurous
          spirit!
        </p>
      </article>

      


      <h2>Famous places to visit</h2>

      <div className={styles.cardsWrapper}>
          
          {
            data?.map((place) => {
              const imageURL = `https://libyantourismapi.vercel.app/places/images/${place.id}`;

              return <Card image={imageURL} title={place.title} description={place.description} popularity={place.popularity}/>;
            })
          }

      </div>


    </div>
  );
}

export default App;
