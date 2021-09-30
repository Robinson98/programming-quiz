import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Redirect } from 'react-router-dom'
import Select from 'react-select';

export class NasaTLX extends Component {
    state = {
        mental: 0,
        physical: 0,
        temporal: 0,
        performance: 0,
        effort: 0,
        frustration: 0
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log('Nasa TLX:')
        console.log(this.state);
    }
    render() {
        const degYearOptions = [
            {value: 1, label: 'Low'},
            {value: 2, label: 'Moderate'},
            {value: 3, label: 'High'},
        ];
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Personal Basic Info</h5>
                    <div>
                        <label style={{ fontSize: '16px', color: 'black' }}>Mental Demand</label>
                        <Select
                            options={degYearOptions}
                            onChange={(value) => this.setState({
                                ...this.state,
                                mental: value.value,
                            })}
                        />
                        <div>
                            <input
                                style={{ opacity: 'initial', marginTop: 5 }}
                                type="radio"
                                value="degreeYear"
                                checked={true}
                            />
                            <label style={{ marginLeft: 20, fontSize: '16px' }}>
                                Low
                            </label>
                        </div>
                    </div>
                    <div style={{ marginTop: '15px' }}>
                        <label style={{ fontSize: '16px', color: 'black' }}>Physical Demand</label>
                        <Select
                            options={degYearOptions}
                            onChange={(value) => this.setState({
                                ...this.state,
                                physical: value.value,
                            })}
                        />
                    </div>
                    <div style={{ marginTop: '15px' }}>
                        <label style={{ fontSize: '16px', color: 'black' }}>Temporal Demand</label>
                        <Select
                            options={degYearOptions}
                            onChange={(value) => this.setState({
                                ...this.state,
                                temporal: value.value,
                            })}
                        />
                    </div>
                    <div style={{ marginTop: '15px' }}>
                        <label style={{ fontSize: '16px', color: 'black' }}>Performance</label>
                        <Select
                            options={degYearOptions}
                            onChange={(value) => this.setState({
                                ...this.state,
                                performance: value.value,
                            })}
                        />
                    </div>
                    <div style={{ marginTop: '15px' }}>
                        <label style={{ fontSize: '16px', color: 'black' }}>Effort</label>
                        <Select
                            options={degYearOptions}
                            onChange={(value) => this.setState({
                                ...this.state,
                                effort: value.value,
                            })}
                        />
                    </div>
                    <div style={{ marginTop: '15px' }}>
                        <label style={{ fontSize: '16px', color: 'black' }}>Frustration</label>
                        <Select
                            options={degYearOptions}
                            onChange={(value) => this.setState({
                                ...this.state,
                                frustration: value.value,
                            })}
                        />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Submit</button>
                    </div>
                    {/* <div className="red-text center">
                        {authError ? <p>{authError}</p> : null}
                    </div> */}
                </form>
                
                <div>
                    <input
                        type="radio"
                        value="degreeYear"
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // auth: state.firebase.auth,
        authError: state.auth.authError,
    }
}

const mapDispatchToProps = () => {
}

export default connect(mapStateToProps, mapDispatchToProps)(NasaTLX);