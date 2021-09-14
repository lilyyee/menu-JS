const menu = [
  {
    id: 1,
    title: 'buttermilk pancakes',
    category: 'breakfast',
    price: 15.99,
    img: './images/item-1.jpeg',
    desc: `Large stack of buttermilk pancakes with fruit and caramel topping. Start your day with something sweet. `,
  },
  {
    id: 2,
    title: 'diner classic',
    category: 'lunch',
    price: 15.99,
    img: './images/item-2.jpeg',
    desc: `Quarter pound burger with bacon served with steak fries. `,
  },
  {
    id: 3,
    title: 'godzilla milkshake',
    category: 'shakes',
    price: 9.99,
    img: './images/item-3.jpeg',
    desc: `Vanilla milkshake topped with a cookie, sprinkled donut, and whipped cream.`,
  },
  {
    id: 4,
    title: 'light delight',
    category: 'breakfast',
    price: 9.99,
    img: './images/item-4.jpeg',
    desc: `Light appetite? 2 eggs over toast with cheesy beans. Served with coffee. `,
  },
  {
    id: 5,
    title: 'egg attack',
    category: 'lunch',
    price: 16.99,
    img: './images/item-5.jpeg',
    desc: `Large third-pound cheeseburger with egg. Who doesn't like egg on their burger? `,
  },
  {
    id: 6,
    title: 'oreo dream',
    category: 'shakes',
    price: 8.99,
    img: './images/item-6.jpeg',
    desc: `Cookies and cream shake topped with crushed oreos.`,
  },
  {
    id: 7,
    title: 'bacon overflow',
    category: 'breakfast',
    price: 9.99,
    img: './images/item-7.jpeg',
    desc: `Bacon, lettuce, tomato on biscuit sandwich with cheese.`,
  },
  {
    id: 8,
    title: 'american classic',
    category: 'lunch',
    price: 12.99,
    img: './images/item-8.jpeg',
    desc: `Classic cheeseburger with shoestring french fries.`,
  },
  {
    id: 9,
    title: 'steak dinner',
    category: 'dinner',
    price: 25.99,
    img: './images/item-10.jpeg',
    desc: `Sirloin steak grilled to your liking. Served with gravy, asparagus, and tomato.`,
  },
  {
    id: 10,
    title: 'quarantine buddy',
    category: 'shakes',
    price: 16.99,
    img: './images/item-9.jpeg',
    desc: `A popular favorite! Share a milkshake with a special someone.`,
  },
];

const sectionCenter = document.querySelector('.section-center');
const container = document.querySelector('.btn-container');

// load items
window.addEventListener('DOMContentLoaded', function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

// show menu items
function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu-item">
          <img src= ${item.img} alt= ${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join('');
  sectionCenter.innerHTML = displayMenu;
}

// show menu buttons
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ['all']
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`;
    })
    .join('');
  container.innerHTML = categoryBtns;
  const filterBtns = container.querySelectorAll('.filter-btn');
  // filter items
  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === 'all') {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}
