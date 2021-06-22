import React, { useState, useEffect } from 'react';
import Layout from '../layout/Layout';
import "./Data.css"


const Data = () => {
    const [students, setStudents] = useState([])
    const [search, setSearch] = useState('')
    const [search_tag, setSearch_tag] = useState('')
    const [tags, setTags] = useState([])



    let filter1 = students.filter(student => {
        return (`${student.firstName} ${student.lastName}`.toLowerCase().includes(search.toLowerCase()))
    })
    let filter_tag = students.filter(student => {
        return (student.tag.join("")).toLowerCase().includes(search_tag.toLowerCase())
    })





    const data = async () => {
        await fetch('https://api.hatchways.io/assessment/students',
            {
                method: "get",
                headers: { "Content-Type": "apllication/json" }
            })
            .then(response => {
                return response.json()
            })
            .then(res => {
                let stu_new = res.students.map(student => {
                    student["tag"] = []

                    return student

                })
                console.log("stu", stu_new);
                setStudents(stu_new)
            })


    }
    useEffect(() => {
        data();

    }, []);
    function intersect(a, b) {
        var setB = new Set(b);
        return [...new Set(a)].filter(x => setB.has(x));
    }
    let addTag = (student, index, event) => {
        if (event.key === "Enter") {
            console.log(event.target.value);
            filter1[index]["tag"] = [...filter1[index]["tag"], event.target.value]
            setTags(filter1[index]["tag"])
            event.target.value = ""
        }

    }
    console.log("st", students);
    console.log("filter", filter1);





    return (
        <>
            <div>
                <input className="search" type="text" placeholder=" search by name" onChange={(e) => setSearch(e.target.value)} />
            </div>
            <div>
                <input className="search" type="text" placeholder="search by tag " onChange={(e) => setSearch_tag(e.target.value)} />
            </div>
            {
                intersect(filter1, filter_tag).map((student, index) => {
                    return (
                        <div key={student.id} >

                            <Layout student={student} index={index} addTag={addTag} tags={tags} />

                        </div>
                    )
                })
            }
        </>
    )
}

export default Data
