function About() {
    return <div 
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f8f9fa',
        padding: '20px',
      }}
    >
      <h1 className="text-xl font-bold">About Page</h1>
      <div>
        This is a simple React application that demonstrates the following features:
        <ul>
          <li>Pages: Home, About, and Item Details</li>
          <li>Data fetched from FakeStore API on the Home page</li>
          <li>React Router for navigation</li>
          <li>Home page fetching products from the FakeStore API</li>
          <li>Item Detail page showing individual product details</li>
        </ul>
        <p>Feel free to explore the code and make modifications!</p>
        <p>Created by [Khurshidjon]</p>


        </div>
      </div>;
  }

  export default About;