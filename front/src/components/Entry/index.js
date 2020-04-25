import React from 'react';
import moment from 'moment';

// Components
import { UserCard } from '../../components/UserCard';
import { LikeButton } from '../../components/LikeButton';
import { LikesFaces } from '../../components/LikesFaces';
import { DropDownMenu } from '../../components/DropDownMenu';
import { MoreVertical, Edit, Trash2 } from 'react-feather'

// Services
import { deleteEntry, likeEntry } from '../../service/entries';
import { useUser } from '../../context/user';

export const Entry = ({ entry, setEntry }) => {

    const loggedInUser = useUser();

    const handleDeleteEntry = async (id) => {
        const entries = await deleteEntry(id);
        setEntry(entries.data);
    }

    const handleLike = async (id) => {
        const entries = await likeEntry(id);
        setEntry(entries.data);
    }

    return (
        <article className="post-box section-box section-box--shadow">
            <header className="post-box__header">
                {
                    (loggedInUser._id === entry.author._id) &&
                    <DropDownMenu icon={<MoreVertical size={16} />}>
                        <button className="button" onClick={() => handleDeleteEntry(entry._id)}>
                            <Trash2 size={14} />
                            <span>Delete</span>
                        </button>
                    </DropDownMenu>
                }
                <UserCard
                    avatar={entry.author.avatar}
                    avatarSize={38}
                    name={entry.author.fullName}
                    time={moment(entry.date).fromNow()} />
            </header>
            <div className="post-box__body">
                <p>{entry.body}</p>
            </div>
            <footer className="post-box__footer">
                {
                    (entry.author.id !== loggedInUser._id) &&
                        <LikeButton entry={entry} count={entry.likes.length} onClick={() => handleLike(entry._id)} className="mr-4" />
                }
                {entry.likes && <LikesFaces entries={entry.likes} />}
            </footer>
        </article>
    )
}