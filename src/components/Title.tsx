interface TitleProps {
  title: string
}

function Title({ title }: TitleProps) {
  return (
    <h1 className={'text-4xl font-bold sm:text-5xl md:text-7xl'}>{title}</h1>
  )
}

export default Title
