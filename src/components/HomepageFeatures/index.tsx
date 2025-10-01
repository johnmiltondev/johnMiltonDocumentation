import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Fácil de usar',
    Svg: require('@site/static/img/icons/browser.svg').default,
    description: (
      <>
        Esta página fue diseñada para tener un manual de documentación de facil acceso.
      </>
    ),
  },
  {
    title: 'Strapi',
    Svg: require('@site/static/img/icons/strapi.svg').default,
    description: (
      <>
        Podras revisar informacion y guias relacionadas al backend de la web oficial en donde se usa la plataforma de Strapi.
      </>
    ),
  },
  {
    title: 'Developer Info',
    Svg: require('@site/static/img/icons/development.svg').default,
    description: (
      <>
        Tambien encontrarás una sección especial para desarrolladores en donde se explica mas a detalle como funciona la web en terminos mas técnicos.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
