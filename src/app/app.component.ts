import { Component } from '@angular/core';
// import questions from '../app/mock-data.json';
import { Question } from '../app/domain/question'
import { Answer } from '../app/domain/answer'
import { DiscusionThread } from '../app/domain/discussionThread'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'json-file-loader';
  
  // public questionList:{Question}[] = questions;
}
