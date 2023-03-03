import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate()
  return (
    <div>
      <div>Home</div>

      {/* <Link to={"/example"}>To Example</Link> */}
      <div
        onClick={() => {
          navigate("/example");
        }}
      >
        To Example with navigate
      </div>
    </div>
  );
}

export default Home