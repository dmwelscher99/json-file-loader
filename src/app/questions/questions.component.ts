import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service'
import { Question } from '../domain/question'
import { Answer } from '../domain/answer'
import { DiscusionThread } from '../domain/discussionThread'

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  questions: Question[];

  constructor(private questionsService: QuestionsService) { }

  getQuestions(): void {
    this.questionsService.getQuestions()
        .subscribe(questions => this.questions = questions);
  }

  ngOnInit(): void {
    console.log("QuestionsComponent.ngOnInit() fired");
    this.getQuestions();
  }

}
