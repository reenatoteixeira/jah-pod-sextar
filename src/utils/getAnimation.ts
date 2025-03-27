import animationVariants from './animationVariants.ts'

function getAnimation() {
  const randomIndex = Math.floor(Math.random() * animationVariants.length)
  return animationVariants[randomIndex]
}

export default getAnimation
