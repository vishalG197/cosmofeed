import React, { useState, useEffect } from 'react';

const countries = [
  'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina',
  'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados',
  'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana',
  'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia', 'Cameroon',
  // ... (add more countries)
];

const Search = () => {
  const [filter, setFilter] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);

  // Debouncing logic
  useEffect(() => {
    const timerId = setTimeout(() => {
      const filtered = countries.filter(country =>
        country.toLowerCase().includes(filter.toLowerCase())
      );
      setFilteredCountries(filtered);
    }, 300);

    return () => clearTimeout(timerId);
  }, [filter]);

  // Throttling logic
  const throttleFilter = (fn, delay) => {
    let lastCall = 0;
    return function (...args) {
      const now = new Date().getTime();
      if (now - lastCall >= delay) {
        fn(...args);
        lastCall = now;
      }
    };
  };

  const throttledFilter = throttleFilter((value) => {
    const filtered = countries.filter(country =>
      country.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCountries(filtered);
  }, 300);

  const handleInputChange = (e) => {
    setFilter(e.target.value);
    throttledFilter(e.target.value);
  };

  return (
    <div>
      <h2>Search Component</h2>
      <input
        type="text"
        placeholder="Type to search countries..."
        value={filter}
        onChange={handleInputChange}
      />
      <ul>
        {filteredCountries.map((country, index) => (
          <li key={index}>{country}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
