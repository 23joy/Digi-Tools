import React from 'react';

const Stats = () => {
    return (
        <div className="bg-linear-to-r from-blue-800 to-fuchsia-800 flex text-white p-5 ">
            <div className="stat place-items-center">
                <div className="stat-value">50K+</div>
                <p>Active Users</p>
            </div>

            <div className="stat place-items-center">
                <div className="stat-value">200K+</div>
                <p>Premium tools</p>
            </div>

            <div className="stat place-items-center">
                <div className="stat-value">4.9</div>
                <p>Rating</p>
            </div>
        </div>
    );
};

export default Stats;