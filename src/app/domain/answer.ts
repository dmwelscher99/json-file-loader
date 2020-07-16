import { DiscusionThread } from '../domain/discussionThread'

export interface Answer {
    user: string;
    upVotes: number;
    markdownText: string;
    updateTimestamp: string;
    discusionThreads: DiscusionThread[];
  }