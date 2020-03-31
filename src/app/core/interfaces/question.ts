import { IAnswer } from './answer';

export interface IQuestion {
  id: string;
  question: string;
  isImageAnswers: boolean;
  isContentVideo: boolean,
  questionContentSrc: string;
  answers: IAnswer[] ;
  rightAnswerId: string;
  userAnswerId: string;
  status: boolean;
}
