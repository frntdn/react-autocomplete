enum GenreName {
    "Pop" = "Pop",
    "Hip-Hop/Rap" = "Hip-Hop/Rap"
    // etc
}

enum ArtistType {
    "Artist" = "Artist",
    "SoftwareArtist" = "SoftwareArtist"
    // etc
}

enum WrapperType {
    "artist" = "artist"
    // etc
}
export interface Artist {
    artistId: number;
    artistName: string;
    amgArtistId?: number;
    artistLinkUrl: string;
    primaryGenreId: number;
    artistType: keyof typeof ArtistType;
    wrapperType: keyof typeof WrapperType;
    primaryGenreName: keyof typeof GenreName;
};