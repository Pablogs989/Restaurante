const Menu = (props) => {

    const dishes = [
        {
          id:1,
          name:'plato 1',
          description:'Este es el plato 1',
          price:10
        },
        {
          id:2,
          name:'plato 2',
          description:'Este es el plato 2',
          price:20
        },
        {
          id:3,
          name:'plato 3',
          description:'Este es el plato 3',
          price:15
        }
      ];

    return (
        <div>
            {dishes.map((element) => {
                return (
                    <div key={element.id}>
                        <h3>Name: {element.name}</h3>
                        <p>Description: {element.description}</p>
                        <p>Price: {element.price}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Menu;