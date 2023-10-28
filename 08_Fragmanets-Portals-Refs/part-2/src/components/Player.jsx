import { useState, useRef } from 'react';

export default function Player() {
  const playerRef =  useRef(); 

  const [player, setPlayer] = useState(null);

  function handleClick() {
    setPlayer(playerRef.current.value);
  };

  return (
    <section id="player">
      <h2>Welcome {player ?? 'unknown entity' }</h2>
      <p>
        <input ref={playerRef} type="text"  />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
