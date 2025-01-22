'use client'
import { SanityClient } from '@/sanity/sanity.client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
interface SearchResult {
    _id: string;
    name: string;
    description?: string;
    slug: {
      current: string;
    };
  }
  
  

  // lib/queries.ts
  export const searchQuery = `
    *[_type == "product"] {_id,name,description,slug {current}
    }
  `;
  export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState<SearchResult[]>([]);
    const [loading, setLoading] = useState(false);
    const [debouncedValue] = useDebounce(searchTerm, 500);
  
    const handleSearch = async (searchValue: string) => {
      if (!searchValue.trim()) {
        setResults([]);
        return;
      }
  
      try {
        setLoading(true);
        const searchResults = await SanityClient.fetch(searchQuery, {searchQuery: `*${searchValue}*` });
        setResults(searchResults);
      } catch (error) {
        console.error('Search error:', error);
        setResults([]);
      } finally {
        setLoading(false);
      }
    };
  
    // Effect to handle debounced search
    useEffect(() => {
      handleSearch(debouncedValue);
    }, [debouncedValue]);
  
    return (
      <div className="w-full mx-auto">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search food..."
            className="w-[100px] text-[20px] px-4 py-2 h-[40px] border rounded-xl border-gray-300 focus:outline-none f"
          />
          {loading && (
            <div className="absolute right-3 top-2">
              Loading...
            </div>
          )}
        </div>
  
        {results.length > 0 && (
          <div className="mt-4 bg-white shadow-lg rounded-lg">
            {results.map((result) => (
              <div
                key={result._id}
                className="p-4 border-b border-gray-100 last:border-0"
              >
                <h3 className="text-lg font-medium">
                  <Link href={`/product/${result.slug.current}`}>
                    <h1 className="hover:text-orange-600">{result.name}</h1>
                  </Link>
                </h3>
                {result.description && (
                  <p className="mt-1 text-gray-600">{result.description}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }