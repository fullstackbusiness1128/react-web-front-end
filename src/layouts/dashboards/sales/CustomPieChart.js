import Card from "@mui/material/Card";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import Grid from "@mui/material/Grid";
import PieChart from "opeta/Charts/PieChart";
import SoftBadgeDot from "components/SoftBadgeDot";

function CustomPieChart(props) {
    const {pieData} = props;
    const dispVal = pieData.labels.map((item, i) => (
        <SoftBox mb={0.5} key={i}>
            <SoftBadgeDot color={pieData.datasets.backgroundColors[i]} size="md" badgeContent={item + " (" + pieData.datasets.data[i] + ")"} />
        </SoftBox>
    ));

    return (
        <Card sx={{ overflow: "visible" }}>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
                <SoftTypography variant="h6">Custom PieChart</SoftTypography>
            </SoftBox>

            <SoftBox p={2} mt={3}>
                <Grid container alignItems="center">

                    <Grid item xs={7}>
                        <PieChart chart={pieData} />
                    </Grid>

                    <Grid item xs={5}>
                        <SoftBox px={1}>
                            {dispVal}
                        </SoftBox>
                    </Grid>
                </Grid>
            </SoftBox>
            <SoftBox
                pt={4}
                pb={2}
                px={2}
                display="flex"
                flexDirection={{ xs: "column", sm: "row" }}
                mt="auto"
            >
            </SoftBox>
        </Card>
    );
}

export default CustomPieChart;