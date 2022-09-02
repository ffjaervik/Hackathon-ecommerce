import React from 'react';
import Card from '../Card/Card';
import useAPI from '../useAPI/useAPI';

function CardList() {
    const { data } = useAPI();
    // console.log(`this the data from card list: ${data}`);

    return (
        <div className='w-full gap-x-4 gap-y-2 grid grid-cols-2 md:grid-cols-3'>
            {data?.map(function (item) {
                return <Card item={item} />;
            })}
        </div>
    );
}

export default CardList;
