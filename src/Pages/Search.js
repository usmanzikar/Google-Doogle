import React, { useState } from 'react';
import './Search.css';
import SerachIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

const Search = ({ hideButtons = false }) => {
const [{}, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const history = useHistory();
    const search = e => {
        e.preventDefault();

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term:input
        })

        history.push('/search');


    };

    return (
        <form className='search'>
            <div className='search__input'>
                <SerachIcon className="search__inputicon" />
                <input value={input} onChange={e => setInput(e.target.value)} />
                <MicIcon />
            </div>
            {!hideButtons ? (
                <div className='search__buttons'>
                    <Button type='submit' onClick={search} variant='outlined'>GOOGLE SEARCH</Button>
                    <Button variant='outlined'>I'M FEELING LUCKY</Button>

                </div>
            ) : (
                <div className='search__buttons'>
                    <Button className='search__uttonsHidden' type='submit' onClick={search} variant='outlined'>GOOGLE SEARCH</Button>
                    <Button className='search__uttonsHidden' variant='outlined'>I'M FEELING LUCKY</Button>

                </div>
            )}

        </form>
    )
}

export default Search
