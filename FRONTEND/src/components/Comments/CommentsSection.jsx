import { useEffect, useState } from "react";
import CommentForm from "./CommentForm";

export default function CommentsSection() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://api.serbiawonders.com/api/comments')
            .then((res) => res.json())
            .then((data) => setComments(data))
    }, [])

    const addComment = async (newComment) => {
        const res = await fetch('https://api.serbiawonders.com/api/comments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newComment),
        });
        if (res.ok) {
            const saved = await res.json();
            alert(saved.message)
        }

        setComments((prev) => [{ ...newComment, _id: Date.now() }, ...prev]);
    }

    console.log(comments)

    return (
        <div>
            <h2>Komentari</h2>

            <CommentForm onSubmit={addComment} />

            <div>
                {comments.length === 0 && <p>Nema komentara još.</p>}
                {comments.map((c) => (
                    <div key={c._id}>
                        <p>{c.name}</p>
                        <p>{c.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}