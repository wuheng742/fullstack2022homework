import { useState } from "react"



const Part = ({name, exercises}) => {


    return (
        <div>
            <span>{name}</span>
            <span>{' ' + exercises}</span>

        </div>
    )
}

const Content = ({parts}) => {

    const total = parts.reduce((pre, current)=> {
        return pre + current.exercises
    }, 0)

    return (
        <div>
            {
                parts.map((element, index, array) => {
                    return <Part key={element.id} name={element.name} exercises={element.exercises}></Part>
                })
            }

            <Part name={'Total'} exercises={total}></Part>
        </div>
    )
}

const Course = ({course}) => {



    return (
        <div>
            <h2>{course.name}</h2>
            <Content parts={course.parts}></Content>
        </div>
    )
}


const CourseApp = () => {

    const courses = [
        {
          name: 'Half Stack application development',
          id: 1,
          parts: [
            {
              name: 'Fundamentals of React',
              exercises: 10,
              id: 1
            },
            {
              name: 'Using props to pass data',
              exercises: 7,
              id: 2
            },
            {
              name: 'State of a component',
              exercises: 14,
              id: 3
            },
            {
              name: 'Redux',
              exercises: 11,
              id: 4
            }
          ]
        },
        {
          name: 'Node.js',
          id: 2,
          parts: [
            {
              name: 'Routing',
              exercises: 3,
              id: 1
            },
            {
              name: 'Middlewares',
              exercises: 7,
              id: 2
            }
          ]
        }
      ]

    return (
        <>
            <h1>Half stack application development</h1>
            {
                courses.map((element, index, array)=> {

                   return <Course key={element.id} course={element}></Course>
                })
            }
        </>
    )
}

export default CourseApp