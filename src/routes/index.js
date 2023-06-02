import Login from '../pages/auth/login';
import Dashboard from '../pages/dashboard/Dashboard';
import DashboardProgress from '../pages/dashboard/progress';
import CloseRecruitment from '../pages/dashboard/closeRecruitment';
import Tahap1 from '../pages/progress/tahap1';
import Tahap2 from '../pages/progress/tahap2';
import Tahap3 from '../pages/progress/tahap3';
import Pendaftaran from '../pages/progress/Pendaftaran';
import Pengaduan from '../pages/pengaduan/pengaduan';
import Quiz from '../pages/quiz/quiz';
import QuizProgress from '../pages/quiz/quiz-progress';

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
  {
    path: "/progress/tahap1",
    element: <Tahap1 />,
  },
  {
    path: "/progress/tahap2",
    element: <Tahap2 />,
  },
  {
    path: "/progress/tahap3",
    element: <Tahap3 />,
  },
  {
    path: "/progress/",
    element: <Pendaftaran />,
  },
  {
    path: "/pengaduan",
    element: <Pengaduan />,
  },
  {
    path: "/quiz",
    element: <Quiz />,
  },
  {
    path: "/quiz/progress",
    element: <QuizProgress />,
  },
]
export default Routes;
