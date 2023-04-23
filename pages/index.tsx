import React, { useRef, useState } from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout'
import contentData from '@/common/content-data'
import dayjs from 'dayjs'
import Pagination from '@/components/Pagination'

const TwoColumnPage = () => {
  const currentDateTitle = useRef('')
  const imageUrlRoot = 'https://img.westlandpost.com/article-images/'
  const sendinblueApiKey = 'dtjvq2N0k79QpsRC'

  contentData.sort((a, b) => {
    return (
      new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
    )
  })

  // Pagination
  const [currentPage, setCurrentPage] = useState(1)
  const articlesPerPage = 10
  const startIndex = (currentPage - 1) * articlesPerPage
  const endIndex = startIndex + articlesPerPage
  const displayedArticles = contentData.slice(startIndex, endIndex)

  const articles = displayedArticles.map((article) => {
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
    <Layout
      title="Westland Post - AI Newsletter"
      description="How AI is impacting tech, the arts and mankind"
    >
      <div className="home-heading">
        <h1>How AI is impacting tech, the arts and mankind</h1>
        <h2>Westland Post</h2>
      </div>
      <main>
        <section>
          {currentPage === 1 && (
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
          )}
          <div className="sub-heading">
            <h3>
              Previous Posts
              <br />
              Page {currentPage}
            </h3>
          </div>
          {articles}
          <Pagination
            totalArticles={contentData.length}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            articlesPerPage={articlesPerPage}
          />
        </section>
      </main>
    </Layout>
  )
}
export default TwoColumnPage
