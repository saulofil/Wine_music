import React, { useState, useEffect } from "react";
import "./App.css";

// Dados das músicas (Agora, só precisamos do videoId)
const songs = [
  { title: "Norah Jones - Don't Know Why", videoId: "tO4dxvguQDk" },
  { title: "Etta James - At Last", videoId: "1qJU8G7gR_g" },
  { title: "Billie Holiday - Blue Moon", videoId: "y4bZu56EylA" },
  { title: "Billy Joel - Piano Man", videoId: "QwVjTlTdIDQ" },
  { title: "Frank Sinatra - Fly Me to the Moon", videoId: "ZEcqHA7dbwM" },
  { title: "Diana Krall - The Look of Love", videoId: "Yr8xDSPjII8" },
  { title: "Madeleine Peyroux - Dance Me to the End of Love", videoId: "n2m_3OQtFNc" },
  { title: "Eva Cassidy - Fields of Gold", videoId: "9UVjjcOUJLE" },
  { title: "Sade - Smooth Operator", videoId: "rS7Va0sBYAM" },
  { title: "John Coltrane & Duke Ellington - In a Sentimental Mood", videoId: "sCQfTNOC5aE" },
];

export default function App() {
  const [currentSongId, setCurrentSongId] = useState(null);
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    // Carrega a YouTube IFrame API
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Função callback da API
    window.onYouTubeIframeAPIReady = () => {
      setPlayer(new window.YT.Player('player', {
        height: '360',
        width: '640',
        videoId: '',
        events: {
          onReady: onPlayerReady,
        },
      }));
    };
  }, []);

  const onPlayerReady = (event) => {
    // Função quando o player estiver pronto
  };

  // Carrega o vídeo quando uma nova música é selecionada
  useEffect(() => {
    if (player && currentSongId) {
      player.loadVideoById(currentSongId);
    }
  }, [currentSongId, player]);

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
                  onClick={() => setCurrentSongId(song.videoId)}
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
          <div id="player"></div>
          {!currentSongId && <p>Selecione uma música para começar!</p>}
        </div>
      </div>
    </div>
  );
}
