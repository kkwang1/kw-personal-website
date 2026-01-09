import Head from 'next/head'
import IconItem from '@components/IconItem'
import KeyItem from '@components/KeyItem'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Kelly Wang</title>
        <link rel="shortcut icon" type="image/png" sizes="48x48" href="/favicon48.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon16.png" />
      </Head>

      <main>
        <div className='row'>
        <div className='one-third'>
          <img
            src="/24_kellywang.jpg"
            alt="An image of Kelly Wang, who has short, straight black hair down to their cheekbones and is wearing a dark blue collared shirt. He is smiling in front of a tapestry of the Great Wave Off Kanagawa."
            className='profile-pic'
          />
        </div>
        <div className='two-thirds'>
          <h1>Kelly Wang</h1>
          <p>
            Hello! I'm a Ph.D. student at Northeastern University's Khoury College of Computer Sciences, advised by Dr. Ada Lerner. 
            My research centers <b>marginalized communities' experiences of privacy</b>, particularly queer and queer-adjacent communities. 
            I am interested in how the sociotechnical environment of communities influence the privacy threats they face, 
            including intracommunity tensions, and how we can support the desires of marginalized users to seek <b>safe and meaningful connection</b>.
            Moving forward, I am also interested in doing more work with cross-cultural perspectives. 
          </p>
          <p>
            I obtained a Bachelor's Degree in Computer Science from Carnegie Mellon University, where I learned programming through a mathematics-heavy program while completing a concentration in Human-Computer Interaction focused on the human-centered design process.
            I then entered my current Ph.D. program at Northeastern University, where I have grown an affinity for <b>qualitative research</b>, including <b>reflexive thematic analysis</b> and <b>constructivist grounded theory</b>. 
          </p>
          <p>
            While I retain training in mathematic, algorithmic, scientific, and design thinking, I most enjoy empirical interpretive research that investigates the complexity and nuance of human reality. 
            I particularly enjoy the reading, writing, and occasional translating I do as part of my research!
          </p>
          <p>See my <a href="https://scholar.google.com/citations?user=dK7ZbOoAAAAJ">Google Scholar</a> and <a href="/resume-1-2026.pdf">Resume</a>.</p>
          <h2>Ongoing Projects:</h2>
          <IconItem emoji="&#128203;">
            <p>
              I am collaborating with Eleanor Birrell to investigate <b>privacy protections for vulnerable populations</b>.
          </p>
          <p>
              Specifically, there is a gap in literature around data fiduciary law, a new paradigm of privacy law that would bind corporations to the "best interests" of those whose data they hold.
              We want to explore whether this paradigm is a promising solution to protect vulnerable populations. 
          </p>
          <p>
              We are thus interviewing advocates, activists, and organizers of vulnerable populations to understand the corporate harms threatening the people they work with and envision feasible solutions together to protect against these harms. 
              <b> We are recruiting, and you can sign up <a href="https://cryptpad.fr/form/#/2/form/view/3DdEa91sCwAvX6E1bF6uGalc-R3G6PJtRuHff3Jt4OI/">here</a>!</b>
          </p>
          </IconItem>
          <IconItem emoji="&#127793;">
            <p><b>I am currently in a transitional period of my Ph.D. and would love to collaborate on new projects!</b></p>
          </IconItem>
          <h2>Pre-Prints:</h2>
          <KeyItem>
            <p><u>Kelly Wang</u>, Ruochen Liu, Ada Lerner, Abigail Marsh, Tianshi Li. 2026.<br />
            <b>Precarious But Active: A Look At Privacy Behaviors in Chinese Transformative Fandom on a Censored and Surveilled Internet</b>. Submitted to <i>Proceedings of the Privacy Enhancing Technologies Symposium (PETS '26)</i>, July 20-25, 2026, Calgary, Canada.<br />
            <a href="/precarious-but-active.pdf">pdf</a></p>
          </KeyItem>
          <KeyItem>
            <p><u>Kelly Wang</u>, Ashlee Milton, Leah Rosenbloom, Erika Melder, Ada Lerner, Michael Ann DeVito. 2026.<br />
            <b>"How would I know what I would want from or with them?": Supporting A-Spec Approaches to Developing Relationships Through Online Platforms</b>. Submitted to <i>Proceedings of the CHI Conference on Human Factors in Computing Systems (CHI '26)</i>, April 13-17, 2026, Barcelona, Spain. <i>ACM</i>, New York, NY, USA.<br />
            <a href="/how-would-i-know.pdf">pdf</a></p>
          </KeyItem>
          <h2>Publications:</h2>
          <KeyItem>
            <p><u>Kelly Wang</u>, Dan Bially Levy, Kien T Nguyen, Ada Lerner, and Abigail Marsh. 2024.<br />
            <b>Counting Carrds: Investigating Personal Disclosure and Boundary Management in Transformative Fandom</b>. <i>Proceedings of the CHI Conference on Human Factors in Computing Systems (CHI '24)</i>, May 11-16, 2024, Honolulu, HI, USA. <i>ACM</i>, New York, NY, USA. doi: 10.1145/3613904.3642664.<br />
            <a href="/counting-carrds.pdf">pdf</a></p>
          </KeyItem>
          <h2>Press:</h2>
          <KeyItem>
            <p><b><a href="https://www.khoury.northeastern.edu/khoury-researchers-showcase-record-28-works-at-chi-2024/">Khoury researchers showcase record 28 works at CHI 2024</a></b>. 2024. <i>Khoury News</i>.</p>
          </KeyItem>
        </div>
        </div>
      </main>
    </div>
  )
}
