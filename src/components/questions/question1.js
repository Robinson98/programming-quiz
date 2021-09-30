import React, { Component } from 'react'
import { connect } from 'react-redux'
import './questionStyle.css'
import { mouseOverFunc as mouseOverFunc1, highlightedFunc } from './cursorEngagement'
import { submitQues1Reponse, setNextQuestion } from '../../store/actions/questionActions'

export class Question1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            startingTime: null,
            enterTime: null,
            duration: null,
            cursorOverSections: [],
            highEngagementSections: [],
            middleEngagementSections: [],
            lowEngagementSections: [],
        };
    }

    componentDidMount() {
        this.setState({
            ...this.state,
            startingTime: new Date()
        })
      }

    render() {
        let {
            startingTime, enterTime, cursorOverSections,
            highEngagementSections, middleEngagementSections, lowEngagementSections,
          } = this.state;

        const { onSubmitQuestion } = this.props;
        
        const q1 = "Question 1";
        const sections = {
            question1: "What would be",
            question2: " printed out when",
            question3: " the following fragment",
            question4: " of code",
            question5: " was executed?",
            code1part1: "int sum = 5;",
            code2part1: "sum = sum +",
            code2part2: " sum * 5/2;",
            code3part1: "System.out.println(sum);"
        };

        const mouseOverFunc = (str, isCode) => {

            if (isCode) {
                mouseOverFunc1(str, true, cursorOverSections, highEngagementSections, middleEngagementSections, lowEngagementSections, enterTime);
            } else {
                mouseOverFunc1(str, false, cursorOverSections, highEngagementSections, middleEngagementSections, lowEngagementSections, enterTime);
            }
        }

        const mouseCursorHighlighted = (str) => {
            highlightedFunc(str, highEngagementSections, middleEngagementSections, lowEngagementSections);
        }

        const selectedAnswer = (ans) => {
            let mark = 0;
            let mouseEngagementScore = 0;
            if (ans === 'B') {
                mark = 1;
            }
            const noEngagementSections = Object.values(sections).filter(
                s => !highEngagementSections.includes(s)
                && !middleEngagementSections.includes(s)
                && !lowEngagementSections.includes(s)
            )

            if (noEngagementSections[0]) {
                noEngagementSections.map(n => lowEngagementSections.push(n))
            }

            if (highEngagementSections.length > middleEngagementSections.length
                && highEngagementSections.length > lowEngagementSections.length) {
                    if (middleEngagementSections.length > lowEngagementSections.length) {
                        const difference = middleEngagementSections.length - lowEngagementSections.length;
                        if ((difference / middleEngagementSections.length) > 0.5) {
                            mouseEngagementScore = 60;
                        } else {
                            mouseEngagementScore = 55;
                        }
                    } else if (middleEngagementSections.length < lowEngagementSections.length) {
                        const difference = lowEngagementSections.length - middleEngagementSections.length;
                        if ((difference / lowEngagementSections.length) > 0.5) {
                            mouseEngagementScore = 41;
                        } else {
                            mouseEngagementScore = 45;
                        }
                    } else {
                        mouseEngagementScore = 50;
                    }
                } else if (middleEngagementSections.length > lowEngagementSections.length) {
                    if (highEngagementSections.length > lowEngagementSections.length) {
                        const difference = highEngagementSections.length - lowEngagementSections.length;
                        if ((difference / highEngagementSections.length) > 0.5) {
                            mouseEngagementScore = 40;
                        } else {
                            mouseEngagementScore = 35;
                        }
                    } else if (highEngagementSections.length < lowEngagementSections.length) {
                        const difference = lowEngagementSections.length - highEngagementSections.length;
                        if ((difference / lowEngagementSections.length) > 0.5) {
                            mouseEngagementScore = 21;
                        } else {
                            mouseEngagementScore = 25;
                        }
                    } else {
                        mouseEngagementScore = 30;
                    }
                } else {
                    if (highEngagementSections.length > middleEngagementSections.length) {
                        const difference = highEngagementSections.length - middleEngagementSections.length;
                        if ((difference / highEngagementSections.length) > 0.5) {
                            mouseEngagementScore = 20;
                        } else {
                            mouseEngagementScore = 15;
                        }
                    } else if (highEngagementSections.length < middleEngagementSections.length) {
                        const difference = middleEngagementSections.length - highEngagementSections.length;
                        if ((difference / middleEngagementSections.length) > 0.5) {
                            mouseEngagementScore = 1;
                        } else {
                            mouseEngagementScore = 5;
                        }
                    } else {
                        mouseEngagementScore = 10;
                    }
                }
            const timeUsed = (new Date() - startingTime)/1000;
            onSubmitQuestion({
                mark,
                mouseEngagementScore,
                timeUsed
            });
            this.props.history.push('/panasform');
        }

        return (
            <div className="container">
                <div className="white" style={{ paddingTop: '0px' }}>
                    <h5 className="grey-text text-darken-3" style={{ paddingLeft: '10px' }}>{q1}</h5>
                    <div>
                        <label
                            style={{ fontSize: '16px', color: 'black', paddingLeft: '10px' }}
                            className="textCursor"
                            onMouseEnter={() => {
                                enterTime = new Date();
                            }}
                            onMouseLeave={() => {
                                mouseOverFunc(sections.question1)
                            }}
                            onMouseDown={() => mouseCursorHighlighted(sections.question1)}
                            onMouseUp={() => {
                                const textHighlighted = window.getSelection().toString();
                                Object.values(sections).map(s => {
                                    if (textHighlighted.includes(s)) {
                                        mouseCursorHighlighted(s);
                                    }
                                    return 0;
                                })
                                mouseCursorHighlighted(sections.question1);
                            }}
                        >
                            {sections.question1}
                        </label>
                        <label
                            style={{ fontSize: '16px', color: 'black' }}
                            className="textCursor"
                            onMouseEnter={() => {
                                enterTime = new Date();
                            }}
                            onMouseLeave={() => {
                                mouseOverFunc(sections.question2)
                            }}
                            onMouseDown={() => mouseCursorHighlighted(sections.question2)}
                            onMouseUp={() => {
                                const textHighlighted = window.getSelection().toString();
                                Object.values(sections).map(s => {
                                    if (textHighlighted.includes(s)) {
                                        mouseCursorHighlighted(s);
                                    }
                                    return 0;
                                })
                                mouseCursorHighlighted(sections.question2);
                            }}
                        >
                            {sections.question2}
                        </label>
                        <label
                            style={{ fontSize: '16px', color: 'black' }}
                            className="textCursor"
                            onMouseEnter={() => {
                                enterTime = new Date();
                            }}
                            onMouseLeave={() => {
                                mouseOverFunc(sections.question3)
                            }}
                            onMouseDown={() => mouseCursorHighlighted(sections.question3)}
                            onMouseUp={() => {
                                const textHighlighted = window.getSelection().toString();
                                Object.values(sections).map(s => {
                                    if (textHighlighted.includes(s)) {
                                        mouseCursorHighlighted(s);
                                    }
                                    return 0;
                                })
                                mouseCursorHighlighted(sections.question3);
                            }}
                        >
                            {sections.question3}
                        </label>
                        <label
                            style={{ fontSize: '16px', color: 'black' }}
                            className="textCursor"
                            onMouseEnter={() => {
                                enterTime = new Date();
                            }}
                            onMouseLeave={() => {
                                mouseOverFunc(sections.question4)
                            }}
                            onMouseDown={() => mouseCursorHighlighted(sections.question4)}
                            onMouseUp={() => {
                                const textHighlighted = window.getSelection().toString();
                                Object.values(sections).map(s => {
                                    if (textHighlighted.includes(s)) {
                                        mouseCursorHighlighted(s);
                                    }
                                    return 0;
                                })
                                mouseCursorHighlighted(sections.question4);
                            }}
                        >
                            {sections.question4}
                        </label>
                        <label
                            style={{ fontSize: '16px', color: 'black' }}
                            className="textCursor"
                            onMouseEnter={() => {
                                enterTime = new Date();
                            }}
                            onMouseLeave={() => {
                                mouseOverFunc(sections.question5)
                            }}
                            onMouseDown={() => mouseCursorHighlighted(sections.question5)}
                            onMouseUp={() => {
                                const textHighlighted = window.getSelection().toString();
                                Object.values(sections).map(s => {
                                    if (textHighlighted.includes(s)) {
                                        mouseCursorHighlighted(s);
                                    }
                                    return 0;
                                })
                                mouseCursorHighlighted(sections.question5);
                            }}
                        >
                            {sections.question5}
                        </label>
                    </div>
                    <br />
                    <div>
                        <label
                            style={{ fontSize: '16px', color: 'black', paddingLeft: '10px' }}
                            className="textCursor"
                            onMouseEnter={() => {
                                enterTime = new Date();
                            }}
                            onMouseLeave={() => {
                                mouseOverFunc(sections.code1part1);
                            }}
                            onMouseDown={() => mouseCursorHighlighted(sections.code1part1)}
                            onMouseUp={() => {
                                const textHighlighted = window.getSelection().toString();
                                Object.values(sections).map(s => {
                                    if (textHighlighted.includes(s)) {
                                        mouseCursorHighlighted(s);
                                    }
                                    return 0;
                                })
                                mouseCursorHighlighted(sections.code1part1);
                            }}
                        >
                            {sections.code1part1}
                        </label>
                    </div>
                    <div>
                        <label
                            style={{ fontSize: '16px', color: 'black', paddingLeft: '10px' }}
                            className="textCursor"
                            onMouseEnter={() => {
                                enterTime = new Date();
                            }}
                            onMouseLeave={() => {
                                mouseOverFunc(sections.code2part1);
                            }}
                            onMouseDown={() => mouseCursorHighlighted(sections.code2part1)}
                            onMouseUp={() => {
                                const textHighlighted = window.getSelection().toString();
                                Object.values(sections).map(s => {
                                    if (textHighlighted.includes(s)) {
                                        mouseCursorHighlighted(s);
                                    }
                                    return 0;
                                })
                                mouseCursorHighlighted(sections.code2part1);
                            }}
                        >
                            {sections.code2part1}
                        </label>
                        <label
                            style={{ fontSize: '16px', color: 'black' }}
                            className="textCursor"
                            onMouseEnter={() => {
                                enterTime = new Date();
                            }}
                            onMouseLeave={() => {
                                mouseOverFunc(sections.code2part2);
                            }}
                            onMouseDown={() => mouseCursorHighlighted(sections.code2part2)}
                            onMouseUp={() => {
                                const textHighlighted = window.getSelection().toString();
                                Object.values(sections).map(s => {
                                    if (textHighlighted.includes(s)) {
                                        mouseCursorHighlighted(s);
                                    }
                                    return 0;
                                })
                                mouseCursorHighlighted(sections.code2part2);
                            }}
                        >
                            {sections.code2part2}
                        </label>
                    </div>
                    <div>
                    <label
                            style={{ fontSize: '16px', color: 'black', paddingLeft: '10px' }}
                            className="textCursor"
                            onMouseEnter={() => {
                                enterTime = new Date();
                            }}
                            onMouseLeave={() => {
                                mouseOverFunc(sections.code3part1);
                            }}
                            onMouseDown={() => mouseCursorHighlighted(sections.code3part1)}
                            onMouseUp={() => {
                                const textHighlighted = window.getSelection().toString();
                                Object.values(sections).map(s => {
                                    if (textHighlighted.includes(s)) {
                                        mouseCursorHighlighted(s);
                                    }
                                    return 0;
                                })
                                mouseCursorHighlighted(sections.code3part1);
                            }}
                        >
                            {sections.code3part1}
                        </label>
                    </div>
                    <table>
                        <tr style={{ border: 'none' }}>
                            <td style={{ paddingLeft: '10px' }}>
                                <button className="answerBtn pink lighten-1 z-depth-0" style={{ fontSize: '32px', height: '100px', width: '450px' }} onClick={() => {
                                    selectedAnswer('A');
                                }}>A. 15</button>
                            </td>
                            <td>
                                <button className="answerBtn purple lighten-1 z-depth-0" style={{ fontSize: '32px', height: '100px', width: '450px' }} onClick={() => selectedAnswer('B')}>B. 17</button>
                            </td>
                        </tr>
                        <tr style={{ border: 'none', paddingLeft: '10px' }}>
                            <td style={{ paddingLeft: '10px' }}>
                                <button className="answerBtn blue lighten-1 z-depth-0" style={{ fontSize: '32px', height: '100px', width: '450px' }} onClick={() => selectedAnswer('C')}>C. 17.5</button>
                            </td>
                            <td>
                                <button className="answerBtn orange lighten-1 z-depth-0" style={{ fontSize: '32px', height: '100px', width: '450px' }} onClick={() => selectedAnswer('D')}>D. 25</button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        personalInfo: state.personalInfo,
        question: state.question,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmitQuestion: (response) => {
            dispatch(submitQues1Reponse(response));
            dispatch(setNextQuestion(2));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Question1);