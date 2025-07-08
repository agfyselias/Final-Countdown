import { TimerChallengeNameEnum } from "../enums/TimerChallenge.enum";
import type { ITimerChallenge } from "../interfaces/TimerChallenge.interface";

export const TIMER_CHALLENGES: ITimerChallenge[] = [
  {
    title: TimerChallengeNameEnum.EASY,
    targetTime: 1,
  },
    {
    title: TimerChallengeNameEnum.NOT_EASY,
    targetTime: 5,
  },
  {
    title: TimerChallengeNameEnum.GETTING_TOUGH,
    targetTime: 10,
  },
  {
    title: TimerChallengeNameEnum.PROS_ONLY,
    targetTime: 15,
  },
];
