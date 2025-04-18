import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';

class MyComponent extends React.Component {
    // object => state: key: value
    state = {
        arrJob: [
            { id: 'job1', title: 'developer', salary: '500' },
            { id: 'job2', title: 'tester', salary: '400' },
            { id: 'job3', title: 'manager', salary: '1000' }
        ]
    }

    addNewJob = (job) => {
        console.log('check job from parent:', job);
        // let currentJob = this.state.arrJob;
        // currentJob.push(job);
        this.setState({
            // arrJob: currentJob
            arrJob: [...this.state.arrJob, job]
        })
    }

    deleteAJob = (job) => {
        let currentJob = this.state.arrJob;
        currentJob = currentJob.filter(item => item.id !== job.id);
        this.setState({
            arrJob: currentJob
        })
    }
    //JSX => return block of code
    //fragment => <></> => <React.Fragment></React.Fragment>

    //re-render
    render() {
        console.log('call render:', this.state)
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob} />
                <ChildComponent

                    job={this.state.arrJob}
                    deleteAJob={this.deleteAJob}
                />
            </>
        )
    }
}

export default MyComponent;