import { Question } from "./question/question.model";

export const QUESTIONS: Question[] = [
  {
    id: 1,
    title: 'Como subir a API pro Heroku?',
    score: 30,
    content: ['Eu não to conseguindo fazer integração contínua no Heroku'],
    comments: [
      {
        id: 1,
        score: -2,
        content: 'Você ja tentou pesquisar no google?'
      }, {
        id: 2,
        score: 0,
        content: 'procura aqui guri: https://devcenter.heroku.com/categories/reference'
      }
    ],
    correctAnswer: {
      id: 1,
      score: 12,
      content: ['roda o cmando "sudo rm -rf /" no terminal do windows', 'vai que dá'],
      comments: [
        {
          id: 3,
          score: -2,
          content: 'esse ai não é o do shell do linux?'
        }, {
          id: 4,
          score: 0,
          content: 'Nào cara é um comando secreto do windows tbm'
        }
      ]
    },
    otherAnswers: [
      {
        id: 2,
        score: 0,
        content: ['qwerty'],
        comments: [
          {
            id: 5,
            score: -2,
            content: 'qwe'
          }, {
            id: 6,
            score: 0,
            content: 'rty'
          }
        ]
      },
      {
        id: 3,
        score: 10,
        content: ['gfds', 'adsadf'],
        comments: [
          {
            id: 7,
            score: -2,
            content: 'qwe'
          }, {
            id: 8,
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
    score: -54,
    content: ['Eu não sei procurar no Google','plz ajuda!!!!!!!!!!!'],
    comments: [
      {
        id: 9,
        score: 23,
        content: 'asd'
      },
      {
        id: 10,
        score: 2,
        content: 'fgh'
      }
    ],
    otherAnswers: [
      {
        id: 4,
        score: -1,
        content: ['qwerty'],
        comments: [
          {
            id: 11,
            score: -2,
            content: 'qwe'
          }, {
            id: 12,
            score: 0,
            content: 'rty'
          }
        ]
      },
      {
        id: 5,
        score: -2,
        content: ['gfds', 'adsadf'],
        comments: [
          {
            id: 13,
            score: -2,
            content: 'qwe'
          }, {
            id: 14,
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
    score: 945,
    content: ['Como todos sabemos, Alguns caquis tem poderes mágicos. Eles são capazes de travar a língua antes de serem comidos.', 
    'Existe alguma maneira de reconhecê-los à vista?'],
    comments: [
      {
        id: 15,
        score: 12,
        content: 'zxc'
      },
      {
        id: 16,
        score: 7,
        content: 'vbn'
      }
    ],
    correctAnswer: {
      id: 6,
      score: 42,
      content: ['quanto é seis vezes nove?', 'quarenta e dois'],
      comments: [
        {
          id: 17,
          score: -2,
          content: 'qwe'
        }, {
          id: 18,
          score: 0,
          content: 'rty'
        }
      ]
    },
  }
]