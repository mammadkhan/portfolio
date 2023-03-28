import Head from "next/head";
import Image from "next/image";

import { portfoliodata } from "../data/portfoliodata";

function Portfolio() {
  return (
    <div className="portfolio">
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Mammadkhan's website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1 className="portfolioTitle">&lt;h1&gt;Portfolio&lt;&#47;h1&gt;</h1>
      </header>
      <main className="portfolioGrid">
        {portfoliodata.map((website, index) => (
          <a href={website.domain} key={index} className="portfolioItem" target="_blank">
            <div className="itemTools">
              {website.tools.map((tool, index) => (
                <Image src={tool} key={index} />
              ))}
            </div>
            <div className="itemImage">
              <Image src={website.imgUrl} layout="fill" priority={true} objectFit="contain" />
            </div>
            <div className="itemInfo">
              <h2 className="itemTitle">{website.title}</h2>
              <p className="itemDomainPreview">{website.domainPreview}</p>
            </div>
          </a>
        ))}
      </main>
    </div>
  );
}

export default Portfolio;
