import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Layout from "./layouts/Layout";
import Communities from "./pages/Communities";
import ResetPassword from "./pages/resetPassword";
import PasswordSuccess from "./pages/PasswordSuccess";
import DashboardLayout from "./layouts/DashboardLayout";
import Home from "./pages/dashboardPages/Home";
import Community from "./pages/dashboardPages/Community";
import Goalsetting from "./pages/dashboardPages/Goalsetting";
import Logout from "./pages/dashboardPages/Logout";
import Notification from "./pages/dashboardPages/Notification";
import Profile from "./pages/dashboardPages/Profile";
import Resources from "./pages/dashboardPages/Resources";
import Settings from "./pages/dashboardPages/Settings";
import Subsandbilling from "./pages/dashboardPages/Subsandbilling";
import ProfileInfo from "./components/ProfileInfo";
import EditPassword from "./components/EditPassword";
import Subscription from "./components/Subscription";
import AddCard from "./components/AddCard";
import GoalTrackingSect from "./components/GoalTrackingSect";
import GoalSettingSect from "./components/GoalSettingSect";
import CommunitiesOverview from "./pages/dashboardPages/CommunitiesOverview";
import CommunitiesJoined from "./pages/dashboardPages/CommunitiesJoined";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Signup />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "forgotpassword",
          element: <ForgotPassword />,
        },
        {
          path: "resetpassword",
          element: <ResetPassword />,
        },
        {
          path: "passwordSuccess",
          element: <PasswordSuccess />,
        },
        {
          path: "communities",
          element: <Communities />,
        },
      ],
    },
    {
      path: "dashboard",
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "community",
          element: <Community />,
          children: [
            {
              path: "communitiesoverview",
              element: <CommunitiesOverview />,
            },
            {
              path: "communitiesjoined",
              element: <CommunitiesJoined />,
            },
          ],
        },
        {
          path: "profile",
          element: <Profile />,
          children: [
            {
              index: true,
              element: <ProfileInfo />,
            },
            {
              path: "changepassword",
              element: <EditPassword />,
            },
          ],
        },
        {
          path: "subscription",
          element: <Subsandbilling />,
          children: [
            { path: "subscriptionsect", element: <Subscription /> },
            { path: "addcard", element: <AddCard /> },
          ],
        },
        {
          path: "goalsetting",
          element: <Goalsetting />,
          children: [
            {
              path: "goalsettingsect",
              element: <GoalSettingSect />,
            },
            {
              path: "goaltrackingsect",
              element: <GoalTrackingSect />,
            },
          ],
        },
        {
          path: "notification",
          element: <Notification />,
        },
        {
          path: "resources",
          element: <Resources />,
        },
        {
          path: "settings",
          element: <Settings />,
        },
        {
          path: "logout",
          element: <Logout />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
