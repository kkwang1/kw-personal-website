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
            Hello! I'm a PhD student at Northeastern University's Khoury College of Computer
            Sciences, advised by Dr. Ada Lerner. 
            My research centers <b>marginalized communities' experiences of privacy</b> - 
            particularly in relation to the formation of trusting communities or interpersonal
            relationships - and how we can support their community and privacy wants as HCI
            researchers.
          </p>
          <h2>What I'm Looking Forward To:</h2>
          <IconItem emoji="&#128198;">
            <p>The 2025 <a href="https://recapworkshop.online/">Re-Imagining Cryptography and Privacy Workshop</a>!</p>
          </IconItem>
          <h2>Publications:</h2>
          <KeyItem>
            <p><u>Kelly Wang</u>, Dan Bially Levy, Kien T Nguyen, Ada Lerner, and Abigail Marsh. 2024.<br />
            <b>Counting Carrds: Investigating Personal Disclosure and Boundary Management in Transformative Fandom</b>. <i>Proceedings of the CHI Conference on Human Factors in Computing Systems (CHI '24)</i>, May 11-16, 2024, Honolulu, HI, USA. <i>ACM</i>, New York, NY, USA.<br />
            <a href="/counting-carrds.pdf">pdf</a></p>
          </KeyItem>
          <p className='short-bottom'>Not technically my publication, but check out the queer HCI literature review I helped analyze:</p>
          <KeyItem>
            <p>Jordan Taylor, Ellen Simpson, Anh-Ton Tran, Jed Brubaker, Sarah Fox, Haiyi Zhu. 2024.<br />
            <b>Cruising Queer HCI on the DL: A Literature Review of LGBTQ+ People in HCI</b>. <i>Proceedings of the CHI Conference on Human Factors in Computing Systems (CHI '24)</i>, May 11-16, 2024, Honolulu, HI, USA. <i>ACM</i>, New York, NY, USA.</p>
          </KeyItem>
        </div>
        </div>
      </main>
    </div>
  )
}
