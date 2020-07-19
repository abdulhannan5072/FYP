import React, { Component } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { fetchBuilds } from "../../../store/actions";
import { withSnackbar } from "notistack";
import Aux from "../../../hoc/_Aux";
import { Form, Field } from "formik";
import { Col, Row } from "react-bootstrap";
import { AntInput, AntSelect } from "../../../shared/components";
import { Button, Card } from "antd";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { QuillEditorFormik } from "../../../shared/components";
import { faultTypes } from "../../../shared/constants/Types";

const validationSchema = Yup.object().shape({
  selectBuild: Yup.string().required("Required"),
  selectModule: Yup.string().required("Required"),
  faultType: Yup.string().required("Required"),
  fault: Yup.string().required("Required"),
});

class Edit extends Component {
  state = {
    loading: false,
    data: {
      selectBuild: "",
      selectModule: "",
      faultType: "",
      fault: "",
      description: "",
    },
    build: [],
    module: [],
    selectedFile: null,
    selectedFileList: [],
  };

  componentDidMount() {
    // this.props.getBuilds(this.props.match.params.Pid);
    // this.setState({ build: this.props.build });
    // console.log(this.props.build)
    this.fetch();
    this.getBuild();
    this.getModule();
  }
  async fetch() {
    this.setState({ loading: true });
    const id = this.props.match.params.id;
    try {
      const response = await axios.get("/api/correctiveMaintenance/" + id);
      this.setState({
        loading: false,
        data: await response.data,
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }
  getBuild = async () => {
    try {
      const res = await axios.get(
        "/api/getBuild/" + this.props.match.params.Pid
      );
      if (res.data) {
        let buildFromApi = res.data.map((key) => {
          return { label: key.build, value: key._id };
        });
        this.setState({
          build: [{ label: "Select build", value: "" }].concat(buildFromApi),
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  getModule = async () => {
    try {
      const res = await axios.get(
        "/api/getModule/" + this.props.match.params.Pid
      );
      if (res.data) {
        let moduleFromApi = res.data.map((key) => {
          return { label: key.module, value: key._id };
        });
        this.setState({
          module: [{ label: "Select Module", value: "" }].concat(moduleFromApi),
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  onSubmit = (values, { setSubmitting }) => {
    this.setState = {
      loading: true,
    };
    const data = {
      ...values,
      // user: this.props.currentUser,
      // project: this.props.match.params.Pid,
    };
    const id = this.props.match.params.id;
    axios.post("/api/correctivemaintenance/" + id, data).then((res) => {
      this.setState = {
        loading: false,
      };
      if (res.status === 200) {
        this.props.enqueueSnackbar("Updated sucessfully", {
          variant: "success",
        });
        this.props.history.push(
          "/" + this.props.match.params.Pid + "/changePhase/faultRepairs"
        );
      }
    });
  };

  render() {
    return (
      <Aux>
        <div className="page">
          <Card title="Corrective Maintenance" bordered={false}>
            <Formik
              enableReinitialize={true}
              initialValues={{
                selectBuild: this.state.data.build,
                selectModule: this.state.data.module,
                faultType: this.state.data.faultType,
                fault: this.state.data.fault,
                description: this.state.data.description,
              }}
              validationSchema={validationSchema}
              onSubmit={this.onSubmit}
            >
              {(props) => (
                <Form>
                  <Row className="mt-4">
                    <Col sm="6" md="4">
                      <div>
                        <Field
                          component={AntSelect}
                          name="selectBuild"
                          options={this.state.build}
                          as="select"
                          label="Select Build"
                          hasFeedback
                        />
                      </div>
                    </Col>
                    <Col sm="6" md="4">
                      <div className="">
                        <Field
                          component={AntSelect}
                          name="selectModule"
                          options={this.state.module}
                          label="Select Module"
                          hasFeedback
                        />
                      </div>
                    </Col>
                    <Col sm="6" md="4">
                      <div className="">
                        <Field
                          component={AntSelect}
                          name="faultType"
                          options={faultTypes}
                          label="Type of Fault"
                          hasFeedback
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="mt-2">
                        <Field
                          component={AntInput}
                          type="input"
                          label="Fault"
                          name="fault"
                          onChange={props.handleChange}
                          hasFeedback
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="mt-2">
                        <QuillEditorFormik
                          label="Detail Description"
                          name="description"
                        />
                      </div>
                    </Col>
                  </Row>
                  <div className="mt-5 flex-row-reverse d-flex">
                    <Button
                      loading={this.props.loading}
                      type="primary"
                      htmlType="submit"
                    >
                      Save
                    </Button>
                    <Link
                      to={
                        "/" +
                        this.props.match.params.Pid +
                        "/changePhase/faultRepairs"
                      }
                    >
                      <Button className="mr-2">Cancel</Button>
                    </Link>
                  </div>
                </Form>
              )}
            </Formik>
          </Card>
        </div>
      </Aux>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    currentUser: state.auth.user.userId,
    build: state.project,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getBuilds: (Pid) => dispatch(fetchBuilds(Pid)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(withSnackbar(Edit));
