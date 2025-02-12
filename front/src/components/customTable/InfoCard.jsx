import { Card, CardContent, Typography, Box } from "@mui/material";

function InfoCard({ title, value, icon, color }) {
  return (
    <Card sx={{ minWidth: 200, bgcolor: color, color: color=='#fff'?'#000':'#fff', borderRadius: 2 }}>
      <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Box> <img src={icon} alt="" width={'32px'}/></Box>
        <Box>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="h4">{value}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default InfoCard;
