import React, { useState } from 'react'
import "./Layout.css"


const Layout = ({ student, addTag, index, tags }) => {
    const [click, setClick] = useState(false)


    const clickHandler = () => {
        setClick(!click)

    }



    return (
        <div className="layout">
            <div className="pics">
                <img src={student.pic} alt="pics" />
            </div>
            <div>
                <h2>{`${student.firstName} ${student.lastName}`.toUpperCase()}</h2>
                <p> Email: {student.email}</p>
                <p>id: {student.id}</p>
                <p>Average: {student.grades.reduce((acc, currentValue) => acc + parseInt(currentValue), 0) / student.grades.length}</p>
                {click ?
                    (
                        <>
                            <p>city: {student.city}</p>
                            <p>Company: {student.company}</p>
                            <p>skill: {student.skill}</p>
                            <p>Test1: {student.grades[0]}</p>
                            <p>Test2: {student.grades[1]}</p>
                            <p>Test3: {student.grades[2]}</p>
                            <p>Test4: {student.grades[3]}</p>
                            <p>Test5: {student.grades[4]}</p>
                            <p>Test6: {student.grades[5]}</p>
                            <p>Test7: {student.grades[6]}</p>
                            <p>Test8: {student.grades[7]}</p>
                            <p>tag: {student.tag.join(" ")}</p>

                            <input type="text" placeholder="enter a tag" onKeyPress={(event) => addTag(student, index, event)} />
                        </>
                    ) :
                    <div></div>
                }
            </div>
            <div>
                <h1 className="button" onClick={(e) => (clickHandler(e))}>{(click === false) ? (<div>+</div>) : (<div>-</div>)}</h1>
            </div>
        </div>
    )
}

export default Layout
