import React from "react";
import MUIDataTable from "mui-datatables";
import StudentDetailsDialog from "./StudentDetailsDialog";

class StudentTable extends React.Component {
  state = {
    data: [],
    open: false,
    gender: "",
    fname: "",
    city: "",
    columns: [
      {
        name: "gender"
      },
      {
        name: "first"
      },
      {
        name: "city"
      }
    ]
  };

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=10&nat=us")
      .then(Response => Response.json())
      .then(findresponse => {
        //console.log(findresponse.results.length);
        var data = [];
        if (findresponse.results.length > 0) {
          data = findresponse.results.map((value, index) => {
            return [
              ...data,
              value.gender,
              value.name.first,
              value.location.city
            ];
          });
        }

        console.log(data);

        this.setState({
          data: data
        });
        console.log(this.state.data);
      });
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = () => {
    console.log("gender", this.state.gender);
    console.log("First name", this.state.fname);
    console.log("city", this.state.city);
    //here you can access all these edited values and send it to backend to store them
  };

  openDialog = rowIndex => {
    console.log("Inside OpenDialog");
    this.handleClickOpen();
    this.state.data.forEach((row, index) => {
      console.log(row);
      if (rowIndex === index) {
        this.setState({
          gender: row[0],
          fname: row[1],
          city: row[2]
        });
      }
    });
  };

  render() {
    const options = {
      filterType: "dropdown",
      responsive: "scroll",
      sort: "true",
      rowsPerPage: 5,
      onRowClick: (rowData, rowMeta) => {
        console.log(rowMeta);
        this.openDialog(rowMeta.rowIndex);
      }
    };

    return (
      <React.Fragment>
        <MUIDataTable
          title={"Employee list"}
          columns={this.state.columns}
          data={this.state.data}
          options={options}
        />
        <StudentDetailsDialog
          open={this.state.open}
          onClose={this.handleClose}
          gender={this.state.gender}
          fname={this.state.fname}
          city={this.state.city}
          handleChange={this.handleChange}
        />
      </React.Fragment>
    );
  }
}
export default StudentTable;
