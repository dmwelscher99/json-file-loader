import { Answer } from '../domain/answer'
import { DiscusionThread } from '../domain/discussionThread'

export interface Question {
  title: string;
  markdownText: string;
  user: string;
  upVotes: number;
  tags: string[];
  updateTimestamp: string;
  discusionThreads: DiscusionThread[];
  answers: Answer[];
}


