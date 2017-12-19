import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import { add } from '../actions/auth';
import { testFetch } from '../actions/protected-data';
import { sendEntry, fetchQuandyl } from '../actions/addNew';
import { SimpleLineChart } from "./chart"
// import {required, nonEmpty} from '../validators';

export class Add extends React.Component {

    componentDidMount() {
        console.log(this);
        this.props.dispatch(fetchQuandyl());
    }


    onSubmit(values) {
        let submission = {
            stock: values.stock,
            
        };
        console.log(submission);
        return this.props.dispatch(sendEntry(submission));
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }

        if (!this.props.loggedIn) {
            return <Redirect to="/" />;
        }

        return (
            <div>
            <form
                className="login-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {error}
                <br />
                
                <p>Welcome back, {this.props.email}</p>

                
                  <label htmlFor="stock">Stock</label>
                  <br />
                    <Field name="stock" component="textarea" type="textarea" />
                <br />
                <button disabled={this.props.pristine || this.props.submitting}>
                    Submit
                </button>
                
            </form>
            <SimpleLineChart chartData = {this.props.chart}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    console.log(state);
    return {
        loggedIn: currentUser !== null,
        email: currentUser ? state.auth.currentUser.email : '',
        chart: state.chart.data
    };
};

Add = connect(
    mapStateToProps
    )(Add);

export default reduxForm({
    form: 'add',
    onSubmitFail: (errors, dispatch) => dispatch(focus('add', 'email'))
})(Add);






