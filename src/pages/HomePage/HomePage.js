import React, { Component } from 'react';
import Pagination from '../../components/Pagination.Component';
class HomePage extends Component {
    constructor() {
        super();
 
        // an example array of 150 items to be paged
        var exampleItems = [...Array(70).keys()].map(i => ({ id: (i+1), name: 'Item ' + (i+1) }));
        this.state = {
            exampleItems: exampleItems,
            pageOfItems: []
        };
 
        // bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
        this.onChangePage = this.onChangePage.bind(this);
    }   
    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }
    render() {
        return (
            <div>
            <div className="container">
                <div className="text-center">
                    <h1>React - Pagination Example with logic like Google</h1>
                    {this.state.pageOfItems.map(item =>
                        <div key={item.id}>{item.name}</div>
                    )}
                    <Pagination items={this.state.exampleItems} onChangePage={this.onChangePage} />
                </div>
            </div>
            <hr />
            <div className="credits text-center">
                <p>
                    <a href="http://jasonwatmore.com" target="_top">JasonWatmore.com</a>
                </p>
            </div>
        </div>
        );
    }
}
 
export default HomePage;
