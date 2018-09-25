import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Redirect,Link } from 'react-router-dom';
import { connect } from 'react-redux';
import callApi from '../../API/callApi';
import * as urls from '../../API/urls';

const required = value => (value || typeof value === 'number' ? undefined : 'Required')

class AddKeywordComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectUrl: false,

        }
    }
    componentWillMount() {
        if (this.props.match.params.id !== undefined) {
            this.props.getKeywordById(this.props.match.params.id);
        }
    }
    componentDidMount() {

        this.props.getKeywordTypes();
    }
    renderField = ({ input, type, meta: { touched, error, warning } }) => {
        return (
            <div>
                <input {...input} type={type} className="form-control" />
                {touched &&
                    ((error && <span style={{ color: 'red' }}>{error}</span>))}
            </div>
        )
    }
    renderFieldSelect = ({ input, children, meta: { touched, error, warning } }) => {
        return (
            <div>
                <select {...input} className="form-control">
                    {children}
                </select>
                {touched &&
                    ((error && <span style={{ color: 'red' }}>{error}</span>))}
            </div>
        )
    }
    submitForm = () => {
        let values = this.props.valuesForm.values;
        let token = 'Bearer ' + sessionStorage.getItem('token');
        let fd = new FormData();
        fd.set('keyword', JSON.stringify(values));
        callApi(urls.url_post_saveKeyword, 'POST', fd, token).then((res) => {
            if (res.data.status == 200) {
                this.setState({
                    redirectUrl: true
                });
                this.props.freshKeyword();
            }
        }).catch((error) => {
            alert('Error');
        })

    }
    showKeywordTypes = (keywordTypes) => {
        let result = null;
        result = keywordTypes.map((item, index) => {
            return (
                <option key={index} value={item.id}>{`Type:${item.type}---Vietnamese:${item.vietnamese}`}</option>
            )
        });
        return result;
    }
    render() {
        const { pristine, reset, submitting, valid, handleSubmit } = this.props;
        if (this.state.redirectUrl) {
            return (
                <Redirect to='/keywords' />
            )
        }
        return (


            <div className='wow zoomIn outer-w3-agile col-xl-6'>
                <h4 className="tittle-w3-agileits mb-4">Form Controls</h4>
                <form onSubmit={handleSubmit(this.submitForm.bind(this))}>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Keyword</label>
                        <Field name="keyword" type="text" className="form-control" component={this.renderField} validate={required} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">Example select</label>

                        <Field name="idType" className="form-control" component={this.renderFieldSelect} >

                            {this.showKeywordTypes(this.props.keywordTypes)}
                        </Field>
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Vietnames</label>
                        <Field name="vietnamese" type="input" component='textarea' className='form-control' cols={50} rows={4} validate={required}/>
                    </div>

                    <button type="submit" class="btn btn-primary" style={{marginRight:'15px'}}>Save change</button>
                    <Link to='/keywords' class="btn btn-danger" onClick={this.props.freshKeyword}>Back</Link>
                </form>
            </div>

        )
    }
}

var RF_keyword = reduxForm({
    form: 'keyword',
    enableReinitialize: true
})(AddKeywordComponent);


RF_keyword = connect(
    state => ({
        initialValues: state.keywordReducer.keywordEditing
    })
)(RF_keyword);

export default RF_keyword;