import { useState } from "react"
import 'react-quill/dist/quill.snow.css'
import { Navigate} from "react-router-dom"
import Editor from "../Editor"


export default function CreatePost(){
    const [title,setTitle] = useState('')
    const [summary,setSummary] = useState('')
    const [content,setContent] = useState('')
    const [files,setFiles] = useState('')
    const [redirect, setRedirect] = useState(false)

    async function createNewPost(ev){
        const data = new FormData()
        data.set('title',title)
        data.set('summary',summary)
        data.set('content',content)
        data.set('file',files[0])

        ev.preventDefault()
        const response = await fetch('http://localhost:4000/post',{
            method: 'POST',
            body: data,
            credentials: 'include',
        })

        if (response.ok){
            setRedirect(true)
        }
    }

        if(redirect){
            return <Navigate to={'/'}/>
        }
    return(
        <form onSubmit={createNewPost} style={{ marginTop: '3rem' }}>
            <h1 className="text-center text-4xl font-bold mb-4">Halaman Post</h1>
            <input type="title" placeholder={'Title'} value={title} onChange={ev =>setTitle(ev.target.value)} required/>
            <input type="summary" placeholder={'Summary'} value={summary} onChange={ev =>setSummary(ev.target.value)} required/>
            <input type="file"  onChange={ev => setFiles(ev.target.files)} required/>
            <Editor value={content} onChange={setContent}/>
            <button className="post">Create Post</button>
        </form>
    )
}

