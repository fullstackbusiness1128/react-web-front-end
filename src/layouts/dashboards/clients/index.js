import DashboardLayout from "opeta/LayoutContainers/DashboardLayout";
import DashboardNavbar from "opeta/Navbars/DashboardNavbar";
import SoftBox from "components/SoftBox";

function Clients() {
    return(
        <DashboardLayout>
            <DashboardNavbar/>
            <SoftBox py={3}>
                <h1>Clients Component</h1>
            </SoftBox>
        </DashboardLayout>
    )
}

export default Clients