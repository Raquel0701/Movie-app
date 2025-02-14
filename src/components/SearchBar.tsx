// components/SearchBar.tsx
import { Dispatch, SetStateAction } from 'react';

interface SearchBarProps {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, setQuery }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Convertir a minúsculas para evitar distinción de mayúsculas/minúsculas
    setQuery(e.target.value.toLowerCase());
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        className="p-2 border rounded-md w-full"
        placeholder="Buscar películas..."
        value={query}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
