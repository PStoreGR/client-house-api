export default async function getHouse ( name: string ) {
    const res = await fetch( `https://server-houseapi.pstoregr.dev/houses?name=${ name }` );
    if ( res.ok ) {
        const data = await res.json();
        return data;
    }
}
