import React, { Component } from 'react';
import THPProductlist from './components/THPProductlist';
import THPProductAdd from './components/THPProductAdd';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { title: 'TrinhHuuPhuc', id: 221090054, status: 1 },
        { title: 'Cabbage', id: 1, status: 1 },
        { title: 'Garlic', id: 2, status: 0 },
        { title: 'Apple', id: 3, status: 0 },
        { title: 'Samsung', id: 4, status: 1 },
      ],
    };
  }

  thpHandleSubmit = (param) => {
    console.log("App:", param);
    // them ms vao products
    let updatedProducts = [...this.state.products, param];
    this.setState({
      products: updatedProducts,
    });
  };

  render() {
    return (
      <div className='container border mt-6'>
        <h1>Trinh Huu Phuc - Render Data - Event Form</h1>
        <hr />
        <THPProductlist renderProducts={this.state.products} />
        <hr />
        <THPProductAdd onSubmit={this.thpHandleSubmit} />
      </div>
    );
  }
}
