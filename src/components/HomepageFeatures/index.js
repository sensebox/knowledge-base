import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import ArduinoCategoryIcon from '@site/static/img/category-icons/arduino.png';
import BlocklyCategoryIcon from '@site/static/img/category-icons/blockly.png';
import HardwareCategoryIcon from '@site/static/img/category-icons/hardware.png';
import openSenseMapCategoryIcon from '@site/static/img/category-icons/osem.png';
import homeCategoryIcon from '@site/static/img/category-icons/home.png';
import senseBoxCategoryIcon from '@site/static/img/category-icons/senseBox.png';
import miscCategoryIcon from '@site/static/img/category-icons/allgemein.png';
const FeatureList = [
  {
    title: 'Blockly',
    Image: BlocklyCategoryIcon,
    description: (
      <>
        Informationen zur visuellen Programmierumgebung Blockly für senseBox.
      </>
    ),
    to: '/blockly'
  },
  {
    title: 'Arduino',
    Image: ArduinoCategoryIcon,
    description: (
      <>Erste Schritte mit deiner senseBox und der Arduino IDE
      </>
    ),
    to: '/arduino'
  },
  {
    title: 'Hardware & Komponenten',
    Image: HardwareCategoryIcon,
    description: (
      <>
        Informationen zum Anschluss und Programmierung der Sensoren, Bees und weiteren Bauteilen
      </>
    ),
    to: '/hardware'

  },
  {
    title: 'Verschiedenes',
    Image: miscCategoryIcon,
    description: (
      <>
        Verschiedene Dokumentationen zur senseBox
      </>
    ),
    to: '/misc'
  },
  {
    title: 'senseBox:home',
    Image: homeCategoryIcon,
    description: (
      <>
        Informationen zum Aufbau & Erweiterungen
      </>
    ),
    to: '/sensebox-home'
  },
  {
    title: 'openSenseMap',
    Image: openSenseMapCategoryIcon,
    description: (
      <>
        Informationen zur API, zum Verwalten der senseBox, zum Datendownload, luftdaten.info, hackAIR
      </>
    ),
    to: '/openSenseMap'
  },
  {
    title: 'senseBox:tutorials',
    Image: senseBoxCategoryIcon,
    description: (
      <>
        Informationen zum Aufbau & Erweiterungen
      </>
    ),
    to: '/sensebox-tutorials'
  },
];

function Feature({Image, title, description, to}) {
  return (
    <Link className={clsx('w-[30%] flex flex-col items-center border-2 shadow-xl rounded-lg border-slate-200 p-6 hover:shadow-2xl ')} to={to}>
      <div className="border-slate-400">
        <img src={Image} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h1 className='text-2xl font-bold'>{title}</h1>
        <p>{description}</p>
      </div>
    </Link>

  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="flex flex-row flex-wrap justify-center gap-4">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
