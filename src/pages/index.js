import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function Feature({imageUrl, url, title, shortDescription, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', 'center', 'test', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <a href={url}><img className={styles.featureImage, 'round'} src={imgUrl} alt={title} /></a>
        </div>
      )}
      <a href={url}><h3>{title}</h3></a>
      <h4><i>{shortDescription}</i></h4>
      <p>{description}</p>
    </div>
  );
}

const features = [
  {
    title: <>BlockScience</>,
    url: 'https://block.science/',
    imageUrl: 'img/blockscience-logo.png',
    shortDescription: 'Complex systems engineering',
    description: (
      <>
        Our focus is to design and build data-driven decision systems for new and legacy businesses leveraging engineering methodologies and academic-grade tools.
      </>
    ),
  },
  {
    title: <>CadCAD</>,
    url: 'https://cadcad.org/',
    imageUrl: 'img/cadcad-logo.png',
    shortDescription: 'Complex systems modeling toolkit',
    description: (
      <>
        An open-source Python package that assists in the processes of designing, testing and validating complex systems through simulation.
      </>
    ),
  },
  {
    title: <>SourceCred</>,
    url: 'https://sourcecred.io',
    imageUrl: 'img/sourcecred-logo.png',
    shortDescription: 'CredRank all the things',
    description: (
      <>
        A tool for communities to measure and reward value creation.
      </>
    ),
  },
  {
    title: <>AraCred</>,
    url: 'https://aracred.github.io/website/',
    imageUrl: 'img/aracred-logo.png',
    shortDescription: 'Recognize and reward community contributions',
    description: (
      <>
        An autonomous framework to help communities measure, recognize, and reward value creation.
      </>
    ),
  },
  {
    title: <>MetaGame</>,
    url: 'https://metagame.wtf/',
    imageUrl: 'img/metagame-logo.png',
    shortDescription: 'A MMORPG for real life',
    description: (
      <>
        It's super cool. Just trust us on this one.
      </>
    ),
  },
];


function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Because tokens don't engineer themselves!<head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <img className={styles.featureImage, 'round'} src='img/te-logo.png' />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/doc1')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className={"row"}>
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
