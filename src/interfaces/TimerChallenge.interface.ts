import type { TimerChallengeNameEnum } from "../enums/TimerChallenge.enum";

export interface ITimerChallenge {
  title: TimerChallengeNameEnum,
  targetTime: number, // In seconds
}
