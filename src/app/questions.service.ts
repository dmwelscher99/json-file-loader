import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import questions from '../app/mock-data.json';
import { Question } from '../app/domain/question'
import { Answer } from '../app/domain/answer'
import { DiscusionThread } from '../app/domain/discussionThread'

@Injectable({
  providedIn: 'root'
})

export class QuestionsService {

  constructor() { }

  getQuestions(): Observable<Question[]> {
    console.log("QuestionsService.getQuestions() fired");
    return of(questions);
  }
}
