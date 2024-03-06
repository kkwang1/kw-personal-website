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
          <h1>Kelly Wang (he/they)</h1>
          <p>
            Hello! I'm a PhD student at Northeastern University's Khoury College of Computer
            Sciences, advised by Dr. Ada Lerner. Previously, I got a BS in Computer Science
            at Carnegie Mellon University with a concentration in Human-Computer Interaction.
          </p>
          <p>
            My research centers <b>marginalized communities' experiences of privacy</b> - 
            particularly in relation to the formation of trusting communities or interpersonal
            relationships - and how we can support their community and privacy wants as HCI
            researchers. I'm also interested in <b>design futuring</b> and how privacy scholars can be
            inspired by futuring done by vulnerable populations.
          </p>
          <p>If you would like to get in touch, feel free to contact me at <a href="mailto:wang.kelly1@northeastern.edu">wang.kelly1@northeastern.edu</a>.</p>
          <h2>What I'm Looking Forward To:</h2>
          <IconItem emoji="&#128198;">
            <p>The <a href="https://recapworkshop.online/">Re-Imagining Cryptography and Privacy Workshop</a> at Boston University May 2-3!</p>
          </IconItem>
          <IconItem emoji="&#128198;">
            <p>The <a href="https://northeasthcimeeting.info/">Northeast HCI Meeting</a> at Carnegie Mellon May 8-10!</p>
          </IconItem>
          <h2>Current Projects:</h2>
          <KeyItem>
            <p><b>Privacy and censorship in Chinese-language fandom</b>: an interview study investigating the experiences of Chinese-speaking fans as they navigate state surveillance and censorship while pursuing community and fan activities. <u>We are currently looking for participants!</u> More details here: <a href="https://chinesefandom.sites.northeastern.edu/">https://chinesefandom.sites.northeastern.edu/</a>.</p>
          </KeyItem>
          <KeyItem>
            <p><b>Identifying synergies and conflicts between prospective privacy law and activist futuring</b>: a found data study comparing the futures described by new law paradigms proposed by law scholars and the desired futures expressed by vulnerable populations via futuring in activist organizations (who are affected by privacy law but may or may not be primarily concerned with privacy issues).</p>
          </KeyItem>
          <KeyItem>
            <p><b>Supporting aspec (asexual and aromantic spectra) possibility in HCI</b>: an ARC study exploring the relationship that aspec people have with technology and how this might limit, but also might potentially enable, the manifestation of reimagined interpersonal relationships and societal structures that aspec people dream of.</p>
          </KeyItem>
          <h2>Publications:</h2>
          <KeyItem>
            <p><u>Kelly Wang</u>, Dan Bially Levy, Kien T Nguyen, Ada Lerner, and Abigail Marsh. 2024.<br />
            <b>Counting Carrds: Investigating Personal Disclosure and Boundary Management in Transformative Fandom</b>. <i>Proceedings of the CHI Conference on Human Factors in Computing Systems (CHI '24)</i>, May 11-16, 2024, Honolulu, HI, USA. <i>ACM</i>, New York, NY, USA. (To Appear)<br />
            <a href="/counting-carrds.pdf">pre-print</a></p>
          </KeyItem>
          <p className='short-bottom'>Not technically my publication, but check out the queer HCI literature review I helped analyze:</p>
          <KeyItem>
            <p>Jordan Taylor, Ellen Simpson, Anh-Ton Tran, Jed Brubaker, Sarah Fox, Haiyi Zhu. 2024.<br />
            <b>Cruising Queer HCI on the DL: A Literature Review of LGBTQ+ People in HCI</b>. <i>Proceedings of the CHI Conference on Human Factors in Computing Systems (CHI '24)</i>, May 11-16, 2024, Honolulu, HI, USA. <i>ACM</i>, New York, NY, USA. (To Appear)</p>
          </KeyItem>
        </div>
        </div>
      </main>
    </div>
  )
}
