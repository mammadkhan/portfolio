import Head from 'next/head'
import Nav from '../components/Nav'
import Text from '../components/Text'

export default function Home() {
  return (
    <div className="App">
      <Head>
        <title>Hello World!</title>
        <meta name="description" content="Mammadkhan's website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="backgroundGrad">
        <div className="gradCols" id="color1"></div>
        <div className="gradCols" id="color2"></div>
        <div className="gradCols" id="color3"></div>
      </div>
      <Nav />
      <Text />
    </div>
  )
}
