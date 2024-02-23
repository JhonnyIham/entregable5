import './styles/Pagination.css'

const Pagination = ({ pokemonsPerPage, currentPage, setCurrentPage, totalPokemons }) => {
    const totalPageCount = Math.ceil(totalPokemons / pokemonsPerPage);
    const visiblePageNumbers = [];

    visiblePageNumbers.push(1);

    let start = Math.max(2, currentPage - 1); 
    let end = Math.min(currentPage + 1, totalPageCount - 1); 

    if (currentPage === 1) {
        start = 2;
        end = Math.min(4, totalPageCount - 1);
    } else if (currentPage === totalPageCount) {
        end = totalPageCount - 1;
        start = Math.max(totalPageCount - 3, 2);
    }

    if (start > 2) {
        visiblePageNumbers.push("...");
    }

    for (let i = start; i <= end; i++) {
        visiblePageNumbers.push(i);
    }

    if (end < totalPageCount - 1) {
        visiblePageNumbers.push("...");
    }

    if (totalPageCount > 1) {
        visiblePageNumbers.push(totalPageCount);
    }

    const handlePreviousPage = () => setCurrentPage(Math.max(1, currentPage - 1));
    const handleNextPage = () => setCurrentPage(Math.min(totalPageCount, currentPage + 1));

    const handleSpecificPage = (n) => {
        if (n !== "...") {
            setCurrentPage(n);
        }
    };

    return (
        <nav className="pagination is-centered pagination" role="navigation" aria-label="pagination">
            <a className={`previous pagination-previous ${currentPage === 1 ? 'is-disabled' : ''}`} onClick={handlePreviousPage}>{'<'}</a>
            <a className={`next pagination-next ${currentPage >= totalPageCount ? 'is-disabled' : ''}`} onClick={handleNextPage}>{'>'}</a>
            <ul className="pagination-list">
                {visiblePageNumbers.map((noPage, index) => (
                    <li key={index}>
                        <a 
                            className={`pagination-link ${noPage === currentPage ? 'is-current' : ''} ${noPage === "..." ? 'is-disabled' : ''}`} 
                            onClick={() => handleSpecificPage(noPage)}
                        >
                            {noPage}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;

