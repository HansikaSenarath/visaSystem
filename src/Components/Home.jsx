import React from 'react';
import '../Components/home.css';
import { Link } from 'react-router-dom';

function Home() {
  const categories = [
    // Add 20 categories with unique details
    // Example details for each category
    {
      id: 1,
      imagePath: 'images/1.jpg',
      country: 'United Arab Emirates LKR 27,702' ,
      date: 'Get on Mar 11, 18:02',
    },
    {
      id: 2,
      imagePath: 'images/2.jpg',
      country: 'Vietnam  LKR 27,702',
      date: 'Get on Mar 11, 18:02',
    },
    {
      id: 3,
      imagePath: 'images/3.jpg',
      country: 'Indonesia  LKR 27,702',
      date: 'Get on Mar 11, 18:02',
    },
    {
      id: 4,
      imagePath: 'images/4.jpg',
      country: 'Azerbaijan LKR 27,702',
      date: 'Get on Mar 11, 18:02',
    },
    {
      id: 5,
      imagePath: 'images/5.jpg',
      country: 'Australia LKR 27,702',
      date: 'Get on Mar 11, 18:02',
    },
    {
      id: 6,
      imagePath: 'images/6.jpg',
      country: 'Oman LKR 27,702',
      date: 'Get on Mar 11, 18:02',
    },
    {
      id: 7,
      imagePath: 'images/7.jpg',
      country: 'Malaysia LKR 27,702',
      date: 'Get on Mar 11, 18:02',
    },
    {
      id: 8,
      imagePath: 'images/8.jpg',
      country: 'Türkiye LKR 27,702',
      date: 'Get on Mar 11, 18:02',
    },
    {
      id: 9,
      imagePath: 'images/9.jpg',
      country: 'Morocco LKR 27,702',
      date: 'Get on Mar 11, 18:02',
    },
    {
      id: 10,
      imagePath: 'images/10.jpg',
      country: 'Bahrain LKR 27,702',
      date: 'Get on Mar 11, 18:02',
    },
    {
      id: 11,
      imagePath: 'images/11.jpg',
      country: 'Cambodia LKR 27,702',
      date: 'Get on Mar 11, 18:02',
    },
    {
      id: 12,
      imagePath: 'images/12.jpg',
      country: 'India LKR 27,702',
      date: 'Get on Mar 11, 18:02',
    },
    {
      id: 12,
      imagePath: 'images/13.jpg',
      country: 'Jordan LKR 27,702',
      date: 'Get on Mar 11, 18:02',
    },
    {
      id: 12,
      imagePath: 'images/14.jpg',
      country: 'Kenya LKR 27,702',
      date: 'Get on Mar 11, 18:02',
    },
    {
      id: 12,
      imagePath: 'images/15.jpg',
      country: 'Saudi Arabia  LKR 27,702',
      date: 'Get on Mar 11, 18:02',
    },
    {
      id: 12,
      imagePath: 'images/16.jpg',
      country: 'Sudan LKR 27,702',
      date: 'Get on Mar 11, 18:02',
    },
    {
      id: 12,
      imagePath: 'images/17.jpg',
      country: 'Thailand LKR 27,702',
      date: 'Get on Mar 11, 18:02',
    },
    {
      id: 12,
      imagePath: 'images/18.jpg',
      country: 'Tanzania LKR 27,702',
      date: 'Get on Mar 11, 18:02',
    },
    {
      id: 12,
      imagePath: 'images/19.jpg',
      country: 'Uzbekistan LKR 27,702',
      date: 'Get on Mar 11, 18:02',
    },
    {
      id: 12,
      imagePath: 'images/20.jpg',
      country: 'Albania LKR 27,702',
      date: 'Get on Mar 11, 18:02',
    },
 
    // ... (repeat for 19 more categories)
  ];

  // Split the categories into arrays of 4
  const rows = categories.reduce((acc, category, index) => {
    const rowIndex = Math.floor(index / 4);
    if (!acc[rowIndex]) {
      acc[rowIndex] = [];
    }
    acc[rowIndex].push(category);
    return acc;
  }, []);

  
    return (
      <div className="home-container">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="category-row">
            {row.map((category) => (
              <Link to="/application" key={category.id} className="category-link">
                <div className="category">
                  <img src={category.imagePath} alt={`Category ${category.id}`} className="category-image" />
                  <p className="category-country">{category.country}</p>
                  <p className="category-price">{category.price}</p>
                  <p className="category-date">{category.date}</p>
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>
    );
  }
  
  export default Home;