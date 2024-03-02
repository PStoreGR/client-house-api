export default async function getHouses () {
    const res = await fetch( `https://server-houseapi.pstoregr.dev/houses` );
    if ( res.ok ) {
        const data = await res.json();
        return data;
    }
}
