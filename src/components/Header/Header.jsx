import React from "react";
import {Container,Logo,LogoutBtn}   from "../index";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";


function Header(){
    const authStatus= useSelector((state) => state.someReducer?.status || 'idle');

     const navigate =useNavigate();
     
     
     const naItems=[
        {
            name: 'Home',
            slug: "/",
            active: true
        }, 
        {
          name: "Login",
          slug: "/login",
          active: !authStatus,
      },
      {
          name: "Signup",
          slug: "/signup",
          active: !authStatus,
      },
      {
          name: "All Posts",
          slug: "/all-posts",
          active: authStatus,
      },
      {
          name: "Add Post",
          slug: "/add-post",
          active: authStatus,
      },

     ]
    return(
        <header className=" py-3 bg-gray-500 shadow">
            <Container>
            <nav className="flex items-center justify-between">
                <div className=" mr-4">
                    <Link to="/">
                    <Logo width='70px'/>
                    
              </Link>

                </div>
                <ul className=" flex items-center gap-6 text-white">
                    {naItems.map((item) =>
                    item.active ?(
                        <li key={item.name}>
                            <button
                        onClick={()=>navigate(item.slug)}
                        >{item.name}
                        </button>
                        </li>
                    ):null  
                    )}
                    {authStatus && (
                        <li>
                            <LogoutBtn/>
                        </li>
                    )} 
                </ul>
            </nav>  
            </Container>
        </header>
    )
}


export default Header;