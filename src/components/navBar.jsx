import React from 'react';

const NavBar = ({ totalCounters }) => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand mb-0 h1">
                    Active Counters
                    <span className="badge badge-pill badge-secondary">
                        {totalCounters}
                    </span>
                </span>
            </nav>
        </div>
    );
};

export default NavBar;
