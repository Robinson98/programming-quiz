import React, { Component } from 'react'
import { connect } from 'react-redux'
import Select from 'react-select';
import { recordPersonalInfo } from '../../store/actions/personalInfoActions'

export class PersonalInfo extends Component {
    state = {
        name: '',
        degreeYear: 0,
        gender: 0,
        major: 0,
        race: '',
        programmingGrade: 0,
        programmingExp: 0
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log('Participant Basic Info:')
        console.log(this.state);
        this.props.onRecordPersonalInfo(this.state);
        this.props.history.push('/question1');
    }

    render() {

        const degYearOptions = [
            {value: 1, label: 'Year 1'},
            {value: 2, label: 'Year 2'},
            {value: 3, label: 'Year 3'},
            {value: 4, label: 'Year 4'},
        ];
        const genderOptions = [
            {value: 1, label: 'Male'},
            {value: 2, label: 'Female'},
        ];
        const majorOptions = [
            {value: 1, label: 'Software Engineering'},
            {value: 2, label: 'Artificial Intelligence'},
            {value: 3, label: 'Computer System and Network'},
            {value: 4, label: 'Information Systems'},
            {value: 5, label: 'Multimedia'},
            {value: 6, label: 'Data Science'},
        ];
        const gradeOptions = [
            {value: 1, label: 'A+'},
            {value: 2, label: 'A'},
            {value: 3, label: 'A-'},
            {value: 4, label: 'B+'},
            {value: 5, label: 'B'},
            {value: 6, label: 'B-'},
            {value: 7, label: 'C+'},
            {value: 8, label: 'C'},
            {value: 9, label: 'C-'},
            {value: 10, label: 'D+'},
            {value: 11, label: 'D'},
            {value: 12, label: 'F'},
        ];
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Personal Basic Info</h5>
                    <div>
                        <label style={{ fontSize: '16px', color: 'black' }}>Name</label>
                        <input
                            type="text"
                            id="name"
                            onChange={(value) => this.setState({
                                ...this.state,
                                name: value.target.value,
                            })}
                        />
                    </div>
                    <div style={{ marginTop: '15px' }}>
                        <label style={{ fontSize: '16px', color: 'black' }}>Year of Degree</label>
                        <Select
                            options={degYearOptions}
                            onChange={(value) => this.setState({
                                ...this.state,
                                degreeYear: value.value,
                            })}
                        />
                    </div>
                    <div style={{ marginTop: '15px' }}>
                        <label style={{ fontSize: '16px', color: 'black' }}>Gender</label>
                        <Select
                            options={genderOptions}
                            onChange={(value) => this.setState({
                                ...this.state,
                                gender: value.value,
                            })}
                        />
                    </div>
                    <div style={{ marginTop: '15px' }}>
                        <label style={{ fontSize: '16px', color: 'black' }}>Major in Computer Science and Information Technology</label>
                        <Select
                            options={majorOptions}
                            onChange={(value) => this.setState({
                                ...this.state,
                                major: value.value,
                            })}
                        />
                    </div>
                    <div style={{ marginTop: '15px' }}>
                        <label style={{ fontSize: '16px', color: 'black' }}>Race</label>
                        <input
                            type="text"
                            id="race"
                            onChange={(value) => this.setState({
                                ...this.state,
                                race: value.target.value,
                            })}
                        />
                    </div>
                    <div style={{ marginTop: '15px' }}>
                        <label style={{ fontSize: '16px', color: 'black' }}>Fundamental of Programming Grade</label>
                        <Select
                            options={gradeOptions}
                            onChange={(value) => this.setState({
                                ...this.state,
                                programmingGrade: value.value,
                            })}
                        />
                    </div>
                    <div style={{ marginTop: '15px' }}>
                        <label style={{ fontSize: '16px', color: 'black' }}>Years of Programming Experience</label>
                        <input
                            type="number"
                            id="programmingExp"
                            onChange={(value) => this.setState({
                                ...this.state,
                                programmingExp: value.target.value,
                            })}
                        />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        personalInfo: state.personalInfo,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRecordPersonalInfo: (info) => dispatch(recordPersonalInfo(info))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfo);