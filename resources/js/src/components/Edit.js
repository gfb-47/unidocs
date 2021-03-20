import React, { useState,useEffect } from 'react';
import { useHistory,useParams } from 'react-router-dom';
import AppContainer from './AppContainer';
import api from '../api';

const Edit = () => {
    const history = useHistory();
    const {id} = useParams();
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const onEditSubmit = async () => {
        setLoading(true);
        try {
            await api.updatePost({title,description},id);
            history.push('/');
        }catch(e) {
          console.log('error');  
        }
        setLoading(false);

    }
    useEffect(() => {
        api.getOnePost(id).then(res => {
            const result = res.data.data;
            setTitle(result.title);
            setDescription(result.description);
        })
    }, []);


    return (
        <AppContainer title="Edit Item">
            <form>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea className="form-control" value={description}
                        onChange={e => setDescription(e.target.value)} />
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <button disabled={loading} onClick={onEditSubmit} type="button" className="btn btn-success float-right">{loading ? 'Loading...': 'Edit'}</button>
                    </div>
                </div>
            </form>
        </AppContainer>
    );
}

export default Edit;