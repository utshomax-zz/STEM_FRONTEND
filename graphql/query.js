
export const quesQuery=`
query quesQuery {
    questions{
      id
      quesid
      Question
      Answer
      OptionA
      OptionB
      OptionC
      OptionD
      Image{
        id
        url
      }
    }
  }
`

