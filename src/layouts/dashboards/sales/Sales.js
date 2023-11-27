import DashboardLayout from "opeta/LayoutContainers/DashboardLayout";
import DashboardNavbar from "opeta/Navbars/DashboardNavbar";
import SoftBox from "components/SoftBox";
import Grid from "@mui/material/Grid";
import DefaultLineChart from "opeta/Charts/LineCharts/DefaultLineChart";
import VerticalBarChart from "opeta/Charts/BarCharts/VerticalBarChart";
import {useState} from "react";
import CustomPieChart from "./CustomPieChart";
import SoftBadgeDot from "components/SoftBadgeDot";
import Tooltip from "@mui/material/Tooltip";
import SoftButton from "components/SoftButton";
import Icon from "@mui/material/Icon";
import Select from "react-select";


const channelsChartData = {
    labels: ["Facebook", "Direct", "Organic", "Referral"],
    datasets: {
        label: "Projects",
        backgroundColors: ["info", "primary", "dark", "secondary", "primary"],
        data: [15, 20, 12, 60],
    },
};

function Sales() {
    const [piData, setPiData] = useState(channelsChartData);
    const [lineInfoData, setLineInfoData] = useState([50, 40, 300, 220, 500, 250, 400, 230, 500]);

    const handleChange = async (e) => {
        await setPiData(prevState => ({
            ...prevState,
            datasets: {
                ...prevState.datasets,
                data: [...prevState.datasets.data.map((item) => Math.floor(Math.random() * 100))]
            }
        }));

        setLineInfoData(lineInfoData.map(item => Math.random() * 100));
    }

    return(
        <DashboardLayout>
            <DashboardNavbar/>
            <Grid container={true} justifyContent="flex-end">
                <Grid item={true} xs={6} md={3} lg={3}>
                    <Select
                        Style={{width: '400px'}}
                        placeholder="Filter"
                        options={[
                            {  value: "today", label: "Today" },
                            {  value: "yesterday", label: "Yesterday" },
                            {  value: "last_week", label: "Last Week" },
                            {  value: "last_month", label: "Last Month" },
                        ]}
                        onChange={(e) => handleChange(e)}
                    />
                </Grid>
            </Grid>

            <SoftBox py={3}>
                <Grid container={true} spacing={2}>
                    <Grid item={true} xs={12} sm={12} md={12} lg={12}>
                        <CustomPieChart pieData={piData}/>
                    </Grid>

                    <Grid item={true} xs={12} sm={12} md={12} lg={12}>
                        <DefaultLineChart
                            title="Default Line Chart"

                            description={
                                <SoftBox display="flex" justifyContent="space-between">
                                    <SoftBox display="flex" ml={-1}>
                                        <SoftBadgeDot color="info" size="sm" badgeContent="Organic Search" />
                                        <SoftBadgeDot color="dark" size="sm" badgeContent="Referral" />
                                        <SoftBadgeDot color="primary" size="sm" badgeContent="Direct" />
                                    </SoftBox>
                                    <SoftBox mt={-5.25} mr={-1}>
                                        <Tooltip title="See which ads perform better" placement="left" arrow>
                                            <SoftButton
                                                variant="outlined"
                                                color="secondary"
                                                size="small"
                                                circular
                                                iconOnly
                                            >
                                                <Icon>priority_high</Icon>
                                            </SoftButton>
                                        </Tooltip>
                                    </SoftBox>
                                </SoftBox>
                            }

                            chart={{
                                labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                                datasets: [
                                    {
                                        label: "Organic Search",
                                        color: "info",
                                        data: lineInfoData,
                                    },
                                    {
                                        label: "Referral",
                                        color: "dark",
                                        data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
                                    },
                                    {
                                        label: "Direct",
                                        color: "primary",
                                        data: [40, 80, 70, 90, 30, 90, 140, 130, 200],
                                    },
                                ],
                            }}
                        />
                    </Grid>

                    <Grid item={true} sm={12} md={12} lg={12} xs={12}>
                        <VerticalBarChart
                            title="Vertical Bar Chart"
                            chart={{
                                labels: ["16-20", "21-25", "26-30", "31-36", "36-42", "42+"],
                                datasets: [{
                                    label: "Sales by age",
                                    color: "dark",
                                    data: [15, 20, 12, 60, 20, 15],
                                }],
                            }}
                        />
                    </Grid>
                </Grid>
            </SoftBox>
        </DashboardLayout>
    )
}

export default Sales