import React, { useState } from 'react';
import { RiSearchLine } from "react-icons/ri";
import { carData } from './data';
import Link from 'next/link';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);
    const [showSearch, setShowSearch] = useState(false);

    function searchItem(e) {
        const value = e.target.value.toLowerCase();
        setQuery(value);
        if (value === '') {
            setFilteredItems([]);
            return;
        }

        const filtered = carData.filter(item =>
            (item.model.toLowerCase().includes(value) ||
            item.make.toLowerCase().includes(value))
        );

        setFilteredItems(filtered);
    }

    function handleItemClick() {
        setQuery('');
        setFilteredItems([]);
        setShowSearch(false); // Hide the search bar on item click
    }

    return (
        <div className='relative'>
            {/* Search Icon for mobile */}
            {!showSearch && (
                <button 
                    type='button' 
                    className='block sm:hidden p-2 text-white bg-black rounded-lg'
                    onClick={() => setShowSearch(true)}
                >
                    <RiSearchLine />
                </button>
            )}
            {/* Search Bar for larger screens and toggled for mobile */}
            <form className={`relative ${showSearch ? 'block' : 'hidden'} sm:block`} onSubmit={(e) => e.preventDefault()}>
                <input 
                    type='text' 
                    className='px-4 py-1 border rounded-lg sm:text-sm text-black w-32 sm:w-64 md:w-96 bg-white outline-none'
                    placeholder='Search...'
                    value={query}
                    onChange={searchItem}
                />
                <button type='submit' className='absolute right-0 top-0 h-full px-4 text-white bg-black rounded-r-lg'>
                    <RiSearchLine />
                </button>
            </form>
            {filteredItems.length > 0 && (
                <div className='bg-black text-white rounded-sm absolute w-full mt-1 z-10'>
                    {filteredItems.map(item => (
                        <Link key={item.image} href={`/product/${item.image}`} onClick={handleItemClick}>
                            <div className='block hover:bg-slate-600 py-2 px-4 duration-300'>
                                {item.make} - {item.model}
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SearchBar;
