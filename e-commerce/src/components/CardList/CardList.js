import React from 'react';
import Card from '../Card/Card';
import useAPI from '../useAPI/useAPI';

function CardList() {
    const { data } = useAPI();
    console.log(`this the data from card list: ${data}`);
    console.dir(data);
    return (
        <div>
            {data?.map(function (item) {
                console.log(item);
                return <Card item={item} />;
            })}
        </div>
    );
}

export default CardList;
