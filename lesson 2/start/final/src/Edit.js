import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Edit = (props) => {
  const modifiedFunc = () => props.btnClick(props.name, false);
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
          {props.userName}
        </Typography>
        <Typography variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
          {props.modifyResponse}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={modifiedFunc}>
          Save
        </Button>
      </CardActions>
    </Card>
  );
};

export default Edit;
