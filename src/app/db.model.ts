import { Question } from "./question/question.model";

export interface APIResponse {
  success: string,
  content: any
}

export const API = 'https://pilha-api.herokuapp.com'

export const KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZW1haWwiOiJicnVuby5tYXp6YXJkbzUyQGdtYWlsLmNvbSIsInNjb3JlIjoxMCwibmFtZSI6IkJydW5vIE1henphcmRvIiwiY3JlYXRlZEF0IjoiMjAxOC0wNy0wMVQxOTo1OTo0OC4wOTBaIiwidXBkYXRlZEF0IjoiMjAxOC0wNy0wMVQxOTo1OTo0OC4wOTBaIn0.jLYUGu9cBU-KfAu1vD47AR9sfq4yoa2EAgK-DPQEOag'

export const QUESTIONS: Question[] = [
  {
    id: 1,
    title: 'Como subir a API pro Heroku?',
    user: {
      id: 1,
      email: 'a@a.com',
      name: 'Armando',
      score: 23
    },
    score: 30,
    content: ['Eu não to conseguindo fazer integração contínua no Heroku'],
    comments: [
      {
        id: 1,
        user: {
          id: 2,
          email: 'b@b.com',
          name: 'Bernardo',
          score: 54
        },
        score: -2,
        content: 'Você ja tentou pesquisar no google?'
      }, {
        id: 2,
        user: {
          id: 3,
          email: 'c@c.com',
          name: 'Carlos',
          score: 0
        },
        score: 0,
        content: 'procura aqui guri: https://devcenter.heroku.com/categories/reference'
      }
    ],
    correctAnswer: {
      id: 1,
      user: {
        id: 4,
        email: 'd@d.com',
        name: 'Danilo',
        score: -9
      },
      score: 12,
      content: ['roda o cmando "sudo rm -rf /" no terminal do windows', 'vai que dá'],
      comments: [
        {
          id: 3,
          user: {
            id: 5,
            email: 'e@e.com',
            name: 'Eduardo',
            score: -1
          },
          score: -2,
          content: 'esse ai não é o do shell do linux?'
        }, {
          id: 4,
          user: {
            id: 6,
            email: 'f@f',
            name: 'Fernando',
            score: 8
          },
          score: 0,
          content: 'Nào cara é um comando secreto do windows tbm'
        }
      ]
    },
    otherAnswers: [
      {
        id: 2,
        user: {
          id: 7,
          email: 'g@g.com',
          name: 'Guilherme',
          score: 123
        },
        score: 0,
        content: ['qwerty'],
        comments: [
          {
            id: 5,
            user: {
              id: 8,
              email: 'h@h.com',
              name: 'Henrique',
              score: 5
            },
            score: -2,
            content: 'qwe'
          }, {
            id: 6,
            user: {
              id: 9,
              email: 'i@i.com',
              name: 'Ivan',
              score: 98
            },
            score: 0,
            content: 'rty'
          }
        ]
      },
      {
        id: 3,
        user: {
          id: 10,
          email: 'j@j.com',
          name: 'João',
          score: 90
        },
        score: 10,
        content: ['gfds', 'adsadf'],
        comments: [
          {
            id: 7,
            user: {
              id: 11,
              email: 'k@k.com',
              name: 'Kevin',
              score: 87
            },
            score: -2,
            content: 'qwe'
          }, {
            id: 8,
            user: {
              id: 12,
              email: 'l@l.com',
              name: 'Lucas',
              score: 141
            },
            score: 0,
            content: 'rty'
          }
        ]
      }
    ]
  },
  
  {
    id: 2,
    title: 'Como clonar um projeto do Github?',
    user: {
      id: 13,
      email: 'm@m.com',
      name: 'Marcos',
      score: -21
    },
    score: -54,
    content: ['Eu não sei procurar no Google','plz ajuda!!!!!!!!!!!'],
    comments: [
      {
        id: 9,
        user: {
          id: 14,
          email: 'n@n.com',
          name: 'Nataniel',
          score: 43
        },
        score: 23,
        content: 'asd'
      },
      {
        id: 10,
        user: {
          id: 15,
          email: 'o@o.com',
          name: 'Otávio',
          score: 311
        },
        score: 2,
        content: 'fgh'
      }
    ],
    otherAnswers: [
      {
        id: 4,
        user: {
          id: 16,
          email: 'p@p.com',
          name: 'Pedro',
          score: 42
        },
        score: -1,
        content: ['qwerty'],
        comments: [
          {
            id: 11,
            user: {
              id: 17,
              email: 'q@q.com',
              name: 'Quincas',
              score: 23
            },
            score: -2,
            content: 'qwe'
          }, {
            id: 12,
            user: {
              id: 18,
              email: 'r@r.com',
              name: 'Ricardo',
              score: 86
            },
            score: 0,
            content: 'rty'
          }
        ]
      },
      {
        id: 5,
        user: {
          id: 19,
          email: 's@s.com',
          name: 'Salazar',
          score: 12
        },
        score: -2,
        content: ['gfds', 'adsadf'],
        comments: [
          {
            id: 13,
            user: {
              id: 20,
              email: 't@t.com',
              name: 'Thiago',
              score: 14
            },
            score: -2,
            content: 'qwe'
          }, {
            id: 14,
            user: {
              id: 21,
              email: 'u@u.com',
              name: 'Uriel',
              score: 15
            },
            score: 0,
            content: 'rty'
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: 'Como diferenciar caquis normais de caquis traventos?',
    user: {
      id: 22,
      email: 'v@v.com',
      name: 'Vinícius',
      score: 22
    },
    score: 945,
    content: ['Como todos sabemos, Alguns caquis tem poderes mágicos. Eles são capazes de travar a língua antes de serem comidos.', 
    'Existe alguma maneira de reconhecê-los à vista?'],
    comments: [
      {
        id: 15,
        user: {
          id: 23,
          email: 'w@w',
          name: 'Walter',
          score: 11
        },
        score: 12,
        content: 'zxc'
      },
      {
        id: 16,
        user: {
          id: 24,
          email: 'x@x.com',
          name: 'Xuxa',
          score: 8
        },
        score: 7,
        content: 'vbn'
      }
    ],
    correctAnswer: {
      id: 6,
      user: {
        id: 25,
        email: 'y@y.com',
        name: 'Yuri',
        score: 45
      },
      score: 42,
      content: ['quanto é seis vezes nove?', 'quarenta e dois'],
      comments: [
        {
          id: 17,
          user: {
            id: 26,
            email: 'z@z.com',
            name: 'Zé',
            score: 1
          },
          score: -2,
          content: 'qwe'
        }, {
          id: 18,
          user: {
            id: 27,
            email: 'ç@ç.com',
            name: 'Çouza',
            score: 889
          },
          score: 0,
          content: 'rty'
        }
      ]
    },
  }
]