import React from 'react';
// import singlePackageService from './packageContent'

function SinglePackageService({singlePackageService}) {
    return (
        
            <li className="text-center" style={{listStyle:'none'}}>
                    {singlePackageService.service}
            </li>
        
    )
}

export default SinglePackageService;