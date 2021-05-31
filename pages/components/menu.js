import { useState } from 'react';
import classnames from 'classnames';

export default function Menu() {
  const [active, setActive] = useState(false);

  const menuItems = [
    {
      name: 'Lucky Ramen',
      price: 125,
    },
    {
      name: 'Seaman Special',
      price: 200,
    },
    {
      name: "Hunter's Harvest",
      price: 200,
    },
    {
      name: 'Fortune Tea',
      price: 100,
    },
  ];

  return (
    <div className={classnames(['menu', active && 'active'])} onClick={() => setActive(!active)}>
      <h2 className="menu__title">Menu</h2>
      <div className="menu__copy">
        <p>For clucks sake check out our menu below!</p>
        <p>
          <sub>Specials and promotional prices available in store only.</sub>
        </p>
      </div>
      <div className="menu__items">
        {menuItems.map(({ name, price }) => (
          <div className="menu-item" key={name}>
            <div className="menu-item__name">{name}</div>
            <div className="menu-item__price">${price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
