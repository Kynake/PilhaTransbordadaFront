import { Comment } from '../comment/comment.model'
import { Answer } from '../answer/answer.model';

export interface Question {
  id: number,
  title: string,
  score: number,
  content: string[],
  comments?: Comment[],
  correctAnswer?: Answer,
  otherAnswers?: Answer[]
}