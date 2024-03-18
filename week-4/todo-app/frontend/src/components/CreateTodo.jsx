import React, { useState } from 'react';
export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <div>

        <input type="text" placeholder="Title" onChange={function (e) {
            const value = e.target.value;
            setTitle(value)
        }} /><br />
        <input type="text" placeholder="Description" onChange={function (e) {
            const value = e.target.value;
            setDescription(value)
        }

        } /><br />

        <button onClick={() => {
            fetch("http://localhost:3000/todos",
                {
                    method: "POST",
                    body: JSON.stringify({
                        title: title,
                        description: description
                    }),
                    headers: {
                        "content-type": "application/json"
                    }
                }
            ).then(async function (res) {
                const json = await res.json();
                alert("Todo added")
            })
        }}>Add Todo</button>
    </div>
}