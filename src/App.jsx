import React, { useState } from "react";
import "./App.css";

const songs = [
  { title: "Norah Jones - Don't Know Why", url: "https://www.youtube.com/embed/tO4dxvguQDk" },
  { title: "Etta James - At Last", url: "https://www.youtube.com/embed/1qJU8G7gR_g" },
  { title: "Billie Holiday - Blue Moon", url: "https://www.youtube.com/embed/y4bZu56EylA" },
  { title: "Billy Joel - Piano Man", url: "https://www.youtube.com/embed/QwVjTlTdIDQ" },
  { title: "Frank Sinatra - Fly Me to the Moon", url: "https://www.youtube.com/embed/ZEcqHA7dbwM" },
  { title: "Diana Krall - The Look of Love", url: "https://www.youtube.com/embed/Yr8xDSPjII8" },
  { title: "Madeleine Peyroux - Dance Me to the End of Love", url: "https://www.youtube.com/embed/n2m_3OQtFNc" },
  { title: "Eva Cassidy - Fields of Gold", url: "https://www.youtube.com/embed/9UVjjcOUJLE" },
  { title: "Sade - Smooth Operator", url: "https://www.youtube.com/embed/rS7Va0sBYAM" },
  { title: "John Coltrane & Duke Ellington - In a Sentimental Mood", url: "https://www.youtube.com/embed/sCQfTNOC5aE" },
];

export default function App() {
  const [currentSong, setCurrentSong] = useState(null);

  return (
    <div className="app-container">
      {/* Conteúdo principal dividido em duas colunas */}
      <div className="content-container">
        {/* Coluna da esquerda - Lista de músicas */}
        <div className="left-section">
          <h1 className="title">10 Músicas para Curtir Sexta à Noite com um Bom Vinho</h1>
          <ul className="song-list">
            {songs.map((song, index) => (
              <li key={index} className="song-item">
                <button
                  onClick={() => setCurrentSong(song.url)}
                  className="song-button"
                >
                  {song.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Coluna da direita - Player do YouTube */}
        <div className="right-section">
          {currentSong ? (
            <iframe
              src={currentSong}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <p>Selecione uma música para começar!</p>
          )}
        </div>
      </div>
    </div>
  );
}
