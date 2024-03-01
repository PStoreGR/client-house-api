export default async function getHouses () {
    const res = await fetch( `http://localhost:8080/houses` );
    if ( res.ok ) {
        const data = await res.json();
        return data;
    }
}
