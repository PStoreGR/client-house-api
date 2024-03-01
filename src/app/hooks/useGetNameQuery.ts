import { useSearchParams } from 'next/navigation';

export default function useGetNameQuery () {
    const serachParams = useSearchParams();
    const name = serachParams.get( 'name' ) || '';

    return name;
}
