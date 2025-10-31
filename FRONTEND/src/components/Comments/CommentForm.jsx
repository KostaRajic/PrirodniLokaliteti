/* eslint-disable react/prop-types */
import { useState } from "react";

export default function CommentForm({ onSubmit }) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !comment) return alert('Ime i komentar su obavezni!')


        await onSubmit({ name, email, comment });
        setName('');
        setEmail('');
        setComment('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Ime"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={{ color: 'black' }}
            />
            <textarea
                placeholder="Vaš komentar"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                style={{ color: 'black' }}
            />
            <button type="submit">
                Pošalji komentar
            </button>
        </form>
    )
}