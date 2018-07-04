import { Question } from "./question/question.model";

export interface APIResponse {
  success: boolean,
  content: any
}

export const API = 'https://pilha-api.herokuapp.com'

export const KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZW1haWwiOiJicnVuby5tYXp6YXJkbzUyQGdtYWlsLmNvbSIsInNjb3JlIjowLCJuYW1lIjoiQnJ1bm8gTWF6emFyZG8iLCJjcmVhdGVkQXQiOiIyMDE4LTA3LTAyVDE3OjIzOjExLjA5M1oiLCJ1cGRhdGVkQXQiOiIyMDE4LTA3LTAyVDE3OjIzOjExLjA5M1oifQ.6hMm8tZxDr_SDCmLGrdGJbbcYNspXw5XtOl5bJ4K1xs'