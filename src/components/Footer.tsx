interface FooterProps {
  link: string;
  target: string;
}

function Footer({link, target}: FooterProps) {
  return (
    <footer className={'absolute bottom-0 w-full flex justify-center text-center py-6 text-slate-400'}>
      <p>
        Developed&nbsp;with&nbsp;💙&nbsp;by&nbsp;
        <a href={target} className={'transition-all hover:underline hover:text-blue-500'}>
          {link}</a></p>
    </footer>
  )
}

export default Footer;
