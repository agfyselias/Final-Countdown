import Player from './components/Player/Player';
import TimerChallenge from './components/TimerChallenge/TimerChallenge';
import type { ITimerChallenge } from './interfaces/TimerChallenge.interface';
import { TIMER_CHALLENGES } from './mocks/TimerChallenges.mock';
import classes from './App.module.scss';

function App() {
  return (
    <>
      <Player />
      <div className={classes['app__timer-challenges']}>
        {TIMER_CHALLENGES.map((timerChallenge: ITimerChallenge, timerChallengeIndex: number) => 
          <TimerChallenge
            key={`timer-challenge-${timerChallengeIndex}-${timerChallenge.title}-${timerChallenge.targetTime}`}
            title={timerChallenge.title}
            targetTime={timerChallenge.targetTime}
          />
        )}
      </div>
    </>
  )
}

export default App;
