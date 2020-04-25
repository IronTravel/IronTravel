import React from 'react';
import LoadingAnim from '../../assets/svgs/loading.svg'

export const Loading = () => {
    return (
        <div className="loading">
            <div className="loading__spinner">
                <LoadingAnim />
            </div>
        </div>
    )
};