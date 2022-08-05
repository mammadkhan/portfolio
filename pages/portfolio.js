import Head from 'next/head'
import PortfolioSlider from '../components/PortfolioSlider'

function portfolio() {
  return (
    <div className='portfolio'>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Mammadkhan's website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1 className="portfolioTitle">&lt;h1&gt;Portfolio&lt;&#47;h1&gt;</h1>
      </header>
        <PortfolioSlider />
    </div>
  )
}

export default portfolio