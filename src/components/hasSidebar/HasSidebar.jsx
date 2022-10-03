import Grid from "@mui/material/Unstable_Grid2";

function HasSidebar({ children, sidebarComponent, order = 2 }) {
    return (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid sx={{ order: 2 }} xs={12} md={9}>
                {children}
            </Grid>

            <Grid sx={{ order: order }} xs={12} md={3}>
                {sidebarComponent}
            </Grid>
        </Grid>
    )
}

export default HasSidebar