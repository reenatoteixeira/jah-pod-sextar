import getAnimation from '../utils/getAnimation.ts'
import { motion } from 'framer-motion'

interface AnswerProps {
  answer: string
}

function Answer({ answer }: AnswerProps) {
  const animation = getAnimation()

  return (
    <motion.div
      key={answer}
      initial={animation.initial}
      animate={animation.animate}
      exit={animation.exit}
      transition={animation.transition}
    >
      <p className={'text-lg sm:text-2xl md:text-3xl'}>{answer}</p>
    </motion.div>
  )
}

export default Answer
