import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Redirect } from 'react-router-dom'
import { configure } from '../../config/fbConfig'
import { submitPanas1, submitPanas2, submitPanas3, submitPanas4, submitPanas5 } from '../../store/actions/questionActions'

export class PanasForm extends Component {
    state = {
        interested: 0, //1
        distressed: 0, //2
        excited: 0, //3
        upset: 0, //4
        strong: 0, //5
        guilty: 0, //6
        scared: 0, //7
        hostile: 0, //8
        enthusiastic: 0, //9
        proud: 0, //10
        irritable: 0, //11
        alert: 0, //12
        ashamed: 0, //13
        inspired: 0, //14
        nervous: 0, //15
        determined: 0, //16
        attentive: 0, //17
        jittery: 0, //18
        active: 0, //19
        afraid: 0 //20
    }
    completeQuestionnaire = (panasScore) => {
        const { question, personalInfo } = this.props;
        const totalMark = question.question1.mark + question.question2.mark + question.question3.mark + question.question4.mark + question.question5.mark;
        const totalTimeUsed = question.question1.timeUsed + question.question2.timeUsed + question.question3.timeUsed + question.question4.timeUsed + question.question5.timeUsed;
        const avgMouseEngScore = (question.question1.mouseEngagementScore + question.question2.mouseEngagementScore + question.question3.mouseEngagementScore + question.question4.mouseEngagementScore + question.question5.mouseEngagementScore) / 5;
        const avgPanasScore = (question.panas1 + question.panas2 + question.panas3 + question.panas4 + panasScore) / 5;
        configure.database().ref('Participants').push({
            name: personalInfo.name,
            degree_year: personalInfo.degreeYear,
            gender: personalInfo.gender,
            major: personalInfo.major,
            race: personalInfo.race,
            programming_grade: personalInfo.programmingGrade,
            experience_year: personalInfo.programmingExp,
            avg_mouse_engagement_score: avgMouseEngScore,
            avg_panas_score: avgPanasScore,
            total_mark: totalMark,
            total_time_used: totalTimeUsed,
            question_one: {
                ...question.question1,
                panas_score: question.panas1
            },
            question_two: {
                ...question.question2,
                panas_score: question.panas2
            },
            question_three: {
                ...question.question3,
                panas_score: question.panas3
            },
            question_four: {
                ...question.question4,
                panas_score: question.panas4
            },
            question_five: {
                ...question.question5,
                panas_score: panasScore
            }
        });
        this.props.history.push('/last');
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {
            interested, distressed, excited, upset, strong,
            guilty, scared, hostile, enthusiastic, proud,
            irritable, alert, ashamed, inspired, nervous,
            determined, attentive, jittery, active, afraid
        } = this.state;
        const positive = interested + excited + strong + enthusiastic +
            proud + alert + inspired + determined + attentive + active
        const negative = distressed + upset + guilty + scared + hostile +
            irritable + ashamed + nervous + jittery + afraid
        let panasScore = 0;

        // Positive affect higher then panasScore will be above 20 else will be below 20
        if (positive > negative) {
            panasScore = ((positive - 10)/40)*20 + 20;
        } else {
            panasScore = 20 - ((negative - 10)/40)*20;
        }
        
        if (this.props.nextQuestion === 2) {
            const { onSubmitPanas1 } = this.props;
            onSubmitPanas1(panasScore);
            this.props.history.push('/question2');
        } else if (this.props.nextQuestion === 3) {
            const { onSubmitPanas2 } = this.props;
            onSubmitPanas2(panasScore);
            this.props.history.push('/question3');
        }  else if (this.props.nextQuestion === 4) {
            const { onSubmitPanas3 } = this.props;
            onSubmitPanas3(panasScore);
            this.props.history.push('/question4');
        }  else if (this.props.nextQuestion === 5) {
            const { onSubmitPanas4 } = this.props;
            onSubmitPanas4(panasScore);
            this.props.history.push('/question5');
        } else {
            this.props.onSubmitPanas5(panasScore);
            this.completeQuestionnaire(panasScore);
        }
    }

    render() {
        
        const radioButtonList = (fieldName, selectedStateKey) => (
            <table>
                <tr style={{ border: 'none' }}>
                    <td>
                        <label style={{ marginLeft: 15, fontSize: '16px', color: 'purple', marginRight: -70 }}>
                            <input
                                style={{ opacity: 'initial', marginTop: 7, pointerEvents: 'all' }}
                                type="radio"
                                value={1}
                                onChange={() => this.setState({
                                    ...this.state,
                                    [fieldName]: 1,
                                })}
                                checked={selectedStateKey === 1}
                            />
                            &nbsp;
                            &nbsp;
                            Very slightly or not at all
                        </label>
                    </td>
                    <td>
                        <label style={{ fontSize: '16px', color: 'purple' }}>
                            <input
                                style={{ opacity: 'initial', marginTop: 7, pointerEvents: 'all' }}
                                type="radio"
                                value={2}
                                onChange={() => this.setState({
                                    ...this.state,
                                    [fieldName]: 2,
                                })}
                                checked={selectedStateKey === 2}
                            />
                            &nbsp;
                            &nbsp;
                            A little
                        </label>
                    </td>
                    <td>
                        <label style={{ fontSize: '16px', color: 'purple' }}>
                            <input
                                style={{ opacity: 'initial', marginTop: 7, pointerEvents: 'all' }}
                                type="radio"
                                value={3}
                                onChange={() => this.setState({
                                    ...this.state,
                                    [fieldName]: 3,
                                })}
                                checked={selectedStateKey === 3}
                            />
                            &nbsp;
                            &nbsp;
                            Moderately
                        </label>
                    </td>
                    <td>
                        <label style={{ fontSize: '16px', color: 'purple' }}>
                            <input
                                style={{ opacity: 'initial', marginTop: 7, pointerEvents: 'all' }}
                                type="radio"
                                value={4}
                                onChange={() => this.setState({
                                    ...this.state,
                                    [fieldName]: 4,
                                })}
                                checked={selectedStateKey === 4}
                            />
                            &nbsp;
                            &nbsp;
                            Quite a bit
                        </label>
                    </td>
                    <td>
                        <label style={{ fontSize: '16px', color: 'purple' }}>
                            <input
                                style={{ opacity: 'initial', marginTop: 7, pointerEvents: 'all' }}
                                type="radio"
                                value={5}
                                onChange={() => this.setState({
                                    ...this.state,
                                    [fieldName]: 5,
                                })}
                                checked={selectedStateKey === 5}
                            />
                            &nbsp;
                            &nbsp;
                            Extremely
                        </label>
                    </td>
                </tr>
            </table>
        );

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} style={{ backgroundColor: '#CDCDCD' }}>
                    <h5 className="grey-text text-darken-3">Positive and Negative Affect Schedule (PANAS-SF)</h5>
                    <div>
                        <label style={{ color: 'red', fontSize: '20px' }}>What are your feelings while solving this question?</label>
                    </div>
                    <br />
                    <div>
                        <label style={{ fontSize: '16px', color: 'black' }}>Interested (有趣)</label>
                        <div>
                            {radioButtonList('mental', this.state.mental)}
                        </div>
                    </div>
                    <div style={{ marginTop: '15px' }}>
                        <label style={{ fontSize: '16px', color: 'black' }}>Distressed (苦恼)</label>
                        <div>
                            {radioButtonList('distressed', this.state.distressed)}
                        </div>
                    </div>
                    <div style={{ marginTop: '15px' }}>
                        <label style={{ fontSize: '16px', color: 'black' }}>Excited (兴奋)</label>
                        <div>
                            {radioButtonList('excited', this.state.excited)}
                        </div>
                    </div>
                    <div style={{ marginTop: '15px' }}>
                        <label style={{ fontSize: '16px', color: 'black' }}>Upset (烦恼)</label>
                        <div>
                            {radioButtonList('upset', this.state.upset)}
                        </div>
                    </div>
                    <div style={{ marginTop: '15px' }}>
                        <label style={{ fontSize: '16px', color: 'black' }}>Strong (强大)</label>
                        <div>
                            {radioButtonList('strong', this.state.strong)}
                        </div>
                    </div>
                    <div style={{ marginTop: '15px' }}>
                        <label style={{ fontSize: '16px', color: 'black' }}>Guilty (愧疚)</label>
                        <div>
                            {radioButtonList('guilty', this.state.guilty)}
                        </div>
                    </div>
                    <div style={{ marginTop: '15px' }}>
                        <label style={{ fontSize: '16px', color: 'black' }}>Scared (恐惧)</label>
                        <div>
                            {radioButtonList('scared', this.state.scared)}
                        </div>
                    </div>
                    <div style={{ marginTop: '15px' }}>
                        <label style={{ fontSize: '16px', color: 'black' }}>Hostile (敌意)</label>
                        <div>
                            {radioButtonList('hostile', this.state.hostile)}
                        </div>
                    </div>
                    <div style={{ marginTop: '15px' }}>
                        <label style={{ fontSize: '16px', color: 'black' }}>Enthusiastic (热情)</label>
                        <div>
                            {radioButtonList('enthusiastic', this.state.enthusiastic)}
                        </div>
                    </div>
                    <div style={{ marginTop: '15px' }}>
                        <label style={{ fontSize: '16px', color: 'black' }}>Proud (光荣)</label>
                        <div>
                            {radioButtonList('proud', this.state.proud)}
                        </div>
                    </div>
                    <div style={{ marginTop: '15px' }}>
                        <label style={{ fontSize: '16px', color: 'black' }}>Irritable (烦躁)</label>
                        <div>
                            {radioButtonList('irritable', this.state.irritable)}
                        </div>
                    </div>
                    <div style={{ marginTop: '15px' }}>
                        <label style={{ fontSize: '16px', color: 'black' }}>Alert (机敏)</label>
                        <div>
                            {radioButtonList('alert', this.state.alert)}
                        </div>
                    </div>
                    <div style={{ marginTop: '15px' }}>
                        <label style={{ fontSize: '16px', color: 'black' }}>Ashamed (羞愧)</label>
                        <div>
                            {radioButtonList('ashamed', this.state.ashamed)}
                        </div>
                    </div>
                    <div style={{ marginTop: '15px' }}>
                        <label style={{ fontSize: '16px', color: 'black' }}>Inspired (启发)</label>
                        <div>
                            {radioButtonList('inspired', this.state.inspired)}
                        </div>
                    </div>
                    <div style={{ marginTop: '15px' }}>
                        <label style={{ fontSize: '16px', color: 'black' }}>Nervous (紧张)</label>
                        <div>
                            {radioButtonList('nervous', this.state.nervous)}
                        </div>
                    </div>
                    <div style={{ marginTop: '15px' }}>
                        <label style={{ fontSize: '16px', color: 'black' }}>Determined (坚决)</label>
                        <div>
                            {radioButtonList('determined', this.state.determined)}
                        </div>
                    </div>
                    <div style={{ marginTop: '15px' }}>
                        <label style={{ fontSize: '16px', color: 'black' }}>Attentive (细心)</label>
                        <div>
                            {radioButtonList('attentive', this.state.attentive)}
                        </div>
                    </div>
                    <div style={{ marginTop: '15px' }}>
                        <label style={{ fontSize: '16px', color: 'black' }}>Jittery (不安)</label>
                        <div>
                            {radioButtonList('jittery', this.state.jittery)}
                        </div>
                    </div>
                    <div style={{ marginTop: '15px' }}>
                        <label style={{ fontSize: '16px', color: 'black' }}>Active (活跃)</label>
                        <div>
                            {radioButtonList('active', this.state.active)}
                        </div>
                    </div>
                    <div style={{ marginTop: '15px' }}>
                        <label style={{ fontSize: '16px', color: 'black' }}>Afraid (害怕)</label>
                        <div>
                            {radioButtonList('afraid', this.state.afraid)}
                        </div>
                    </div>
                    <div className="input-field">
                        <button className="btn purple lighten-1 z-depth-0">Submit</button>
                    </div>
                    {/* <div className="red-text center">
                        {authError ? <p>{authError}</p> : null}
                    </div> */}
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        nextQuestion: state.question.nextQuestion,
        question: state.question,
        personalInfo: state.personalInfo,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmitPanas1: (score) => dispatch(submitPanas1(score)),
        onSubmitPanas2: (score) => dispatch(submitPanas2(score)),
        onSubmitPanas3: (score) => dispatch(submitPanas3(score)),
        onSubmitPanas4: (score) => dispatch(submitPanas4(score)),
        onSubmitPanas5: (score) => dispatch(submitPanas5(score))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PanasForm);