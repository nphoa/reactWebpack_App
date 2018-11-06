import React, { Component } from 'react';
import {Link} from 'react-router-dom';
const defaultProps = {
    initialPage: 1,
    pageSize: 10
}
class PaginationComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pager: {}
        }
    }
    componentWillMount() {
        if (this.props.items && this.props.items.length) {
            this.setPage(this.props.initialPage);
        }
    }
    setPage(page) {
        let { items, pageSize } = this.props;
        
        let pager = this.state.pager;
        if (page < 1 || page > pager.totalPages) { return; }

        //get new pager obj for specified page
        pager = this.getPager(items.length, page, pageSize);

        // get new page of items from items array
        var pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);
        
        
        // update state
        this.setState({ pager: pager });
 
        // call change page function in parent component
        this.props.onChangePage(pageOfItems);
    }
    getPager(totalItems, currentPage, pageSize) {
        console.log(totalItems, currentPage,pageSize);
        //default to first page
        currentPage = currentPage || 1;

        //default page size is 10
        pageSize = pageSize || 10;

        //calculate total page
        let totalPages = Math.ceil(totalItems / pageSize);
        console.log(totalPages);
        

        let startPage = 1;
        let endPage = totalPages;

        // if (totalPages <= 10) {
        //     //less than 10 total pages so show all
        //     startPage = 1;
        //     endPage = totalPages;
        // } else {
        //     //more than 10 total pages so calculate start and end pages
        // }

        //calculate start and end item indexes
        let startIndex = (currentPage - 1) * pageSize;
       
        //let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        let endIndex = (startIndex + pageSize) - 1;
        console.log(startIndex,endIndex);

        // create an array of pages to ng-repeat in the pager control
        var pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);
        var pages1 = [...Array((endPage + 1) - startPage).keys()];
        console.log(endPage,startPage,pages);
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }
    render() {
        let pager = this.props.pager;
         //console.log(pager);   
        if (!pager.pages || pager.pages.length <= 1) {
            // don't display pager if there is only 1 page
            return null;
        }
        return (
            <ul className="pagination">
                <li className={`page-item ${pager.currentPage == 1 ? 'disabled' : ''}`}>
                    <Link className="page-link" to={`/keyword/keywords/1`}>First</Link>
                </li>
                <li className={`page-item ${pager.currentPage == 1 ? 'disabled' : ''}`}>
                    <Link className="page-link" to={`/keyword/keywords/${parseInt(pager.currentPage) - 1}`}>Previous</Link>
                </li>
                {pager.pages.map((page, index) =>
                    <li key={index} className={`page-item ${pager.currentPage == page ? 'active' : ''}`}>
                        {/* <a className="page-link" onClick={() => this.setPage(page)}>{page}</a> */}
                        <Link className="page-link" to={`/keyword/keywords/${page}`}>{page}</Link>

                    </li>
                )}
                <li className={`page-item ${pager.currentPage == pager.totalPages ? 'disabled' : ''}`}>
                    <Link className="page-link" to={`/keyword/keywords/${parseInt(pager.currentPage) + 1}`}>Next</Link>
                </li>
                <li className={`page-item ${pager.currentPage == pager.totalPages ? 'disabled' : ''}` }>
                    <Link className="page-link" to={`/keyword/keywords/${pager.totalPages}`}>Last</Link>
                </li>
            </ul>
        )
    }
}

PaginationComponent.defaultProps = defaultProps;
export default PaginationComponent;