import React from "react";

interface HouseProps {
    id: number;
    name: string;
    animal: string;
    founder: string;
    houseColours: string;
}

interface House {
    house: HouseProps[];
}

export default function HouseCard ( { house }: House ) {
    let contnet: React.ReactNode;
    let colorFrom: string;
    let colorTo: string;

    const validateColor = ( color: string ) => {
        const style = new Option().style;
        style.color = color;
        return style.color == color;
    };

    const setColors = ( colors: string[] ) => {
        if ( ( colors && colors.length === 2 ) && ( validateColor( colors[ 0 ] ) && validateColor( colors[ 1 ] ) ) ) {
            colorFrom = colors[ 0 ];
            colorTo = colors[ 1 ];
        } else {
            colorFrom = `white`;
            colorTo = `black`;
        }
    };

    const selectGradient = ( attrs: HouseProps ) => {
        const colors = attrs?.houseColours
            ?.toLowerCase()
            .split( " " )
            .filter( ( word: string ) => word !== "and" )
            .map( ( color: string ) => color.replace( /[^a-zA-Z]/g, "" ) );

        setColors( colors );

        contnet = (
            <div
                className='w-[20rem] flex flex-col bg-white shadow-md p-3 border rounded-lg mb-4'
                key={ attrs.id }
            >
                <div className="flex flex-row justify-between items-center">
                    <div className=' font-extrabold text-[18px]'>{ attrs.name }</div>
                    <div className='font-normal text-[12px]'>{ attrs.animal }</div>
                </div>
                <div
                    className='h-3 rounded w-auto mt-2 mb-3 p-2'
                    style={ { background: `linear-gradient(to right, ${ colorFrom } 0%,${ colorTo } 100%)` } }
                >
                </div>
                <div className="flex flex-row items-center text-xs mb-1">
                    Founder: <span className="font-bold text-xs ml-2">{ attrs.founder }</span>
                </div>
            </div>
        );

        return contnet;
    };

    return (
        <>
            {
                house.map( ( attrs: HouseProps ) => (
                    selectGradient( attrs )
                ) )
            }
        </>
    );
}
