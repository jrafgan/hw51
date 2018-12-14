import React, {Component} from 'react';
import Card from "./Card/Card.js";
import './App.css'


const films = [
    {
        title: "Аватар",
        year: "2009",
        img: "http://kinogo.cc/uploads/posts/2013-06/1370098159_avatar.jpg",
    },
    {
        title: "Армагеддон",
        year: "1998",
        img: "http://kinogo.cc/uploads/posts/2013-06/thumbs/1372428577_armageddon.jpg",
    },
    {
        title: "Игры разума",
        year: "2001",
        img: "http://kinogo.cc/uploads/posts/2013-07/thumbs/1373135315_igryrazuma.jpg"
    }
];


class App extends Component {
  render() {
      return (
          <div className="grid-container">
              <section>
                  {films.map ((film, key) => {
                      return <Card key={key} title={film.title} year={film.year} img={film.img} link={film.link}/>
                  })}
              </section>
          </div>
      )
    };
}

export default App;
