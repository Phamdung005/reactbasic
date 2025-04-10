import React from 'react';
import ChildComponent from './ChildComponent';

class MyComponent extends React.Component {
    // object => state: key: value
    state = {
        firstName: ' ',
        lastName: ' ',
        arrJob: [
            { id: 'job1', title: 'developer', salary: '500$' },
            { id: 'job2', title: 'tester', salary: '400$' },
            { id: 'job3', title: 'manager', salary: '1000$' }
        ]
    }
    //JSX => return block of code
    //fragment => <></> => <React.Fragment></React.Fragment>
    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault(); // prevent default action of form submission
        console.log('data input:', this.state)
    }

    //re-render
    render() {
        console.log('call render:', this.state)
        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input
                        type="text"
                        value={this.state.firstName}
                        onChange={(event) => this.handleChangeFirstName(event)} />
                    <br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input
                        type="text"
                        value={this.state.lastName}
                        onChange={(event) => this.handleChangeLastName(event)} />
                    <br />
                    <input type="submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />
                </form>
                <ChildComponent
                    name={this.state.firstName}
                    age={'20'}
                    adress={'HaNoi'}
                    job={this.state.arrJob}
                />
            </>
        )
    }
}

export default MyComponent;