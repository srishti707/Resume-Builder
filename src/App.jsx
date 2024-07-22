import { createBrowserRouter,RouterProvider } from "react-router-dom";
import RootNavigation from './Pages/Layouts/RootNavigation';
import Login from './Pages/Login';
import Homepage from './Pages/Homepage';
import Templates from './Pages/Templates';
import BuildPage from './Pages/BuildPage';
import UserResume from './Pages/UserResume';
import RenderForms from "./components/RenderForms";
const Router=createBrowserRouter(
  [
    {
      path:'/',
      element:<RootNavigation/>,
        children:[
          {
            path:'/',
            element:<Homepage/>
        },
        {
          path:'Login',
          element:<Login/>
        },
        {
          path:'Templates',
          element:<Templates/>
        },
        {
          path:'UserResume',
          element:<UserResume/>
        },
        {
          path:'templates/:templateid/:resumeid/:name/build/:details',
          element:<BuildPage/>,
          children:[
            {
              path:"",
              element:<RenderForms/>,
            }
          ]
        }
      

        ]
    }
  ]
)
export default function App(){
  return (
    <RouterProvider router={Router} />
     
 
  )
}
