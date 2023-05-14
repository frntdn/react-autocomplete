import React, {useEffect, useRef} from 'react';
import './styles.css'
import {Artist} from "../../../types/Artists";

interface ItemProps extends Artist {
    searchValue: string;
    searchValueRegExp: RegExp;
}

export default function Item(props: ItemProps) {
    const {searchValue, searchValueRegExp, artistLinkUrl, artistName,primaryGenreName, } = props;
    const artistNameRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        if (artistNameRef && artistNameRef.current) {
            const newArtistName = artistName.replaceAll(searchValueRegExp, `<mark>${searchValue}</mark>`)
            artistNameRef.current.innerHTML = newArtistName
        }
    }, [searchValue, artistName, searchValueRegExp, artistNameRef]);

    return (
        <li className='item'>
            <a ref={artistNameRef} className='name-link' target='_blank' href={artistLinkUrl} rel='noreferrer'>{artistName}</a>
            {primaryGenreName && <span className='genre'>{primaryGenreName}</span>}
        </li>
    )
}