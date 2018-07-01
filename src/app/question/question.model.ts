import { Comment } from '../comment/comment.model'

export interface Question {
  id: number,
  title: string,
  score: number,
  content: string[],
  comments?: Comment[]
}