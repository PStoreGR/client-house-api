"use client";
import HousesComponent from '@/components/HousesComponent';
import Spinner from '@/components/Spinner';
import React, { Suspense } from 'react';

export default function Houses () {
    return (
        <Suspense fallback={ <Spinner /> }>
            <HousesComponent />
        </Suspense>
    );
}
