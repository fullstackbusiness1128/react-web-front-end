import DashboardLayout from "opeta/LayoutContainers/DashboardLayout";
import DashboardNavbar from "opeta/Navbars/DashboardNavbar"
import SoftBox from "components/SoftBox";
import Grid from "@mui/material/Grid";
import DefaultStatisticsCard from "opeta/Cards/StatisticsCards/DefaultStatisticsCard";
import Select from "react-select";
import {useState} from "react";
import SoftDatePicker from "components/SoftDatePicker";

function MainKpis() {
    const [selected2EqualPeriod, setSelected2EqualPeriod] = useState(false);
    const handleChange = (e) => {
        // add your code here
        if (e.value === "two-equal-period"){
               setSelected2EqualPeriod(true);
        }else {
            setSelected2EqualPeriod(false);
        }
    }
    return(
        <DashboardLayout>
            <DashboardNavbar/>
            <Grid container={true} justifyContent="flex-end" spacing={2}>
                {selected2EqualPeriod &&
                    <>
                        <Grid item md={2} xs={5}>
                            <SoftDatePicker input={{ placeholder: "Select a date" }} />
                        </Grid>
                        <Grid item>-</Grid>
                        <Grid item md={2} xs={5}>
                            <SoftDatePicker input={{ placeholder: "Select a date" }} />
                        </Grid>
                    </>
                }
                <Grid item md={4} xs={12}>
                    <Select
                        placeholder="Filter"
                        options={[
                            {  value: "today-vs-yesterday", label: "Today-vs-Yesterday" },
                            {  value: "thisweek-vs-lastweek", label: "This week-vs-Last week" },
                            {  value: "thismonth-vs-lastmonth", label: "This month-vs-Last month" },
                            {  value: "two-equal-period", label: "Two equal periods" },
                        ]}
                        onChange={(e) => handleChange(e)}
                    />
                </Grid>
            </Grid>

            <SoftBox py={3}>
                    <Grid container spacing={1}>
                            <Grid item xs={12} md={4} sm={4} lg={4}>
                                <DefaultStatisticsCard
                                    title="sales"
                                    count="$230,220"
                                    percentage={{
                                        color: "info",
                                        value: "+25%",
                                        label: "since last month",
                                    }}
                                />
                            </Grid>

                            <Grid item xs={12} md={4} sm={4} lg={4}>
                                <DefaultStatisticsCard
                                    title="Orders"
                                    count="$20,220"
                                    percentage={{
                                        color: "primary",
                                        value: "-5%",
                                        label: "since last month",
                                    }}
                                />
                            </Grid>

                            <Grid item xs={12} md={4} sm={4} lg={4}>
                                <DefaultStatisticsCard
                                    title="Average Order Value"
                                    count="$120,220"
                                    percentage={{
                                        color: "warning",
                                        value: "0%",
                                        label: "since last month",
                                    }}
                                />
                            </Grid>

                            <Grid item xs={12} md={6} sm={6} lg={6}>
                                <DefaultStatisticsCard
                                    title="Gross Profit"
                                    count="89%"
                                    percentage={{
                                        color: "info",
                                        value: "+45%",
                                        label: "since last month",
                                    }}
                                />
                            </Grid>

                            <Grid item xs={12} md={6} sm={6} lg={6}>
                                <DefaultStatisticsCard
                                    title="Net Profit"
                                    count="97%"
                                    percentage={{
                                        color: "info",
                                        value: "+55%",
                                        label: "since last month",
                                    }}
                                />
                            </Grid>
                        </Grid>
                </SoftBox>
        </DashboardLayout>
    )
}
export default MainKpis