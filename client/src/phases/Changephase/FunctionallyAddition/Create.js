import React, { Component } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
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
import { functionalityType } from "../../../shared/constants/Types";

const initialValues = {
  name: "",
  functionalityType: "",
  description: "",
  requirements: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Required")
    .min(2, "Too Short "),
  functionalityType: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  requirements: Yup.string().required("Required"),
});

class Create extends Component {
  state = {
    loading: false,
    build: [],
    module: [],
    selectedFile: null,
    selectedFileList: [],
  };

  onSubmit = (values, { setSubmitting }) => {
    this.setState = {
      loading: true,
    };
    const data = {
      ...values,
      user: this.props.currentUser,
      project: this.props.match.params.Pid,
    };
    axios.post("/api/functionatilityAddition/create", data).then((res) => {
      this.setState = {
        loading: false,
      };
      if (res.status === 200) {
        this.props.enqueueSnackbar("Created Sucessfully", {
          variant: "success",
        });
        this.props.history.push(
          "/" +
            this.props.match.params.Pid +
            "/changePhase/functionatilityAddition"
        );
      }
    });
  };

  render() {
    return (
      <Aux>
        <div className="page">
          <Card title="Perfective Maintenance" bordered={false}>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={this.onSubmit}
            >
              {(props) => (
                <Form>
                  <Row className="mt-2">
                    <Col sm="6" md="8">
                      <div>
                        <Field
                          component={AntInput}
                          type="input"
                          label="Name"
                          name="name"
                          onChange={props.handleChange}
                          hasFeedback
                        />
                      </div>
                    </Col>
                    <Col sm="6" md="4">
                      <div className="">
                        <Field
                          component={AntSelect}
                          name="functionalityType"
                          options={functionalityType}
                          label="Functionality Type"
                          hasFeedback
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="mt-3">
                        <QuillEditorFormik
                          label="Requirements"
                          name="requirements"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="mt-4">
                        <QuillEditorFormik
                          label="Detail Description"
                          name="description"
                        />
                      </div>
                    </Col>
                  </Row>
                  <div className="mt-5 flex-row-reverse d-flex">
                    <Button
                      loading={props.loading}
                      type="primary"
                      htmlType="submit"
                    >
                      Save
                    </Button>
                    <Link
                      to={
                        "/" +
                        this.props.match.params.Pid +
                        "/changePhase/functionatilityAddition"
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

export default connect(mapStateToProps)(withSnackbar(Create));
