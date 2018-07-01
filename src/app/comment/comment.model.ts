import { User } from "../user/user.model";

export interface Comment {
  id: number,
  user: User
  score: number,
  content: string
}