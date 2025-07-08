import { useImperativeHandle, useRef, type RefObject, } from "react";
import { createPortal } from 'react-dom'; // Render component in the 'modal' container, outside of it's original place
import classes from './ResultsModal.module.scss';

function ResultModal(props: {
  ref: RefObject<{ openResultsModal: () => void } | null>,
  targetTime: number,
  timeRemaining: number,
  onTimerReset: () => void,
}) {
  const dialog: RefObject<HTMLDialogElement | null> = useRef(null);

  const userLost: boolean = props.timeRemaining < 1;
  const formatedRemainingTime: string = (props.timeRemaining / 1000).toFixed(2);
  const score = Math.round((1 - props.timeRemaining / (props.targetTime * 1000)) * 100);

  // Expose callable functions outside of the component
  useImperativeHandle(props.ref, () => {
    return {
      openResultsModal() {
        showResultsModal();
      },
    };
  });

  function showResultsModal(): void {
    if (!dialog.current) {
      return;
    }
    dialog.current.showModal();
  }

  return createPortal(
    <dialog
      ref={dialog}
      className={classes['results-modal']}
      onClose={props.onTimerReset} // Handle ESC click
    >
      <h2 className={classes['results-modal__title']}>
        {userLost
          ? 'You lost!'
          : `Your Score: ${score}`
        }
      </h2>
      <p>The target time was <strong>{props.targetTime} second.</strong></p>
      <p>You stopped the timer with <strong>{formatedRemainingTime} seconds left</strong></p>
      <form
        method="dialog"
        className={classes['results-modal__close-button-container']}
        onSubmit={props.onTimerReset}
      >
          <button
            type="submit"
            className={classes['results-modal__close-button']}
          >
            Close
          </button>
      </form>
    </dialog>,
    document.getElementById('modal')!
  );
}

export default ResultModal;
