import { useState, useRef, type RefObject } from "react";
import classes from './Player.module.scss';

function Player() {
  const playerName: RefObject<HTMLInputElement | null> = useRef(null);

  const [typedPlayerName, setTypedPlayerName] = useState('');

  function handleSetNameClick(): void {
    if (!playerName?.current) {
      return;
    }
    setTypedPlayerName(playerName.current?.value);
    playerName.current.value = '';
  }

  return (
    <section className={classes['player']}>
      <h2 className={classes['player__title']}>Welcome {typedPlayerName ? typedPlayerName : 'unknown entity'}</h2>
      <div className={classes['player__actions-container']}>
        <input
          ref={playerName}
          className={classes['player__name-input']}
          type="text"
        />
        <button
          type="button"
          className={classes['player__set-name-button']}
          onClick={handleSetNameClick}
        >
          Set Name
        </button>
      </div>
    </section>
  );
}

export default Player;
