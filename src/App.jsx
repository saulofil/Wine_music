import React, { useState } from "react";
import "./App.css";

// Lista de músicas com a URL de arquivos locais
const songs = [
  { title: "Norah Jones - Don't Know Why", url: "/MUSIC/Norah Jones - Don't Know Why.mp3" },
  { title: "Etta James - At Last", url: "/MUSIC/Etta James - At Last.mp3" },
  { title: "Billie Holiday - Blue Moon", url: "/MUSIC/Billie Holiday - Blue Moon.mp3" },
  { title: "Billy Joel - Piano Man", url: "/MUSIC/Billy Joel - Piano Man.mp3" },
  { title: "Frank Sinatra - Fly Me to the Moon", url: "/MUSIC/Frank Sinatra - Fly Me to the Moon.mp3" },
  { title: "Diana Krall - The Look of Love", url: "/MUSIC/Diana Krall - The Look of Love.mp3" },
  { title: "Madeleine Peyroux - Dance Me to the End of Love", url: "/MUSIC/Madeleine Peyroux - Dance Me to the End of Love.mp3" },
  { title: "Eva Cassidy - Fields of Gold", url: "/MUSIC/Eva Cassidy - Fields of Gold.mp3" },
];

export default function App() {
  const [currentSongIndex, setCurrentSongIndex] = useState(null);

  const handleSongClick = (index) => {
    setCurrentSongIndex(index);
  };

  const handleSongEnd = () => {
    // Toca a próxima música automaticamente
    setCurrentSongIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % songs.length; // Volta para o início após a última música
      return nextIndex;
    });
  };

  return (
    <div className="app-container">
      {/* Conteúdo principal dividido em duas colunas */}
      <div className="content-container">
        {/* Coluna da esquerda - Lista de músicas */}
        <div className="left-section">
          <h1 className="title">Wine Night Music</h1>
          <ul className="song-list">
            {songs.map((song, index) => (
              <li key={index} className="song-item">
                <button
                  onClick={() => handleSongClick(index)}
                  className="song-button"
                >
                  {song.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Coluna da direita - Player de áudio */}
        <div className="right-section">
          {currentSongIndex !== null ? (
            <>
              {/* GIF */}
              <div className="gif-container">
                <img
                  src="./GIF/vinho.gif" // Caminho para o GIF local
                  alt="music-playing-gif"
                  className="music-gif"
                />
              </div>
              
              {/* Player de áudio */}
              <audio
                controls
                autoPlay
                onEnded={handleSongEnd}
                key={songs[currentSongIndex].url}
              >
                <source src={songs[currentSongIndex].url} type="audio/mp3" />
                Seu navegador não suporta o formato de áudio.
              </audio>
              
              {/* Nome da música */}
              <p className="now-playing">Agora tocando: {songs[currentSongIndex].title}</p>
            </>
          ) : (
            <p>Selecione uma música para começar!</p>
          )}
        </div>
      </div>
    </div>
  );
}
