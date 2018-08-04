//@flow
import React, { Component } from 'react';
import {schema, normalize} from 'normalizr'

export class About extends Component <{}> {
    render(){
        console.log(schema, normalize)
        let article = {
            id: 1,
            author: {
                id: 1,
                name: "kenji"
            },
            comment: { user: [{
                    id: 2,
                name: "keiko"
            }
            ]
            },
        }
        const user = new schema.Entity("user")
        const commentSchema = new schema.Entity("comment", {
            comment:  user
        })
        const articleschema = new schema.Entity("article", {
            author: user,
            comment: {user : [commentSchema]}
        });
        const data = normalize(article, articleschema)
        console.log(data)
        return (
            <div>
            <div>
                {JSON.stringify(data)}
        </div>
            </div>
        )
    }
}
