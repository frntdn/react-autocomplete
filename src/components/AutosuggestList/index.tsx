import React from 'react';
import {Artist} from "../../types/Artists";
import Item from './Item';
import './styles.css';

interface AutosuggestListProps {
    searchValue: string;
    options: Artist[];
}

export default function AutosuggestList(props: AutosuggestListProps) {
    const {
        searchValue,
        options
    } = props;

    const searchValueRegExp = new RegExp(searchValue, 'gi')

    if (options.length === 0) {
        return (
            <div>
                No result
            </div>
        )
    }

    return (
        <ul className="list-wrapper">
            {
                options.map(artist =>
                    <Item
                        {...artist}
                        key={artist.artistId}
                        searchValue={searchValue}
                        searchValueRegExp={searchValueRegExp}
                    />
                )
            }
        </ul>
    );
}