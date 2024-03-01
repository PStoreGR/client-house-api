export default async function getHouse ( name: string ) {
    const res = await fetch( `http://localhost:8080/houses?name=${ name }` );
    if ( res.ok ) {
        const data = await res.json();
        return data;
    }
}
