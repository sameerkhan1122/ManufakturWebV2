const SearchDropdownUI = () => {
    if (!showSearchDropdown || searchQuery.trim().length === 0) return null;
    return (
      <div className="absolute top-[calc(100%+8px)] left-0 right-0 w-full bg-slate-900 border border-slate-700 rounded-sm shadow-xl overflow-hidden z-[100] max-h-[60vh] overflow-y-auto">
        {dropdownSearchResults.length === 0 ? (
          <div className="p-4 text-center text-sm text-slate-400">{strings.noProductsDropdown}</div>
        ) : (
          <div>
            {dropdownSearchResults.slice(0, 8).map((product) => (
              <div 
                key={product.id}
                onMouseDown={(e) => {
                  e.preventDefault(); // Verhindert das Wegklicken durch Blur-Events
                  setShowSearchDropdown(false);
                  setMobileSearchOpen(false);
                  handleGroupClick(product.category, product.id);
                }}
                className="px-5 py-3 hover:bg-slate-800 cursor-pointer flex justify-between items-center border-b border-slate-800/50 last:border-0 transition-colors"
              >
                <div className="pr-4">
                  <p className="text-sm font-semibold text-slate-200 truncate">{product.name}</p>
                  <p className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest mt-0.5">{product.category}</p>
                </div>
                <span className="text-sm font-black text-white shrink-0">${product.price}</span>
              </div>
            ))}
            {dropdownSearchResults.length > 8 && (
              <div 
                onMouseDown={(e) => {
                  e.preventDefault();
                  setShowSearchDropdown(false);
                  setMobileSearchOpen(false);
                  navigateTo('searchResults', null, '');
                }}
                className="p-3 bg-slate-950 border-t border-slate-800 text-center text-xs font-bold text-cyan-400 hover:text-cyan-300 cursor-pointer uppercase tracking-widest"
              >
                {strings.viewAllResults} &rarr;
              </div>
            )}
          </div>
        )}
      </div>
    );
  };
