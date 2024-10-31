document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    const ornamentContainer = document.querySelectorAll('.ornament-container');
    const blogPostsContainer = document.querySelector('.blog-posts');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
  
    // Sample data for ornaments
    const menOrnaments = [
      { name: 'King Wave Ring', price: 299, image: 'ring_1.PNG' },
      { name: 'Diamond Rectangular Ring', price: 299, image: 'ring_2.PNG' },
      { name: 'Emerald Ring', price: 299, image: 'ring_3.PNG' },
      { name: 'Yellow White Gold Ring', price: 299, image: 'ring_4.PNG' },

      // Add more ornaments as needed
    ];
  
    const womenOrnaments = [
      { name: 'Opal Drift Necklace', price: 799, image: 'necklace_1.PNG' },
      { name: 'Storage Necklace', price: 399, image: 'necklace_2.PNG' },
      { name: 'Bala Necklace', price: 399, image: 'necklace_3.PNG' },
      { name: 'L HippoCampe Necklace', price: 399, image: 'necklace_4.PNG' },
      // Add more ornaments as needed
    ];
  
    // Sample blog post data (replace with your actual data)
    const blogPosts = [
      {
        title: 'The Art of Jewelry Design',
        content: 'Discover timeless beauty with our exquisite jewelry collection. From dainty necklaces to sparkling earrings, adorn yourself in style.',
        date: 'April 20, 2024',
        author: 'Jane Doe'
      },
      {
        title: 'Gemstone Trends for 2024',
        content: 'Embrace sophistication with our classic jewelry designs. From refined pearls to sleek gold accents, enhance your elegance effortlessly',
        date: 'April 15, 2024',
        author: 'John Smith'
      },
      {
        title: 'Statement Sparkle',
        content: 'Make a bold statement with our eye-catching rings and shimmering pendants. Add a touch of glamour to any outfit',
        date: 'July 15, 2024',
        author: 'John Smith'
      },
      {
        title: 'Luxurious Layers:',
        content: 'Elevate your look with layers of gleaming bracelets and delicate chains. Mix, match, and shine with our stunning jewelry pieces',
        date: 'May 19, 2024',
        author: 'John Smith'
      },

      // Add more blog post objects here
    ];
  
    let currentIndex = 0;
    const postsPerPage = 2; // Number of blog posts to display initially
  
    // Function to render blog post cards
    function renderBlogPosts() {
      const endIndex = currentIndex + postsPerPage;
      const postsToRender = blogPosts.slice(currentIndex, endIndex);
  
      postsToRender.forEach(post => {
        const blogPostCard = document.createElement('div');
        blogPostCard.classList.add('blog-post');
        blogPostCard.innerHTML = `
          <h3>${post.title}</h3>
          <p>${post.content}</p>
          <div class="meta">
            <span>Published on ${post.date}</span> | <span>By ${post.author}</span>
          </div>
        `;
        blogPostsContainer.appendChild(blogPostCard);
      });
  
      currentIndex = endIndex;
  
      // Hide the load more button if all posts have been rendered
      if (currentIndex >= blogPosts.length) {
        loadMoreBtn.style.display = 'none';
      }
    }
  
    // Initial render of blog posts
    renderBlogPosts();
  
    // Load more blog posts on button click
    loadMoreBtn.addEventListener('click', renderBlogPosts);
  
    // Function to display ornaments
    function displayOrnaments(ornamentData, container) {
      container.innerHTML = '';
  
      ornamentData.forEach(ornament => {
        const ornamentItem = document.createElement('div');
        ornamentItem.classList.add('ornament-item');
  
        const image = document.createElement('img');
        image.src = ornament.image;
        image.alt = ornament.name;
  
        const name = document.createElement('h3');
        name.textContent = ornament.name;
  
        const price = document.createElement('p');
        price.textContent = `Price: $${ornament.price}`;
  
        ornamentItem.appendChild(image);
        ornamentItem.appendChild(name);
        ornamentItem.appendChild(price);
  
        container.appendChild(ornamentItem);
      });
    }
  
    // Display ornaments in respective containers
    displayOrnaments(menOrnaments, ornamentContainer[0]);
    displayOrnaments(womenOrnaments, ornamentContainer[1]);
  
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
      });
    });
  
    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // Perform form submission logic here
      console.log('Form submitted');
      // Reset form fields
      this.reset();
    });
  });