import React, { Component } from 'react';

export default class THPProductAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      title: '',
      status: 0,
    };
  }

  thpHandleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  thpHandleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    // Reset form after submit
    this.setState({
      id: 0,
      title: '',
      status: 0,
    });
  };

  render() {
    return (
      <div>
        <h2>Thêm mới sản phẩm</h2>
        <form className='col-md-6' onSubmit={this.thpHandleSubmit}>
          <div className='input-group mb-3'>
            <span className='input-group-text' id='basic-addon1'>
              ID
            </span>
            <input
              type='text'
              className='form-control'
              name='id'
              value={this.state.id}
              onChange={this.thpHandleChange}
            />
          </div>
          <div className='input-group mb-3'>
            <span className='input-group-text' id='basic-addon2'>
              Title
            </span>
            <input
              type='text'
              className='form-control'
              name='title'
              value={this.state.title}
              onChange={this.thpHandleChange}
            />
          </div>
          <div className='input-group mb-3'>
            <span className='input-group-text' id='basic-addon3'>
              Status
            </span>
            <input
              type='text'
              className='form-control'
              name='status'
              value={this.state.status}
              onChange={this.thpHandleChange}
            />
          </div>
          <button type='submit' className='btn btn-success'>
            Ghi lại
          </button>
        </form>
      </div>
    );
  }
}
