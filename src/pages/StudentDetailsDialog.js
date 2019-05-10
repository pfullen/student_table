import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Formik } from "formik";

class StudentDetailsDialog extends React.Component {
  constructor(props) {
    super(props);
    this.setState({});
  }
  handleClose = () => {
    this.props.onClose();
  };

  form = props => {
    const { handleChange, handleSubmit } = this.props;
    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <h1>Edit User</h1>
          <DialogContent>
            <DialogContentText id="alert-dialog-description" />
            <form onSubmit={handleSubmit}>
              <TextField
                type="text"
                margin="dense"
                id="firstname"
                label="Name"
                name="fname"
                onChange={handleChange}
                value={this.props.fname}
                {...props}
              />

              <br />
              <TextField
                type="text"
                margin="dense"
                id="gender"
                label="gender"
                name="gender"
                onChange={handleChange}
                value={this.props.gender}
                {...props}
              />

              <br />
              <TextField
                type="text"
                margin="dense"
                id="city"
                label="city"
                name="city"
                onChange={handleChange}
                value={this.props.city}
                {...props}
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              RESET
            </Button>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              SUBMIT
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  };
  render() {
    return (
      <div align="center">
        <Formik
          initialValues={{
            name: this.props.fname,
            gender: this.props.gender,
            city: this.props.city
          }}
          onSubmit={initialValues => console.log("values" + initialValues.name)}
          render={this.form}
        />
      </div>
    );
  }
}

export default StudentDetailsDialog;
