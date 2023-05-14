import {Artist} from "../types/Artists";

const API_HOST = 'https://itunes.apple.com';
const API_PATH = '/search?entity=allArtist&attribute=allArtistTerm';

interface Response {
    resultCount: number;
    results: Artist[];
}

let controller: AbortController | null;

export async function getArtists(term: string = ''): Promise<Response['results']> {
    if (controller) {
        controller.abort();
        controller = null;
    }

    controller = new AbortController();
    const signal = controller.signal;
    signal.onabort = null;

    return fetch(`${API_HOST}${API_PATH}&term=${term}`, { mode: 'cors', signal })
        .then((response) => {
            if (!response.ok) {
                console.log(`[Wrong response for term = ${term}]: ${response.status}`)
                throw new Error('');
            }

            return response.json();
        }).then((response) => 'results' in response ? response.results : []);
}
