useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://countriesnow.space/api/v0.1/countries"
      );
 
      const countries = await response.json();
 
      const arr = [];
 
      countries.data.map((country) => {
        country.cities.map((city) => arr.push(`${city}, ${country.country}`));
      });
      setCountries(arr);
    };
    getData();
  }, []);
 
  const onChangeSearchValue = (e) => {
    const data = countries
      .filter((country) => country.toLowerCase().startsWith(e.target.value))
      .slice(0, 4);
    setFilteredCountries(data);
 
    setFilteredCountries;
  };