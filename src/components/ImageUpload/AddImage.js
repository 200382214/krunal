import React from 'react';
import firebase from '../../Config'

import {Link} from 'react-router-dom';
import {Card} from 'react-bootstrap';

class AddProduct extends React.Component {
    constructor(props) {
        super(props);
        // this.ref = firebase
        //     .firestore()
        //     .collection("Images");
        // this.unsubscribe = null;
        this.state = {
            name: '',
            url: '',
            images: null,
        };
    }


    onChange = (e) => 
    {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state)
    }
    handleChange = (e) => {
        if(e.target.files[0]){
            this.setState({
                image: e.target.files[0]
            })
        }
        console.log(e.target.files[0]);
    }
    handleUpload = (e) => {
        const {image} = this.state;
        const uploadTask = firebase.storage().ref(`images/${image.name}`).put(this.state.image)
        uploadTask.on('state_changed' , (snapshot) => {console.log('snapshot')},
            (error) => {console.log(error);},
            ()=>{firebase.storage().ref('images').child(image.name).getDownloadURL().then(url => console.log(url))})
    }
    render() {

        const {name} = this.state

        const cardStyles = {
            width: '40rem',
            height: 'auto',
            backGroundColor: 'white',
            margin: 'auto',
            display: 'block',
            marginTop: '60px',
            opacity: 0.5,
            paddingTop: '10px',
            paddingLeft: '20px',
            paddingRight: '20px',
            borderStyle: 'outset',
            borderLeft: '50px solid black',
            borderRadius: '20px'

        }
        return (
            <div>
                <Card style={cardStyles}>
                    <div className="ImageButtons container">
                        <Link to='/'>
                            <button className="btn btn-info Edit-Button">Show Images</button>
                        </Link>
                    </div>
                    <div>
                        <div className="form-group"></div>
                        <label for = "name">Image name</label>
                        <input type="text" className='form-control' name="name" value= {name} onChange={this.onChange}  placeholder="Please Enter Image Name"/>
                    </div>
                    <div className='upload-data'>
                        <input type='file' onChange={this.handleChange} />
                        <img alt="" src={this.state.url} height="200" width='200' />
                    </div>
                    <div className="Buttons">
                        <button className='Submit-Button btn btn-danger' onClick={this.handleUpload}>Upload Image</button>
                        <button className='Submit-Button btn btn-danger' onClick={this.onSubmit}>Save All</button>
                   
                    </div>
                </Card>
            </div>
        ) 
    }
}

export default AddProduct;