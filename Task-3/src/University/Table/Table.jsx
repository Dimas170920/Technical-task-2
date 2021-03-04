import React from "react"
import s from "./Table.module.css"

export  const Table = (props) =>{
    let id =0;
    return<div>
        <table className={s.table}>
            <thead>
            <tr>
                <th>№</th>
                <th>Web site</th>
                <th>Name</th>
                <th>Domains</th>
                <th>Alpha_two_code</th>
                <th>Country</th>
            </tr>
            </thead>
            <tbody>
            {(props.university).map((u) =>{
                id++
                return(
                <tr key={id}>
                    <td>{id}</td>
                    <td><a href={u.web_pages}>{u.web_pages}</a></td>
                    <td>{u.name}</td>
                    <td>{u.domains}</td>
                    <td>{u.alpha_two_code}</td>
                    <td>{u.country}</td>
                </tr>
            )})}

            </tbody>
        </table>
    </div>
}