import Head from "next/head";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

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
        {portfoliodata.map((website) => (
          <a
            href={website.domain}
            className="portfolioItem"
            target="_blank"
            key={uuidv4()}
          >
            <div className="itemTools">
              {website.tools.map((tool) => (
                <Image src={tool} />
              ))}
            </div>
            <div className="itemImage">
              <Image src={website.imgUrl} layout="fill" objectFit="contain" />
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
