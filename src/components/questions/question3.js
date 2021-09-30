import React, { Component } from 'react'
import { connect } from 'react-redux'
import './questionStyle.css'
import { mouseOverFunc as mouseOverFunc1, highlightedFunc } from './cursorEngagement'
import { submitQues3Reponse, setNextQuestion } from '../../store/actions/questionActions'

export class Question3 extends Component {

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
        
        const q3 = "Question 3";
        const sections = {
            question1: "Consider the following",
            question2: " code fragment:",
            code1part1: "Integer num1 = 100;",
            code2part1: "Integer num2 = 100;",
            code3part1: "Integer num3 = 500;",
            code4part1: "Integer num4 = 500;",
            code5part1: "if (num1 == num2)",
            code6part1: "System.out.println(\"num1 == num2\");",
            code7part1: "else",
            code8part1: "System.out.println(\"num1 != num2\");",
            code9part1: "if (num3 == num4)",
            code10part1: "System.out.println(\"num3 == num4\");",
            code11part1: "else",
            code12part1: "System.out.println(\"num3 != num4\");",
            question3: "What would be",
            question4: " the output?",
            answer1: "A. num1 == num2",
            answer1a: "num3 == num4",
            answer2: "B. num1 == num2",
            answer2a: "num3 != num4",
            answer3: "C. num1 != num2",
            answer3a: "num3 == num4",
            answer4: "D. num1 != num2",
            answer4a: "num3 != num4"
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
                    <h5 className="grey-text text-darken-3" style={{ paddingLeft: '10px' }}>{q3}</h5>
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
                    <div>
                        <label
                            style={{ fontSize: '16px', color: 'black', paddingLeft: '10px' }}
                            className="textCursor"
                            onMouseEnter={() => {
                                enterTime = new Date();
                            }}
                            onMouseLeave={() => {
                                mouseOverFunc(sections.code4part1);
                            }}
                            onMouseDown={() => mouseCursorHighlighted(sections.code4part1)}
                            onMouseUp={() => {
                                const textHighlighted = window.getSelection().toString();
                                Object.values(sections).map(s => {
                                    if (textHighlighted.includes(s)) {
                                        mouseCursorHighlighted(s);
                                    }
                                    return 0;
                                })
                                mouseCursorHighlighted(sections.code4part1);
                            }}
                        >
                            {sections.code4part1}
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
                                mouseOverFunc(sections.code5part1);
                            }}
                            onMouseDown={() => mouseCursorHighlighted(sections.code5part1)}
                            onMouseUp={() => {
                                const textHighlighted = window.getSelection().toString();
                                Object.values(sections).map(s => {
                                    if (textHighlighted.includes(s)) {
                                        mouseCursorHighlighted(s);
                                    }
                                    return 0;
                                })
                                mouseCursorHighlighted(sections.code5part1);
                            }}
                        >
                            {sections.code5part1}
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
                                mouseOverFunc(sections.code6part1);
                            }}
                            onMouseDown={() => mouseCursorHighlighted(sections.code6part1)}
                            onMouseUp={() => {
                                const textHighlighted = window.getSelection().toString();
                                Object.values(sections).map(s => {
                                    if (textHighlighted.includes(s)) {
                                        mouseCursorHighlighted(s);
                                    }
                                    return 0;
                                })
                                mouseCursorHighlighted(sections.code6part1);
                            }}
                        >
                            {sections.code6part1}
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
                                mouseOverFunc(sections.code7part1);
                            }}
                            onMouseDown={() => mouseCursorHighlighted(sections.code7part1)}
                            onMouseUp={() => {
                                const textHighlighted = window.getSelection().toString();
                                Object.values(sections).map(s => {
                                    if (textHighlighted.includes(s)) {
                                        mouseCursorHighlighted(s);
                                    }
                                    return 0;
                                })
                                mouseCursorHighlighted(sections.code7part1);
                            }}
                        >
                            {sections.code7part1}
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
                                mouseOverFunc(sections.code8part1);
                            }}
                            onMouseDown={() => mouseCursorHighlighted(sections.code8part1)}
                            onMouseUp={() => {
                                const textHighlighted = window.getSelection().toString();
                                Object.values(sections).map(s => {
                                    if (textHighlighted.includes(s)) {
                                        mouseCursorHighlighted(s);
                                    }
                                    return 0;
                                })
                                mouseCursorHighlighted(sections.code8part1);
                            }}
                        >
                            {sections.code8part1}
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
                                mouseOverFunc(sections.code9part1);
                            }}
                            onMouseDown={() => mouseCursorHighlighted(sections.code9part1)}
                            onMouseUp={() => {
                                const textHighlighted = window.getSelection().toString();
                                Object.values(sections).map(s => {
                                    if (textHighlighted.includes(s)) {
                                        mouseCursorHighlighted(s);
                                    }
                                    return 0;
                                })
                                mouseCursorHighlighted(sections.code9part1);
                            }}
                        >
                            {sections.code9part1}
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
                                mouseOverFunc(sections.code10part1);
                            }}
                            onMouseDown={() => mouseCursorHighlighted(sections.code10part1)}
                            onMouseUp={() => {
                                const textHighlighted = window.getSelection().toString();
                                Object.values(sections).map(s => {
                                    if (textHighlighted.includes(s)) {
                                        mouseCursorHighlighted(s);
                                    }
                                    return 0;
                                })
                                mouseCursorHighlighted(sections.code10part1);
                            }}
                        >
                            {sections.code10part1}
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
                                mouseOverFunc(sections.code11part1);
                            }}
                            onMouseDown={() => mouseCursorHighlighted(sections.code11part1)}
                            onMouseUp={() => {
                                const textHighlighted = window.getSelection().toString();
                                Object.values(sections).map(s => {
                                    if (textHighlighted.includes(s)) {
                                        mouseCursorHighlighted(s);
                                    }
                                    return 0;
                                })
                                mouseCursorHighlighted(sections.code11part1);
                            }}
                        >
                            {sections.code11part1}
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
                                mouseOverFunc(sections.code12part1);
                            }}
                            onMouseDown={() => mouseCursorHighlighted(sections.code12part1)}
                            onMouseUp={() => {
                                const textHighlighted = window.getSelection().toString();
                                Object.values(sections).map(s => {
                                    if (textHighlighted.includes(s)) {
                                        mouseCursorHighlighted(s);
                                    }
                                    return 0;
                                })
                                mouseCursorHighlighted(sections.code12part1);
                            }}
                        >
                            {sections.code12part1}
                        </label>
                    </div>
                    <br />
                    <div style={{ fontWeight: 'bold' }}>
                        <label
                            style={{ fontSize: '16px', color: 'black', paddingLeft: '10px' }}
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
                                mouseOverFunc(sections.answer1);
                            }}
                            onMouseDown={() => mouseCursorHighlighted(sections.answer1)}
                            onMouseUp={() => {
                                const textHighlighted = window.getSelection().toString();
                                Object.values(sections).map(s => {
                                    if (textHighlighted.includes(s)) {
                                        mouseCursorHighlighted(s);
                                    }
                                    return 0;
                                })
                                mouseCursorHighlighted(sections.answer1);
                            }}
                        >
                            {sections.answer1}
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
                                mouseOverFunc(sections.answer1a);
                            }}
                            onMouseDown={() => mouseCursorHighlighted(sections.answer1a)}
                            onMouseUp={() => {
                                const textHighlighted = window.getSelection().toString();
                                Object.values(sections).map(s => {
                                    if (textHighlighted.includes(s)) {
                                        mouseCursorHighlighted(s);
                                    }
                                    return 0;
                                })
                                mouseCursorHighlighted(sections.answer1a);
                            }}
                        >
                            {sections.answer1a}
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
                                mouseOverFunc(sections.answer2);
                            }}
                            onMouseDown={() => mouseCursorHighlighted(sections.answer2)}
                            onMouseUp={() => {
                                const textHighlighted = window.getSelection().toString();
                                Object.values(sections).map(s => {
                                    if (textHighlighted.includes(s)) {
                                        mouseCursorHighlighted(s);
                                    }
                                    return 0;
                                })
                                mouseCursorHighlighted(sections.answer2);
                            }}
                        >
                            {sections.answer2}
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
                                mouseOverFunc(sections.answer2a);
                            }}
                            onMouseDown={() => mouseCursorHighlighted(sections.answer2a)}
                            onMouseUp={() => {
                                const textHighlighted = window.getSelection().toString();
                                Object.values(sections).map(s => {
                                    if (textHighlighted.includes(s)) {
                                        mouseCursorHighlighted(s);
                                    }
                                    return 0;
                                })
                                mouseCursorHighlighted(sections.answer2a);
                            }}
                        >
                            {sections.answer2a}
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
                                mouseOverFunc(sections.answer3);
                            }}
                            onMouseDown={() => mouseCursorHighlighted(sections.answer3)}
                            onMouseUp={() => {
                                const textHighlighted = window.getSelection().toString();
                                Object.values(sections).map(s => {
                                    if (textHighlighted.includes(s)) {
                                        mouseCursorHighlighted(s);
                                    }
                                    return 0;
                                })
                                mouseCursorHighlighted(sections.answer3);
                            }}
                        >
                            {sections.answer3}
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
                                mouseOverFunc(sections.answer3a);
                            }}
                            onMouseDown={() => mouseCursorHighlighted(sections.answer3a)}
                            onMouseUp={() => {
                                const textHighlighted = window.getSelection().toString();
                                Object.values(sections).map(s => {
                                    if (textHighlighted.includes(s)) {
                                        mouseCursorHighlighted(s);
                                    }
                                    return 0;
                                })
                                mouseCursorHighlighted(sections.answer3a);
                            }}
                        >
                            {sections.answer3a}
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
                                mouseOverFunc(sections.answer4);
                            }}
                            onMouseDown={() => mouseCursorHighlighted(sections.answer4)}
                            onMouseUp={() => {
                                const textHighlighted = window.getSelection().toString();
                                Object.values(sections).map(s => {
                                    if (textHighlighted.includes(s)) {
                                        mouseCursorHighlighted(s);
                                    }
                                    return 0;
                                })
                                mouseCursorHighlighted(sections.answer4);
                            }}
                        >
                            {sections.answer4}
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
                                mouseOverFunc(sections.answer4a);
                            }}
                            onMouseDown={() => mouseCursorHighlighted(sections.answer4a)}
                            onMouseUp={() => {
                                const textHighlighted = window.getSelection().toString();
                                Object.values(sections).map(s => {
                                    if (textHighlighted.includes(s)) {
                                        mouseCursorHighlighted(s);
                                    }
                                    return 0;
                                })
                                mouseCursorHighlighted(sections.answer4a);
                            }}
                        >
                            {sections.answer4a}
                        </label>
                    </div>
                    <table>
                        <tr style={{ border: 'none' }}>
                            <td style={{ paddingLeft: '10px' }}>
                                <button className="answerBtn pink lighten-1 z-depth-0" style={{ fontSize: '32px', height: '100px', width: '450px' }} onClick={() => selectedAnswer('A')}>A</button>
                            </td>
                            <td>
                                <button className="answerBtn purple lighten-1 z-depth-0" style={{ fontSize: '32px', height: '100px', width: '450px' }} onClick={() => selectedAnswer('B')}>B</button>
                            </td>
                        </tr>
                        <tr style={{ border: 'none', paddingLeft: '10px' }}>
                            <td style={{ paddingLeft: '10px' }}>
                                <button className="answerBtn blue lighten-1 z-depth-0" style={{ fontSize: '32px', height: '100px', width: '450px' }} onClick={() => selectedAnswer('C')}>C</button>
                            </td>
                            <td>
                                <button className="answerBtn orange lighten-1 z-depth-0" style={{ fontSize: '32px', height: '100px', width: '450px' }} onClick={() => selectedAnswer('D')}>D</button>
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
            dispatch(submitQues3Reponse(response));
            dispatch(setNextQuestion(4));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Question3);