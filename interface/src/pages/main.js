import React,{ useEffect,useState } from 'react';
import api from '../services/api';
import Logo from '../images/logo.svg';
import Like from '../images/like.svg';
import Dislike from '../images/dislike.svg';

import './main.css';

const Main = ({ match }) => {
    const { id } = match.params;
    const [users,setUsers] = useState([]);

    useEffect(() => {
        async function loadUsers(){
            const response = await api.get('devs',{
                headers:{
                    "userid": id
                }
            });

            setUsers(response.data);
        }

        loadUsers();
    },[id]);
    
    async function handleLike(likeId){

        console.log(likeId);

        await api.post(`devs/${id}/likes`,null,{
            headers: {
                userid: likeId
            }
        })

        setUsers(users.filter( user => user._id !==  likeId));
    }

    async function handleDislike(dislikeId){
        console.log(dislikeId);

        await api.post(`devs/${id}/dislikes`,null,{
            headers: {
                userid: dislikeId
            }
        });

        setUsers(users.filter( user => user._id !==  dislikeId));
    }

    return(

        <div className='main-container'>
            <img src={ Logo } alt='Tindev' />

            {users.length > 0 ? (
                <ul>
                    {users.map(user => (
                        <li key={ user._id }>
                            <img src={ user.avatar } alt={ user.name } />
                            <footer>
                                <strong>{ user.name }</strong>
                                <p>{ user.bio }</p>
                            </footer>

                            <div className='buttons'>
                                <button 
                                    type='button'
                                    onClick={ () => handleLike(user._id) }
                                >
                                    <img src={ Like } alt='Like' />
                                </button>
                                <button                                 
                                    type='button'
                                    onClick={ () => handleDislike(user._id) }
                                >
                                    <img src={ Dislike } alt='Disike' />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <div>No more DEVS :(</div>
            )}
        </div>
    );
}

export default Main;