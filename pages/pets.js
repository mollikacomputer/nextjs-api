import React from 'react';

const petsImages = () => {
    return (
        <div>
            {
                [1,2,3,4,5,6,7,8,9].map(path => {
                    return(
                        <div key={path}>
                            <img src={`/${path}.jpg`} alt='pet' width={280} height={420} />
                        </div>
                    )
                })
            }
        </div>
    );
};

export default petsImages;