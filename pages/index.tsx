import React, { useState } from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout'
import contentData from '@/common/content-data'
import dayjs from 'dayjs'
// import { AnyAaaaRecord } from 'dns'

const HomePage = () => {
  const [titleDate, setTitleDate] = React.useState('')
  const imageUrlRoot = '/content-images/'
  const sendinblueApiKey = 'dtjvq2N0k79QpsRC'
  console.log('%c boom ', 'background: red; color: white')

  const articles = contentData.map((article) => {
    // let titleDate = ''
    if (article.datePublished !== titleDate) {
      setTitleDate(article.datePublished)
      console.log('%c titleDate ', 'background: red; color: white', titleDate)
      return <h3>{dayjs(article.datePublished).format('MMM D, YYYY')}</h3>
    }
    return (
      <div key={article.title}>
        <div className="newsletter">
          <a href={article.link} className="newsletter-content">
            <p>{dayjs(titleDate).format('MMM D, YYYY')}</p>
            <Image
              src={imageUrlRoot + article.image}
              width={600}
              height={400}
              alt="More than 200 books in Amazon's bookstore have ChatGPT listed as an author or coauthor"
            />
            <h4 className="title">{article.title}</h4>

            <p className="attribution">{article.attribution}</p>
            <p className="content-body">{article.body}</p>
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
        <h1>{dayjs('2023-03-03T15:00:00.000Z').format('MMM D, YYYY')}</h1>
        {/* <iframe src="https://www.westland.net" width="100%"></iframe> */}
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
export default HomePage
