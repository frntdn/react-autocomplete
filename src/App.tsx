import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';
import './App.css';
import {Artist} from "./types/Artists";
import useDebounce from "./hooks/useDebounce";
import Input from './components/Input'
import {getArtists} from "./api/getArtists";
import AutosuggestList from "./components/AutosuggestList";

function App() {
    const [value, setValue] = useState<string | undefined>();
    const [options, setOptions] = useState<Artist[] | null>(null);
    const debouncedValue = useDebounce(value, 200);

    useEffect(() => {
        async function loadArtist(term: string) {
            try {
                const result = await getArtists(term)
                setOptions(result);
            } catch (error) {
                if (String(error) === 'AbortError: The user aborted a request.') {
                    setOptions([]);
                    return;
                }
            }
        }

        if (typeof debouncedValue !== 'string') return;

        loadArtist(debouncedValue)
    }, [debouncedValue])

    const handleChange = useCallback(({target: {value}}: ChangeEvent<HTMLInputElement>) => {
        setValue(value)
    }, []);

    return (
        <div className="AutoSuggest">
            <Input
                type='text'
                value={value || ''}
                placeholder="Eminem"
                onChange={handleChange}
                label="Search your artist on iTunes:"
            />
            {
                typeof value === 'string' && value !== '' && Array.isArray(options) &&
                    <AutosuggestList searchValue={value} options={options} />
            }
        </div>
    );
}

export default App;
