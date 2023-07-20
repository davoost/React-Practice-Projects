import React from 'react'
import Question from './components/question'
import {nanoid} from "nanoid"
import './app.css'
import Answer from './components/answer'

function App(){
    const [triviaData, setTriviaData] = React.useState({})
    const [answers, setAnswers] = React.useState({})
    const [count, setCount] = React.useState(1)

    console.log('component rendered')

    //side effects - fetch considered side effect happens outside react
    //useEffect requires a function 

    React.useEffect(()=> {
        async function fetchData(){
        const response = await fetch('https://opentdb.com/api.php?amount=10');
        const data = await response.json();
        setTriviaData(data.results.map(
            (triviaItem)=>{
            return{
            key: nanoid(),
            category: triviaItem.category, 
            question: triviaItem.question,
            correct_answer: triviaItem.correct_answer,
            incorrect_answers: triviaItem.incorrect_answers,
    }}))};
    fetchData();
}, [count])

    React.useEffect(()=> {
        if(triviaData[0]){
            setAnswers(triviaData.map((item, index)=>{
                return{
                    key: nanoid(),
                    question_number: index,
                    answer: item.correct_answer,
                    isSelected: false
                }
            }))}}, [count])

    function handleSelected(){}
    


    let questionElements;
    let answerElements; 
    if(triviaData[0]){
        //load up the answers into state
        questionElements = triviaData.map((item)=>
            {return <div>
                <Question
            key = {item.key}
            question = {item.question}
            ></Question>
            <div className='answers-container'>
            {answerElements = answers.map((answerItem)=>
                {return <Answer 
                    answer={answerItem.answer}
                    handleSelected={handleSelected}
                    isSelected = {answerItem.isSelected}
                    ></Answer>}
                )}
            </div>
            </div>
            }
        )
    }
    return(
        <div>
            {questionElements}
            <button>Submit</button>
        </div>
    )
}

export default App

/*

{answerElements = item.incorrect_answers.map((answerItem)=>
                {return <Answer 
                    answer={answerItem}
                    handleSelected={handleSelected}
                    isSelected = {false}
                    ></Answer>}
                )}
                <Answer 
                answer={item.correct_answer}
                handleSelected={handleSelected}
                isSelected = {false}
                ></Answer>

for (let i=0; i<triviaData.length; i++){
            answers = [triviaData[i].correct_answer]
            for(let j=0; j<triviaData[i].incorrect_answers.length; j++){
                answers.push(triviaData[i].incorrect_answers[j])
            }
            allAnswers.push(answers)
            }
            
        console.log(allAnswers)

setAnswer(triviaData.map(
                (triviaQuestion) => {
                    return triviaQuestion.correct_answer
                }
            )
        )

{answerElements  = answer.map((a) => 
                {return <Answer
                    id = {nanoid()}
                    handleSelected = {handleClick}
                    answer = {a}
                    isSelected = {false}
                    ></Answer>})}
            <Answer
                id = {nanoid()}
                handleSelected = {handleClick}
                answer = {item.correct_answer}
                isSelected = {false}
            ></Answer>


<Answer
            answer = {item.correct_answer}
            handleSelected = {handleClick}
            isSelected = {false} //default to false but need to put in state
            id = {nanoid()}
            ></Answer>



            let allAnswers;
    let answers;
    


    function handleClick(id){
        setAnswer(prevData => {
            return prevData.map((item)=>{
                return item.id === id ? {...item, isSelected: !item.isSelected} : item
            })
        })
    }

    function checkAnswers(){
        setCount(count=count + 1)
    }

    let questionElements;
    let answerElements; 



    React.useEffect(()=> {
        if(triviaData[0]){
            setAnswer(()=> triviaData.map((item)=>{
                return item.correct_answer
            }))}}, [count])
            */