import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux';
import { filterBySearch } from '../redux/blog/actions';
import debounce from 'lodash.debounce';

export default function Search() {

    const [input, setInput] = React.useState('');
    const dispatch = useDispatch();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const optimizedSearchHandler = useCallback(
        debounce(nextValue => {
            dispatch(filterBySearch(nextValue))
        }, 1000),
        []
    );

    const handleChange = (e) => {
        setInput(e.target.value);
        optimizedSearchHandler(e.target.value);
    }

    

    return (
        <div
        className="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200"
        >
            <input
                className="outline-none border-none bg-gray-50 h-full w-full mr-2"
                type="search"
                name="search"
                placeholder="Search"
                value={input}
                onChange={handleChange}
            />
            <img
                className="inline h-6 cursor-pointer"
                src="./assets/search.svg"
                alt="Search"
            />
        </div>
    )
}
