import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Layout from "./components/Layout.jsx";
import UserAccount from "./pages/admin/UserAccount.jsx";
import RolesPermissions from "./pages/admin/RolesPermissions.jsx";
import Location from "./pages/admin/Location.jsx";
import SubLocation from "./pages/admin/SubLocation.jsx";
import Department from "./pages/admin/Department.jsx";
import SubDepartment from "./pages/admin/SubDepartment.jsx";
import AssetCategories from "./pages/admin/AssetCategories.jsx";
import SubCategories from "./pages/admin/SubCategories.jsx";
import AssetTypes from "./pages/admin/AssetTypes.jsx";
import Vendor from "./pages/admin/Vendor.jsx";
import SupportGroup from "./pages/admin/SupportGroup.jsx";

const App = () => {
  return (
    <>
      <div>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Dashboard />} />

              <Route path="/admin/user-account" element={<UserAccount />} />
              <Route path="/admin/roles" element={<RolesPermissions />} />
              <Route path="/admin/location" element={<Location />} />
              <Route path="/admin/sub-location" element={<SubLocation />} />
              <Route path="/admin/department" element={<Department />} />
              <Route path="/admin/sub-department" element={<SubDepartment />} />
              <Route
                path="/admin/asset-categories"
                element={<AssetCategories />}
              />
              <Route path="/admin/sub-categories" element={<SubCategories />} />
              <Route path="/admin/asset-types" element={<AssetTypes />} />
              <Route path="/admin/vendor" element={<Vendor />} />
              <Route path="/admin/support-group" element={<SupportGroup />} />
            </Routes>
          </Layout>
        </Router>
      </div>
    </>
  );
};

export default App;
