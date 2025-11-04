import { useEffect, useState } from "react";
import CommentForm from "./CommentForm";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


export default function CommentsSection({ commentSections , placeName}) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/api/comments?place=${encodeURIComponent(placeName)}`)
            .then((res) => res.json())
            .then((data) => setComments(data))
    }, [placeName])

    const addComment = async (newComment) => {
        const res = await fetch('http://localhost:5000/api/comments', {
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


    return (
        <div className='placePortal'>

            <div className='placePortalWrapper' style={{ backgroundColor: '#1f1f1fff' }}>
                <FaArrowLeft
                    className="arrowLeft"
                    onClick={() => commentSections(false)}
                    style={{
                        zIndex: "40000",
                        position: 'relative',
                        fill: 'white',
                        top: '15px',
                        left: '93%',
                        fontSize: '25px'
                    }}
                />

                <h2>Komentari</h2>

                <CommentForm onSubmit={(comment) => addComment({...comment, place: placeName})} />

                <div>

                    {comments.length === 0 && <p>Nema komentara još.</p>}
                    {comments.map((c) => (
                        <div key={c.ID || c._id}>
                            <p><strong>{c.Username}</strong></p>
                            <p>{c.Comment}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}