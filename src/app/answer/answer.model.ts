import { Comment } from '../comment/comment.model'

export interface Answer {
  id: number,
  score: number,
  content: string[],
  comments: Comment[]
}