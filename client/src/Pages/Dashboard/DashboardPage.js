import React, { useState, useEffect } from 'react'

import SearchBar from '../../Components/SearchBar';
import PharmacyTable from '../../Components/PharmacyTable';
  
export default function CollapsibleTable() {
    const [pharmacies, setPharmacies] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch("/pharmacies")
        .then(r => r.json())
        .then(res => setPharmacies(res))
    }, [])

    const filteredPharmacies = pharmacies.filter(p => 
        p.name.toLocaleLowerCase().startsWith(search.toLocaleLowerCase()) || p.zip_code.startsWith(search))

    return (
        <>
            <SearchBar setSearch={setSearch} search={search}/>
            <PharmacyTable filteredPharmacies={filteredPharmacies}/>
        </>
    );
}
