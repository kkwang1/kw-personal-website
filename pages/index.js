import Head from 'next/head'

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
            Sciences, advised by Dr. Ada Lerner. I'm interested in centering marginalized
            communities' experiences of privacy, particularly in relation to the formation
            of trusting communities or interpersonal relationships, and how we can support
            their community and privacy wants as HCI researchers. I'm also interested in
            design futuring and how privacy scholars can be inspired by futuring done by
            vulnerable populations.
          </p>
          <p>If you would like to get in touch, feel free to contact me at <a href="mailto:wang.kelly1@northeastern.edu">wang.kelly1@northeastern.edu</a>.</p>
          <h2>What I'm Looking Forward To:</h2>
          <h2>Current Projects:</h2>
          <h2>Publications:</h2>
        </div>
        </div>
      </main>
    </div>
  )
}
