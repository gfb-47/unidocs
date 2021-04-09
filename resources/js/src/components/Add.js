import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AppContainer from './AppContainer';
import api from '../api';

const Add = () => {
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const onAddSubmit = async () => {
        setLoading(true);
        try {
            await api.addPost({title,description});
            history.push('/home');
        }catch(e) {
          console.log('error');  
        }
        setLoading(false);

    }


    return (
        <AppContainer title="Add New Item">
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
                        <button disabled={loading} onClick={onAddSubmit} type="button" className="btn btn-success float-right">{loading ? 'Loading...': 'Add'}</button>
                    </div>
                </div>
            </form>
        </AppContainer>
    );
}

export default Add;