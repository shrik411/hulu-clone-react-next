import { ThumbUpIcon } from '@heroicons/react/outline';
import Image from 'next/image';

function Thumbnail({result}) {
    const BASE_URL = "https://image.tmdb.org/t/p/original/";
    return (
        <div className='group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50'>
            <Image 
                layout='responsive'
                src= {`https://image.tmdb.org/3G1Q5xF40HkUBJXxt2DQgQzKTp5.jpg&w=3840&q=75`}
                height={1080}
                width={1920}
            />

            <div>
                <p className='truncate max-w-md'>{result.overview}</p>
                <h2 className='mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:forn-bold'>
                    {result.title || result.orgiginal_name}
                </h2>
                <p className='flex item-center opacity-0 group-hover:opacity-100'>
                    {result.media_type && `${result.media_type} .`} {" "}
                    {result.release_date || `${result.first_air_date}`} .{" "}
                    <ThumbUpIcon className='h-5 mx-2' /> {result.vote_count}
                </p>
            </div>
        </div>
    )
}

export default Thumbnail

///https://image.tmdb.org/t/p/original/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F%2F3G1Q5xF40HkUBJXxt2DQgQzKTp5.jpg&w=3840&q=75