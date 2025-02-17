import React from 'react';

const SearchList = () => {
  return (
    <div className="p-4 space-y-4">
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Search</h2>
        <div className="space-y-1">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox" />
            <span>Token</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox" />
            <span>Token</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default SearchList;