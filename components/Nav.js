import Link from 'next/link'


function Nav() {
    return (
      <div className="Nav">
          <nav>
            <Link href='/Mammadkhan Bayramov CV.pdf'>
              <a>CV</a>
            </Link>
            <Link href="/portfolio">
              <a id="portfolio">portfolio</a>
            </Link>
          </nav>
      </div>
    )
  }
  
  export default Nav