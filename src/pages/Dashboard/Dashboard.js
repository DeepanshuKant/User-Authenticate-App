import './Dashboard.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate'

export const Dashboard = () => {

    const [mockData, setIsMockData] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);

    const dataPerPage = 12;
    const pagesVisited = pageNumber * dataPerPage;

    const displayData = mockData.slice(pagesVisited, pagesVisited + dataPerPage).map((mock) => {
        return (
            <div className="data__box" key={mock.id} >
                <h1 className="mock__id">{mock.id}</h1>
                <div className="mock__title">{mock.title}</div>
                <p className="mock__body">{mock.body}</p>
            </div>
        )
    });

    const pageCount = Math.ceil(mockData.length / dataPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected)
    };

    useEffect(() => {
        async function actionDone() {

            const refData = await axios(
                {
                    method: "GET",
                    url: "https://jsonplaceholder.typicode.com/posts"
                }
            )
            setIsMockData(refData.data)
        }
        actionDone();
    }, [])

    return (
        <>
            <div id="parent__dashboard">
                <div className="dashboard">
                    {displayData}
                </div>
            </div>

            <ReactPaginate
                previousLabel={'Previous'}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBtn"}
                previousLinkClassName={"prevBtn"}
                nextLinkClassName={"nextBtn"}
                disabledClassName={"paginationDisable"}
                activeClassName={"paginationActive"}
            />
        </>
    )
}