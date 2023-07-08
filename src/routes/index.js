import Login from '../pages/auth/login';
import Dashboard from '../pages/dashboard/Dashboard';
import DashboardProgress from '../pages/dashboard/progress';
import CloseRecruitment from '../pages/dashboard/closeRecruitment';
import FormPendaftaran from '../pages/progress/FormPendaftaran';
import Pengaduan from '../pages/pengaduan/pengaduan';
import Quiz from '../pages/quiz/quiz';
import QuizProgress from '../pages/quiz/quiz-progress';
import Pendaftaran from '../pages/progress/Pendaftaran';

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
    path: "/pendaftaran/progress",
    element: <Pendaftaran />,
  },
  {
    path: "/pendaftaran/",
    element: <FormPendaftaran />,
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
