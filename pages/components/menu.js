import { Fragment, useState } from 'react';
import classnames from 'classnames';

export default function Menu() {
  const [active, setActive] = useState(false);

  const menuItems = [
    {
      name: '🏔️ Mountain Meal 🏔️',
      desc: 'Harvest + Ramen',
      price: 225,
    },
    {
      name: "🎣 Fisherman's Feast 🎣",
      desc: 'Seaman + Ramen + Tea',
      price: 325,
    },
    { divider: true },
    {
      name: '🍜 Lucky Ramen 🍜',
      price: 100,
    },
    {
      name: "🏹 Hunter's Harvest 🏹",
      price: 150,
    },
    {
      name: '🍣 Seaman Special 🍣',
      price: 150,
    },
    { divider: true },
    {
      name: '🍵 Fortune Tea 🍵',
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
        {menuItems.map(({ divider, name, price, desc }, i) => (
          <Fragment key={i}>
            {!divider && (
              <div className="menu-item">
                <div className="menu-item__name">
                  <span>{name}</span>
                  {desc && <div className="menu-item__desc">{desc}</div>}
                </div>
                <div className="menu-item__price">${price}</div>
              </div>
            )}
            {divider && <hr />}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
