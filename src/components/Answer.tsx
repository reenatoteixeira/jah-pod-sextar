interface AnswerProps {
  answer: string
}

function Answer({ answer }: AnswerProps) {
  return <p className={'text-lg sm:text-2xl md:text-3xl'}>{answer}</p>
}

export default Answer
