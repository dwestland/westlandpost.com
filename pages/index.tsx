import React, { useRef } from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout'
import contentData from '@/common/content-data'
import dayjs from 'dayjs'

const TwoColumnPage = () => {
  const currentDateTitle = useRef('')
  const imageUrlRoot = 'https://img.westlandpost.com/article-images/'
  const sendinblueApiKey = 'dtjvq2N0k79QpsRC'

  contentData.sort((a, b) => {
    return (
      new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
    )
  })

  const articles = contentData.map((article) => {
    // Create a date title if the date is different from the previous article
    let dateTitle = ''
    if (article.datePublished !== currentDateTitle.current) {
      dateTitle = dayjs(article.datePublished).format('MMM D, YYYY')
      currentDateTitle.current = article.datePublished
    }

    return (
      <div key={article.title}>
        <div className="newsletter">
          <a href={article.link} className="newsletter-content" target="_blank">
            <h3>{dateTitle}</h3>
            <Image
              src={imageUrlRoot + article.image}
              width={600}
              height={400}
              alt="Stock image"
            />
            <h4 className="title">{article.title}</h4>
            <p className="attribution">{article.attribution}</p>
            <div
              className="content-body"
              dangerouslySetInnerHTML={{ __html: article.body }}
            />
          </a>
        </div>
      </div>
    )
  })

  return (
    <Layout title="Document" description="Document description">
      <div className="home-heading">
        <h1>How AI is impacting tech, the arts and mankind</h1>
        <h2>Westland Post</h2>
      </div>
      <main className="two-column">
        <section>
          <div className="sendinblue-sign-up">
            <iframe
              width="540"
              height="420"
              src="https://26466fad.sibforms.com/serve/MUIEAK5CWenSsLC09gmZhi5Z-3TqvrSW1sUd7vEbSInlbipBoSHSK0B-MQoyJUtv8dYjeZD9U8BopaZFWNS_RC7htR_Pot3YikfPXMMfZhBThYQ1PLEUtVslhcEJZqHDPS9BIpnwAsIH7C3L42YPWiiG1IJN8dP6BgwvoV4qXh_VLfpP8b9efKLYQbDUSDSGY9dswcAKlhDCp7TQ"
              scrolling="auto"
              allowFullScreen
              // style="display: block;margin-left: auto;margin-right: auto;max-width: 100%;"
            ></iframe>
          </div>
          <h3>Previous Post</h3>
          {articles}
        </section>

        <aside>
          {/* CSS display: none */}
          <h3>Image Gallery</h3>
          <Image
            src="/images/grace-hopper.jpg"
            width={600}
            height={400}
            alt="Grace Hopper"
          />
          <br />
          <br />
          <Image src="/images/eniac.jpg" width={600} height={400} alt="ENIAC" />
          <br />
          <br />
          <Image src="/images/ibm.jpg" width={600} height={400} alt="IBM" />
        </aside>
      </main>
    </Layout>
  )
}
export default TwoColumnPage
