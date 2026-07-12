import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'

const ViewCourse = () => {
    const [data, changeData] = useState([])

    const fetchData = () => {
        axios.get("https://host-demo-app.onrender.com/api/courses").then(
            (response) => {
                changeData(response.data)

            }
        ).catch()
    }

    useEffect(
        () => {
            fetchData()
        }, []
    )

    return (
        <div>
            <NavigationBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {data.map(
                                (value, index) => {
                                    return (
                                        <div className="col col-12 col-sm-6 col-md-6 col lg-4 col-xl-4 col-xxl-4">
                                            <div className="card" >
                                               
                                                <div className="card-body">
                                                    <div>
                                                        <strong>Course Name :</strong> {value.course_name} <br />
                                                        <strong>Created at :</strong> {value.created_at} <br />
                                                        <strong>Duration :</strong> {value.duration} <br />
                                                        <strong>Fee : </strong> {value.fee} <br />
                                                        <strong>Mode : </strong> {value.mode} <br />
                                                        <strong>Trainer : </strong> {value.trainer} <br />

                                                       
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            )}

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewCourse