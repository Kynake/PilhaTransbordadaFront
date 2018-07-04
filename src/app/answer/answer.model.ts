import { Comment } from '../comment/comment.model'
import { User } from '../user/user.model';

export interface Answer {
  id: number,
  user: User,
  score: number,
  content: string,
  comments: Comment[]
}