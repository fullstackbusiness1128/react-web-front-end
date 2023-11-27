import DashboardLayout from "opeta/LayoutContainers/DashboardLayout";
import DashboardNavbar from "opeta/Navbars/DashboardNavbar"
import SoftBox from "components/SoftBox";

function Operations() {
    return(
        <DashboardLayout>
            <DashboardNavbar/>
            <SoftBox py={3}>
                <h1>Operations Component</h1>
            </SoftBox>
        </DashboardLayout>
    )
}
export default Operations