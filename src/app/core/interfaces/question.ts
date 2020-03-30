import { IAnswer } from './answer';

export interface IQuestion {
  id: string;
  question: string;
  isImageAnswers: boolean;
  questionContentSrc: string;
  answers: IAnswer[] ;
  rightAnswerId: string;
  userAnswerId: string;
  status: boolean;
}
