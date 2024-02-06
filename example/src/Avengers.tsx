import React from 'react';
import { ZoomerImage } from "../../src";
import Avenger from './components/Avenger';

const ironMan = './images/iron-man.jpg';
const ironMan2 = './images/iron-man-stark.jpg';
const ironMan3 = './images/iron-man-portrait.jpg';
const tonyStark = './images/tony-stark.jpg';

const steveRogers = './images/steve-rogers.jpg';
const steveRogers2 = './images/steve-rogers-portrait.jpg';
const captainAmerica = './images/captain-america.jpg';
const captainAmerica2 = './images/captain-america-rogers.jpg';

const peterParker = './images/peter-parker.jpg';
const spiderMan = './images/spider-man.jpg';
const spiderMan2 = './images/spider-man-parker.jpg';

const Avengers = () => {
  return (
    <>
      <div className="intro">
        <h1>React Zoomer Image</h1>
        <h3>Click on images to see <i>React Zoomer Image</i> on action. Enjoy! 😎</h3>
      </div>

      <hr />

      <div className="avengers">
        <header className="avengers-header">
          <h2>The Avengers</h2>
        </header>
        <div className="avengers-body">
          <Avenger
            name={'Tony Stark - Iron Man'}
            images={[
              <ZoomerImage
                zoomId='tony-stark'
                imgAlt='Tony Stark'
                imgTitle='Tony Stark'
                imgSrc={tonyStark}
              />,
              <ZoomerImage
                zoomId='iron-man'
                imgAlt='Iron Man'
                imgTitle='Iron Man'
                imgSrc={ironMan}
              />,
              <ZoomerImage
                zoomId='iron-man-2'
                imgAlt='Iron Man'
                imgTitle='Iron Man'
                imgSrc={ironMan2}
              />
            ]}
            source='https://en.wikipedia.org/wiki/Iron_Man'
          >
            <div className="row">
              <div className="col col--3">
                <ZoomerImage
                  zoomId='iron-man-3'
                  imgAlt='Iron Man'
                  imgTitle='Iron Man'
                  imgSrc={ironMan3}
                />
              </div>

              <div className="col col--9">
                <p>
                  Anthony Edward Stark is the son of wealthy industrialist and head of Stark Industries,
                  Howard Stark, and Maria Stark. A boy genius, he enters MIT at the age of 15 to study
                  engineering and later receives master's degrees in engineering and physics.
                  After his parents are killed in a car accident, he inherits his father's company.
                </p>
                <p>
                  Stark is injured by a booby trap and captured by enemy forces led by Wong-Chu.
                  Wong-Chu orders Stark to build weapons, but Stark's injuries are dire and shrapnel
                  is moving towards his heart. His fellow prisoner, Ho Yinsen, a Nobel Prize-winning
                  physicist whose work Stark had greatly admired during college, constructs a magnetic
                  chest plate to keep the shrapnel from reaching Stark's heart.
                </p>
              </div>
            </div>
            <p>
              In secret, Stark and Yinsen use the workshop to design and construct a suit of
              powered armor, which Stark uses to escape. During the escape attempt, Yinsen
              sacrifices his life to save Stark's by distracting the enemy as Stark recharges.
              Stark takes revenge on his kidnappers and rejoins the American forces, on his way
              meeting a wounded American Marine fighter pilot, James 'Rhodey' Rhodes.
            </p>
          </Avenger>

          <hr />

          <Avenger
            name={'Steven "Steve" Rogers - Captain America'}
            images={[
              <ZoomerImage
                zoomId='steve-rogers'
                imgTitle='Steve Rogers'
                imgSrc={steveRogers}
              />,
              <ZoomerImage
                zoomId='capt-america'
                imgTitle='Captain America'
                imgSrc={captainAmerica}
              />,
              <ZoomerImage
                zoomId='capt-america-2'
                imgTitle='Captain America'
                imgSrc={captainAmerica2}
              />
            ]}
            source='https://en.wikipedia.org/wiki/Captain_America'
          >
            <div className="row">
              <div className="col col--9">
                <p>
                  Steven Rogers was born in the Lower East Side of Manhattan, New York City,
                  in 1920 to poor Irish immigrants, Sarah and Joseph Rogers. Joseph died
                  when Steve was a child, and Sarah died of pneumonia while Steve was a teen.
                  By early 1940, before America's entry into World War II, Rogers is a tall,
                  scrawny fine arts student specializing in illustration and a comic book writer
                  and artist.
                </p>
                <p>
                  Disturbed by Adolf Hitler's rise to power, Rogers attempts to enlist but is
                  rejected due to his frail body. His resolution attracts the notice of
                  U.S. Army General Chester Phillips and 'Project: Rebirth'. Rogers is used as a
                  test subject for the Super-Soldier project, receiving a special serum made by
                  'Dr. Josef Reinstein'.
                </p>
                <p>
                  The serum is a success and transforms Steve Rogers into a nearly perfect human being
                  with peak strength, agility, stamina, and intelligence.
                </p>
              </div>
              <div className="col col--3">
                <ZoomerImage
                  zoomId='steve-rogers-2'
                  imgTitle='Captain America'
                  imgSrc={steveRogers2}
                />
              </div>
            </div>
            <p>
              The process itself has been inconsistently detailed: While in the original material
              Rogers is shown receiving injections of the Super-Serum, when the origin was retold
              in the 1960s, the Comic Code Authority had already put a veto over graphic
              description of drug intake and abuse, and thus the Super-Serum was retconned into
              an oral formula. Later accounts hint at a combination of oral and intravenous
              treatments with a strenuous training regimen, culminating in the Vita-Ray exposure.
            </p>
          </Avenger>

          <hr />

          <Avenger
            name={'Peter Parker - Spider-Man'}
            images={[
              <ZoomerImage
                zoomId='peter-parker'
                imgTitle='Peter Parker'
                imgSrc={peterParker}
              />,
              <ZoomerImage
                zoomId='spidey'
                imgTitle='Spider Man'
                imgSrc={spiderMan}
              />,
              <ZoomerImage
                zoomId='spidey-2'
                imgTitle='Spider-Man'
                imgSrc={spiderMan2}
              />
            ]}
            source='https://marvel.fandom.com/wiki/Peter_Parker_(Earth-616)'
          >
            <p>
              Peter Benjamin Parker was born in Queens to Richard and Mary Parker.While Peter
              was still an infant, his parents were assigned by the CIA to infiltrate the
              Algerian based spy ring controlled by the communist agent, the Red Skull.
              The moment the Red Skull learned that Richard and Mary were double agents,
              he had them killed by one of his agents, the Finisher, in an airplane crash
              overseas and then framed them for treason.
            </p>
            <p>
              An orphaned Peter went to live with his uncle and aunt, Ben and May Parker,
              in Forest Hills, New York; they became Peter’s surrogate parents and raised him
              as if he were their own son.
            </p>
            <p>
              While attending a public exhibition demonstrating the safe handling of nuclear
              laboratory waste materials, sponsored by the General Techtronics Corporation,
              the 15-year-old Peter Parker was bitten on the hand by a spider that had been
              irradiated by a particle accelerator used in the demonstration.<br />
              Peter discovered he had somehow gained incredible strength, agility, and the
              ability to cling to walls, spider-like traits that he immediately associated with
              the spider bite.
            </p>
          </Avenger>
        </div>
        <hr />
      </div>
      <p className="follow">
        Follow on{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Sanfra1407/react-zoomer-image"
        >
          GitHub
        </a>
      </p>
    </>
  );
}

export default Avengers;