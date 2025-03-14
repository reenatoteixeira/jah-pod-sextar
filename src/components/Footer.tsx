interface FooterProps {
  link: string;
  target: string;
}

function Footer({link, target}: FooterProps) {
  return (
    <footer
      className={'opacity-30 absolute bottom-0 w-full flex justify-center text-xs text-center py-6 text-slate-950 sm:text-sm md:text-base'}>
      <p>
        Developed&nbsp;with&nbsp;💙&nbsp;by&nbsp;
        <a href={target} className={'transition-all hover:underline hover:text-blue-500'}>
          {link}</a></p>
    </footer>
  )
}

export default Footer;
