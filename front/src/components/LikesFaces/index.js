import React, { useState, useEffect } from 'react';
import Parser from 'html-react-parser';
import { UserCard } from '../UserCard';

export const LikesFaces = ({ entries }) => {

    const [entriesQty, setEntriesQty] = useState('hola');

    useEffect(() => {
        const length = entries.length;

        switch (length) {
            case 0:
                setEntriesQty('')
                break;
            case 1:
                setEntriesQty(`<b>${entries[0].name}</b> likes this`)
                break;
            case 2:
                setEntriesQty(`<b>${entries[0].name},</b> <b>${entries[1].name}</b> like this`)
                break;
            default:
                setEntriesQty(`<b>${entries[0].name},</b> <b>${entries[1].name}</b> and <br /> ${length - 2} more like this`)
        }
    }, [])

    return (
        entries &&
        <div className="inline-objects">
            <div className="inline-objects__images">
                {
                    entries.slice(0, 5).map((like, i) => (
                        <UserCard key={i}
                            showBorder
                            avatar={like.avatar}
                            avatarSize={28} />
                    ))
                }
            </div>
            <div className="inline-objects__text">
                {Parser(entriesQty)}
            </div>
        </div>
    )
}