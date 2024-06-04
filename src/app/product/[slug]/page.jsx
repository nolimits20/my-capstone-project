import React from 'react';
import { carData } from '@/app/component/data';
import Image from 'next/image';
import { TbArrowBackUp } from 'react-icons/tb';
import Link from 'next/link';

export default function ProductPage({ params }) {
    const carInfo = carData.find((car) => car.image === params.slug);

    if (!carInfo) {
        return <div>Car not found</div>;
    }

    // Dummy related products (you may fetch these dynamically)
    const relatedProducts = carData.filter((car) => car.image !== params.slug).slice(0, 4);

    return (
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Main Product Section */}
                <div className="lg:w-1/2 min-h-[700px]  flex items-center justify-center bg-gray-100">
                    <Image
                        src={`/${carInfo.image}.png`}
                        alt={`${carInfo.make.split(' ').join('-')}-${carInfo.model.split(' ').join('-')}-${carInfo.year}`}
                        width={800}
                        height={600}
                        className="transition-transform duration-300 ease-in-out transform hover:scale-105"
                    />
                </div>

                <div className="lg:w-1/2 flex flex-col gap-6 pt-28 px-6">
                    {/* Order Now Link */}
                    <Link href="/ordernow">
                        <div className="flex items-center gap-2">
                            <TbArrowBackUp className="text-black" />
                            <p className="text-black text-sm font-medium">ORDER NOW</p>
                        </div>
                    </Link>

                    {/* Car Information Section */}
                    <div className="lg:grid lg:grid-cols-2 gap-4 text-slate-">
                        <div>
                            <h2 className="font-semibold">Make</h2>
                            <p className='text-black'>{carInfo.make}</p>
                        </div>
                        <div>
                            <h2 className="font-semibold">Model</h2>
                            <p className='text-black'>{carInfo.model}</p>
                        </div>
                        <div>
                            <h2 className="font-semibold">Year</h2>
                            <p className='text-black'>{carInfo.year}</p>
                        </div>
                        <div>
                            <h2 className="font-semibold">Price</h2>
                            <p className='text-black'>{carInfo.price}</p>
                        </div>
                        <div>
                            <h2 className="font-semibold">Weight</h2>
                            <p className='text-black'>{carInfo.weight}</p>
                        </div>
                        <div>
                            <h2 className="font-semibold">Engine</h2>
                            <p className='text-black'>{carInfo.engine}</p>
                        </div>
                        <div>
                            <h2 className="font-semibold">Transmission</h2>
                            <p className='text-black'>{carInfo.transmission}</p>
                        </div>
                        <div>
                            <h2 className="font-semibold">Drivetrain</h2>
                            <p className='text-black'>{carInfo.drivetrain}</p>
                        </div>
                        <div>
                            <h2 className="font-semibold">Fuel Efficiency</h2>
                            <p className='text-black'>{carInfo.fuelEfficiency}</p>
                        </div>
                        <div>
                            <h2 className="font-semibold">Horsepower</h2>
                            <p className='text-black'>{carInfo.horsepower}</p>
                        </div>
                        
                    </div>
                    <div><button className='bg-black text-white w-full h-[50px] mt-36 hover:bg-slate-500'>ADD TO BAG</button></div>
                    <div className='flex justify-between text-[12px] text-black hover:text-slate-400 cursor-pointer'>
                      <Link href='/shipping-policy'>
                        <p>SHIPPING POLICY</p>
                      </Link>
                      <Link href='/refund-policy'>
                        <p>REFUND POLICY</p>
                      </Link>
                    </div>

                </div>
            </div>

            {/* Related Products Section */}
            <div className="mt-8">
                <h2 className="text-3xl font-semibold mb-4 text-center text-black">You May Also Like</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-center">
                    {relatedProducts.map((product) => (
                        <div key={product.image} className="bg-white p-4 rounded-lg shadow-md h-[350px]">
                            <Link href={`/product/${product.image}`}>
                             
                                    <Image
                                        src={`/${product.image}.png`}
                                        alt={`${product.make}-${product.model}-${product.year}`}
                                        width={400}
                                        height={400}
                                        className="rounded-lg"
                                    />
                                   { <div className='text-left text-black'>
                              <h3 className="text-lg font-semibold">{product.model}</h3>
                                    <p className="text-sm">{product.make} - {product.year}</p></div>   }
                            </Link>
                           
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
