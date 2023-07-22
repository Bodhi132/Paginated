interface Props {
    postsPerPage: number
    totalPosts: number
    paginate: (a: number) => void
}


const Pagination = ({ postsPerPage, totalPosts, paginate }: Props) => {
    const pageNumbers: number[] = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav className="flex justify-center mt-6 mb-5  w-[15rem] ml-[40%]">
            <ul className='flex mb-5'>
                {pageNumbers.map(number => (
                    <li key={number} className=''>
                        <a onClick={() => paginate(number)} href='!#' className='p-2 mx-2 rounded border bg-slate-600'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination