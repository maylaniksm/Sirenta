import Login from '../pages/auth/login';
import Dashboard from '../pages/dashboard/dashboard';
import DashboardProgress from '../pages/dashboard/progress';
import CloseRecruitment from '../pages/dashboard/closeRecruitment';

const Routes = [
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
        path: "/dashboard/progress",
        element: <DashboardProgress />,
    },
    {
        path: "/dashboard/closeRecruitment",
        element: <CloseRecruitment />,
      },
  ]
export default Routes;
