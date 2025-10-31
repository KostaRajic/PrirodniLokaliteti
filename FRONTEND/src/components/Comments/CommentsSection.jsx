import { useEffect, useState } from "react";
import CommentForm from "./CommentForm";

export default function CommentsSection() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://prirodnilokaliteti.onrender.com/api/comments')
            .then((res) => res.json())
            .then((data) => setComments(data))
    }, [])

    const addComment = async (newComment) => {
        const res = await fetch('https://prirodnilokaliteti.onrender.com/api/comments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newComment),
        });
        console.log('Šaljem:', newComment);

        if (res.ok) {
            const saved = await res.json();
            alert(saved.message)
        }

        setComments((prev) => [{ ...newComment, _id: Date.now() }, ...prev]);
    }

    // https://prirodnilokaliteti.onrender.com

    return (
        <div className='placePortal'>

            <div className='placePortalWrapper' style={{ backgroundColor: 'wheat' }}>
                <h2>Komentari</h2>

                <CommentForm onSubmit={addComment} />

                <div>
                    {comments.length === 0 && <p>Nema komentara još.</p>}
                    {comments.map((c) => (
                        <div key={c.ID || c._id}>
                            <p><strong>{c.User}</strong></p>
                            <p>{c.Comment}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}