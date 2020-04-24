import React, { useState} from 'react';
import { useForm } from 'react-hook-form'

// Components
import { UserCard } from '../../components/UserCard';
import { createEntry } from '../../service/entries';

export const PublishBox = ({ user, set }) => {

    const [isChecked, setIsChecked] = useState(false)
    const { handleSubmit, register, setValue, errors } = useForm();

    const onFormSubmit = async (data) => {
        setValue('entry', '')
        const newEntry = await createEntry(data);
        set(newEntry.data)
    }

    return (
        <section className="post-box post-box--entry-form section-box section-box--shadow">
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <header className="post-box__header">
                    <h2 className="section-box__title">New post</h2>
                </header>
                <div className="post-box__body">
                    <UserCard avatar={user.avatar} avatarSize={38} />
                    <textarea name="entry" id="entry" placeholder="Share what you are thinking here..." ref={register({ required: true })}></textarea>
                </div>
                <footer className="post-box__footer">
                    <label className="switch">
                        <input name="is_public" type="checkbox" ref={register()} checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
                        <span>Private post</span>
                    </label>
                    <button className="btn btn--primary btn--small">Publish</button>
                </footer>
            </form>
        </section>
    )
}