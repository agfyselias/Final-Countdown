import { useRef, useState, type RefObject } from "react";
import ResultModal from "../ResultsModal/ResultsModal";
import type { TimerChallengeNameEnum } from "../../enums/TimerChallenge.enum";
import classes from './TimerChallenge.module.scss';

function TimerChallenge(props: {
  title: TimerChallengeNameEnum,
  targetTime: number,
}) {
  const timer: RefObject<number> = useRef(-1);
  const dialog: RefObject<{ openResultsModal: () => void } | null> = useRef(null);

  const [timeRemaining, seTimeRemaining] = useState(props.targetTime * 1000);
  const timeIsActive = timeRemaining > 0 && timeRemaining < props.targetTime * 1000;

  if (timeRemaining < 1) {
    clearInterval(timer.current);
    openResultsModal();
  }

  function handleTimerReset(): void {
    seTimeRemaining(props.targetTime * 1000);
  }

  function handleStartTimer(): void {
    timer.current = setInterval(() => {
      seTimeRemaining((prevTiemReaming: number) => {
        return prevTiemReaming - 10;
      });
    }, 10);
  }

  function handleStopTimer(): void {
    openResultsModal();
    clearInterval(timer.current);
  }

  function openResultsModal(): void {
    if (!dialog?.current) {
      return;
    }
    dialog.current.openResultsModal();
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={props.targetTime}
        timeRemaining={timeRemaining}
        onTimerReset={handleTimerReset}
      />
      <section className={classes['timer-challenge']}>
        <h2 className={classes['timer-challenge__title']}>{props.title}</h2>
        <p className={classes['timer-challenge__goal']}>
          {props.targetTime} second{props.targetTime > 1 ? 's': ''}
        </p>
        <button
          type="button"
          className={classes['timer-challenge__toggle-time-button']}
          onClick={timeIsActive ? handleStopTimer : handleStartTimer}
        >
          {timeIsActive ? 'Stop' : 'Start'} challenge
        </button>
        <p className={`${timeIsActive ? classes['timer-challenge__indicator--active-challenge'] : ''}`}>
          {timeIsActive ? 'Time is running...' : 'Timer inactive'}
        </p>
      </section>
    </>
  );
}

export default TimerChallenge;
