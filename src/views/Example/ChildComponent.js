import React from 'react';

class ChildComponent extends React.Component {
    // object => state: key: value
    state = {
        firstName: ' ',
        lastName: ' '
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
        console.log('check props:', this.props)
        // let name = this.props.name;
        // let age = this.props.age;

        let { name, age, adress, job } = this.props;
        let a = '';
        return (
            <>
                <div>Child Component: {name} - {adress}</div>
                <div>Age: {age}</div>
                <div className="job-lists">
                    {
                        a = job.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {item.title} - {item.salary}
                                </div>
                            )
                        })
                    }
                    {console.log('check map: ', a)}
                </div>
            </>
        )
    }
}

export default ChildComponent;