import { Injectable } from '@angular/core';
import { IQuestion } from '../interfaces/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionGameService {
  private questions: IQuestion[] = [
    {
      id: '1',
      question: 'First question?',
      isImageAnswers: false,
      questionContentSrc: '',
      answers: [
        {
          id: '1',
          title: 'Wrong',
        },
        {
          id: '2',
          title: 'Wrong',
        },
        {
          id: '3',
          title: 'Lviv',
        },
        {
          id: '4',
          title: 'Wrong',
        },
      ],
      rightAnswerId: '3',
      userAnswerId: '',
      status: false,
    },
    {
      id: '2',
      question: 'Second question?',
      isImageAnswers: false,
      questionContentSrc: '',
      answers: [
        {
          id: '1',
          title: 'Wrong',
        },
        {
          id: '2',
          title: 'Wrong',
        },
        {
          id: '3',
          title: 'Lviv',
        },
        {
          id: '4',
          title: 'Wrong',
        },
      ],
      rightAnswerId: '3',
      userAnswerId: '',
      status: false,
    },
    {
      id: '3',
      question: 'Third question?',
      isImageAnswers: false,
      questionContentSrc: '',
      answers: [
        {
          id: '1',
          title: 'Wrong',
        },
        {
          id: '2',
          title: 'Wrong',
        },
        {
          id: '3',
          title: 'Lviv',
        },
        {
          id: '4',
          title: 'Wrong',
        },
      ],
      rightAnswerId: '3',
      userAnswerId: '',
      status: false,
    },
  ];
  private currentQuestionId: string =  '1';
  private currentAnswerId: string =  '';

  constructor() { }

  getQuestions(): IQuestion[] {
    return this.questions;
  }
  setAnswer(): void {
    if (this.currentAnswerId === '') {
      alert('Choose answer, please!');
    } else {
      const question = this.questions.find(el => el.id === this.currentQuestionId);
      question.userAnswerId = this.currentAnswerId;
      question.status = true;
      this.currentAnswerId = '';
    }
  }
  getCurrentQuestionId(): string {
    return this.currentQuestionId;
  }
  setCurrentQuestionId(id: string): void {
    this.currentQuestionId = id;
  }
  getCurrentAnswerId(): string {
    return this.currentAnswerId;
  }
  setCurrentAnswerId(id: string): void {
    this.currentAnswerId = id;
  }
  nextQuestion(): void {
    let questionsWithoutAnswer: IQuestion[] = this.questions.filter(el => (el.id === this.currentQuestionId
      || !el.status));
    if (questionsWithoutAnswer.length === 1) {
      alert('All questions completed!');
    } else if (questionsWithoutAnswer.length === 2) {
      questionsWithoutAnswer = questionsWithoutAnswer.filter(el => el.id !== this.currentQuestionId);
      this.currentQuestionId = questionsWithoutAnswer[0].id;
    } else {
      const currentQuestionIndex: number = questionsWithoutAnswer.findIndex(el => el.id === this.currentQuestionId);
      (questionsWithoutAnswer[currentQuestionIndex + 1]) ?
        (this.currentQuestionId = questionsWithoutAnswer[currentQuestionIndex + 1].id) :
        (this.currentQuestionId = questionsWithoutAnswer[0].id);
    }
  }
}
