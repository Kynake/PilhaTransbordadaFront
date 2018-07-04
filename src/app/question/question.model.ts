import { Comment } from '../comment/comment.model'
import { Answer } from '../answer/answer.model';
import { User } from '../user/user.model';

export interface Question {
  id?: number,
  title: string,
  user?: User,
  score?: number,
  content: string,
  comments?: Comment[],
  correctAnswer?: Answer,
  otherAnswers?: Answer[]
}