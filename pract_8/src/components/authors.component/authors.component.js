import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuthors, getPostsByAuthorId } from '../../services/blogService';
import styles from './authors.module.css';


const AuthorRow = ({ author }) => {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getPostsByAuthorId(author.id).then(data => setPosts(data));
    }, [author.id]);

    return (
        <div className={styles['author-row']}>
            <div className={styles['author-info']}>
                <div className={styles['avatar']}></div>
                <div className={styles['details']}>
                    <h4>{author.name}</h4>
                    <p>{author.email}</p>
                    <p>{author.phone}</p>
                </div>
            </div>

            <div className={styles['posts-scroll-container']}>
                {posts.map(post => (
                    <div key={post.id} className={styles['post-card']}>
                        <div className={styles['post-title']}>
                            {post.title.substring(0, 15)}...
                        </div>
                        <button
                            className={styles['open-btn']}
                            onClick={() => navigate(`/posts/${post.id}`)}
                        >
                            open
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};



export const AuthorsComponent = () => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        getAuthors().then(data => setAuthors(data));
    }, []);

    return (
        <div className={styles['authors-page']}>
            <h1 className={styles['page-title']}>Authors page</h1>
            <div className={styles['authors-list']}>
                {authors.map(author => (
                    <AuthorRow key={author.id} author={author} />
                ))}
            </div>
        </div>
    );
};