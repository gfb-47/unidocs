import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AppContainer from './AppContainer';
import api from '../api';

const Home = () => {
    const [posts, setPosts] = useState(null);
    const fetchPosts = () => {
        api.getAllPosts().then(res => {
            console.log('Getting all Posts...');
            const result = res.data.data;
            setPosts(result);
        });
    };
    useEffect(() => {
        fetchPosts();
    }, []);

    const renderPosts = () => {
        if (!posts) {
            return (

                <tr colSpan="4">
                    Loading...
                </tr>
            );
        }
        if (posts.length === 0) {
            return (

                <tr colSpan="4">
                    There's no post yet. Please add One :)...
                </tr>
            );
        }


        return posts.map((post) => (
            <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.description}</td>
                <td>
                    <Link to={`/home/edit/${post.id}`} className="btn btn-warning">EDIT</Link>
                    <button onClick={() => {
                        api.deletePost(post.id).then(
                            fetchPosts()
                        ).catch(err => {
                            alert('Failed To Delete');
                        })
                    }} className="btn btn-danger">DELETE</button>
                </td>
            </tr>
        ));
    };
    return (
        <AppContainer
            title="Teste"
        >
            <Link to="/home/add" className="btn btn-primary float-right">Add New</Link>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID.</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderPosts()}

                    </tbody>
                </table>
            </div>
        </AppContainer>
    );
}

export default Home;