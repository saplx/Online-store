import "Pagination.scss";

const Pagination = (totalItems, itemsPerPage, currentPage, onPageChange) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pages = Array.from({ length: totalPages }, (_, i) => i);
  return (
    <ul className="pagination">
      {pages.map((pageNumber) => (
        <li
          key={pageNumber}
          className={pageNumber === currentPage ? "active" : ""}
          onClick={onPageChange(pageNumber)}
        >
          {pageNumber + 1}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
