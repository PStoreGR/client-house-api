"use client";
import useGetNameQuery from "@/app/hooks/useGetNameQuery";
import { useEffect, useState } from "react";
import getHouse from "../../lib/getHouse";
import getHouses from "../../lib/getHouses";
import Spinner from "./Spinner";
import HouseCard from "./HouseCard";

interface House {
    id: number;
    name: string;
    animal: string;
    founder: string;
    houseColours: string;
}

export default function HousesComponent () {
    const [ houses, setHouses ] = useState( [] );
    const [ isLoading, setLoading ] = useState( true );
    const name = useGetNameQuery();


    useEffect( () => {
        if ( name ) {
            getHouse( name )
                .then( ( data ) => {
                    setHouses( data );
                    setLoading( false );
                } );
        } else {
            getHouses()
                .then( ( data ) => {
                    setHouses( data );
                    setLoading( false );
                } );
        }

    }, [ name ] );

    if ( isLoading ) return <Spinner />;

    return (
        <>
            {
                houses.map( ( house: House ) => (
                    <HouseCard key={ house.id } house={ [ house ] } />
                ) )
            }
        </>
    );
}