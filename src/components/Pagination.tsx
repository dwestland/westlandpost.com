import React from 'react'

const Pagination = ({
  totalArticles,
  currentPage,
  onPageChange,
  articlesPerPage,
}) => {
  const totalPages = Math.ceil(totalArticles / articlesPerPage)

  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <div className="pagination">
      <button className="primary-button" onClick={handlePrevClick}>
        Prev
      </button>
      <span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Page {currentPage} of {totalPages}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </span>
      <button className="primary-button" onClick={handleNextClick}>
        Next
      </button>
    </div>
  )
}

export default Pagination
