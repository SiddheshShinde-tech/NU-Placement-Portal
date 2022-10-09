import { useRef, useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Link, useHistory } from "react-router-dom";
import Skeleton from "./Skeleton";
// import PieChart from "./PieChart";
// import BarChart from "./BarChart";
import { Card, Avatar } from "antd";
import { Row, Col } from "antd";
import { Progress } from 'antd';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined
} from "@ant-design/icons";
import "../App.css"

//export default function Dashboard() {
//return <Skeleton />;

const Dashboard = () => {
  const [record, setRecord] = useState([]);

  const { Meta } = Card;

  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resposne) => resposne.json())
      .then((res) => setRecord(res));
  };

  useEffect(() => {
    getData();
  });

  return (
    <>
      <Skeleton />
      <div className="container" style={{ marginTop: "5.5rem" }}>
        <p class="lead d-none d-sm-block">
          <h1 class="mt-3 mb-3 text">CIC Dashboard</h1>
        </p>

        <div
          class="alert alert-warning fade collapse"
          role="alert"
          id="myAlert"
        >
          <button
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
            <span class="sr-only">Close</span>
          </button>
          {/* <strong>Data and Records</strong> Learn more about employee */}
        </div>
        <div class="row mb-3">
          <div class="col-xl-3 col-sm-6 py-2">
            <div class="card-class" >
              <div
                class="card-body card-style"
                style={{ border:"1px",borderStyle:"solid",borderColor:"black", color:"#81181d" }}
              >
                <div class="rotate">
                  <i class="fa fa-list fa-2x"></i>
                </div>
                <br></br>
                <h6 class="text" style={{ color:"#81181d" }}><b>JDs PUBLISHED</b></h6>
                <h1 class="display-6" style={{ color:"#81181d" }}><b>94</b></h1>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-sm-6 py-2">
            <div class="card-class" >
              <div
                class="card-body card-style"
                style={{ border:"1px",borderStyle:"solid",borderColor:"black", color:"#81181d" }}
              >
                <div class="rotate">
                  <i class="fa fa-user fa-2x"></i>
                </div>
                <br></br>
                <h6 class="text-uppercase" style={{ color:"#81181d" }}><b>Students Selected</b></h6>
                <h1 class="display-6" style={{ color:"#81181d" }}><b>134</b></h1>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-sm-6 py-2">
            <div class="card-class" >
              <div
                class="card-body card-style"
                style={{ border:"1px",borderStyle:"solid",borderColor:"black", color:"#81181d" }}
              >
                <div class="rotate">
                  <i class="fa fa-pen fa-2x"></i>
                </div>
                <br></br>
                <h6 class="text" style={{ color:"#81181d" }}><b>IP OFFERED</b> </h6>
                <h1 class="display-6" style={{ color:"#81181d" }}><b>114</b></h1>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-sm-6 py-2">
            <div class="card-class" >
              <div
                class="card-body card-style"
                style={{ border:"1px",borderStyle:"solid",borderColor:"black", color:"#81181d" }}
              >
                <div class="rotate">
                  <i class="fa fa-share fa-2x"></i>
                </div>
                <br></br>
                <h6 class="text-uppercase" style={{ color:"#81181d" }}><b>PPO Offered</b></h6>
                <h1 class="display-6" style={{ color:"#81181d" }}><b>66</b></h1>
              </div>
            </div>
            <br />
          </div>
          
          <br />
          <br />
          <hr />

          {/* <div class="row mb-3">
          <div class="col-xl-3 col-sm-6 py-2">
            <div class="card-class" >
              <div
                class="card-body card-style"
                style={{ border:"1px",borderStyle:"solid",borderColor:"black", color:"#81181d" }}
              >
                <div class="rotate">
                  <i class="fa fa-user fa-2x"></i>
                </div>
                <br></br>
                <h6 class="text-uppercase">Students Selected</h6>
                <h1 class="display-6">134</h1>
              </div>
            </div>
          </div>
          </div> */}
          
          {/* <div class="col-xl-3">
            <div class="card text-white bg-danger h-100">
              <div class="card-class">
                <div class="rotate">
                  <i class="fa fa-list fa-3x"></i>
                </div>
                <br></br>
                <h6 class="text-uppercase">JDs Published</h6>
                <h1 class="display-6">87</h1>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 py-2">
            <div class="card text-white bg-info h-100">
              <div class="card-body bg-info">
                <div class="rotate">
                  <i class="fa fa-pen fa-3x"></i>
                </div>
                <br></br>
                <h6 class="text-uppercase">Offers Accepted</h6>
                <h1 class="display-6">125</h1>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 py-2">
            <div class="card text-white bg-warning h-100">
              <div class="card-body">
                <div class="rotate">
                  <i class="fa fa-share fa-3x"></i>
                </div>
                <br></br>
                <h6 class="text-uppercase">PPO</h6>
                <h1 class="display-6">36</h1>
              </div>
            </div>
          </div> */}
        </div>
        <Row align="center">
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 5, offset: 3 }}>
          <h4>Average Package</h4>
          <Progress type="circle" percent={32} format={percent => ` 5.5 LPA`} />
          </Col>

          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 5, offset: 3 }}>
          <h4>Highest Package</h4>
          <Progress type="circle" percent={90} format={percent => ` 22 LPA`} />
          </Col>

          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 5, offset: 3 }}>
          <h4>Students Placed</h4>
          <Progress type="circle" percent={100} format={() => '60'} />
          </Col>
        </Row>

        {/* <Progress type="dashboard" percent={75} />
        <h4>Average Package</h4>
        <Progress type="circle" percent={32} format={percent => ` 5.5 LPA`} />
        <h4>Highest Package</h4>
        <Progress type="circle" percent={50} format={percent => ` 22 LPA`} />
        {/* <Progress type="dashboard" percent={75} gapDegree={30} /> */}
        {/* <h4>Students Placed</h4>
         <Progress type="circle" percent={100} format={() => '60'} /> */}

        <hr />
        <h3 class="mt-3 mb-3 text" align="center" >
          Top recruiters
        </h3>
        {/* <div align="center">
          <div class="row" center>
            <table>
              <tr>
                <td align="center">
                  <PieChart />
                </td>
                <td align="center">
                  <BarChart />
                </td>
              </tr>
            </table>
          </div>
        </div> */}
        <div>
        <div>
        <marquee>
        <Row>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 4, offset: 1 }}>
            <Card style={{ width: 300, zIndex: "0" }}>
              <Meta
                avatar={<Avatar src="data:image/png;base64,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" />}
                title="IBM"
                description="Avg. Package 5LPA"
              />
            </Card>
          </Col>
          <Col xs={{ span: 11, offset: 1 }} lg={{ span: 4, offset: 1 }}>
            <Card style={{ width: 300, zIndex: "0" }}>
              <Meta
                avatar={<Avatar src="data:image/png;base64,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" />}
                title="EY"
                description="Avg. Package 5.2LPA"
              />
            </Card>
          </Col>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 4, offset: 1 }}>
            <Card style={{ width: 300, zIndex: "0" }}>
              <Meta
                avatar={<Avatar src="data:image/png;base64,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" />}
                title="Big Basket"
                description="Avg. Package 8LPA"
              />
            </Card>
          </Col>
          
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 4, offset: 1 }}>
            <Card style={{ width: 300, zIndex: "0" }}>
              <Meta
                avatar={<Avatar src="https://aniportalimages.s3.amazonaws.com/media/details/Thoucentric_Labs.jpg" />}
                title="Thoucentric"
                description="Avg. Package 6.5LPA"
              />
            </Card>
          </Col>

          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 4, offset: 1 }}>
            <Card style={{ width: 300, zIndex: "0" }}>
              <Meta
                avatar={<Avatar src="data:image/png;base64,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" />}
                title="Genpact"
                description="Avg. Package 8.2LPA"
              />
            </Card>
          </Col>

          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 4, offset: 1 }}>
            <Card style={{ width: 300, zIndex: "0" }}>
              <Meta
                avatar={<Avatar src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBCAMAAADQfiliAAAAk1BMVEUALFEAKlAAJU0AADwAE0QAIUsAJ04AGEYAI0wAHEgAAD4ACEAAADcAG0gAHkn2+PnU1dnv8fIAADNban/p6+0AD0P///+Ql6WiqLJYXHMAAC8nNli2u8N/hJSCi5qytL02RmMfLVLc3+PIy9FNUGoAAChMV3Cdnqp2eopXYngAACQiOVlmbIAsQF9DTGZmcoUAABpcT+izAAAC40lEQVR4nO3VW3ObOBiAYSRAiIORsEUAIyEiORzCqf//11XudrK7me5mnPSiF98zgy8AmxckC88DAAAAAAAAAAAAAAAAAAAAAADwB0Jf/H6a4bfP/xcnNHFnBeG7gO2LAVIM2IukuJGPApQxfAiD+kL/FdAK8qWn4PNiPKGTYA1Bp8jdHsVh6OEoxu46eRR7Hg5plCMPX4q1H8VyNSrwyClyh0OcRxi1DCN3ZkS82JWEH93ILwpqE4QXWzSU1lIl4dRMld/IepjoqZJVTuZplSr3TpV5xUm1q8Ku0VLL9UTVUMkmvhcESuotHTcUq/nj4Xxf0ImllKpoEqEnMZ6t4GplqmI6s/awMque7Cq6mAxM7n4ZH0LOWzEexZRwMaqn7ZnhoDbHWASyDnzWfKJAd6HI2W0yZdAzNyOS0nRJJnUwBK0S58pkfi1TL5+5MEd85ipo97KV+swrPxOXZxZuok/OvFtNOhj06KRwBYfdxTd20zLwXp5aWwebGEiptT+4S4qs4n50LyB5stdP6mq6POiMENJd85TeC/KGcW7ZmIhm1OWDAa6g8oWur+xWvxW0fxW0xXS9vRXgeQjRueavpktV0b9U/ywolmUhXqprPjw6CPeCq2VzxpqBPWeHSGwdRbY+J1yvhZ8pcf1ZEHai9TMpX4w6a/ua2b8LEur2uUkaDszEjwZ4Ca/STuQJaxJpZLFmto5xL6wVOubWGrFXPPkxCrEWlpvdl+YyC2mNSXkXl+KCDe+P+46FYKOjhwto05NloGRtUbCqPsLDTjzq/mhap62a8mHrG0x293BR0KgJUbSoIdjVGs9o7hFeF9p322lTEyaotCv9+JLvuQUNuVXkvpDQ+3JC3LYcZV8cIQqpO4x+7vyxNrmJjijxSIjdN+5rodtI6H7CnYrySfiPB/wKWrgx4ycm9Sfm4X8lRM/o8QFFbvR+U4D32TfuV9/TAAAAAAAAAAAAAAAAAAAAAIA/0ndUBkKWaGf8jAAAAABJRU5ErkJggg==" />}
                title="Morgan Stanley"
                description="Avg. Package 22LPA"
              />
            </Card>
          </Col>

          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 4, offset: 1 }}>
            <Card style={{ width: 300, zIndex: "0" }}>
              <Meta
                avatar={<Avatar src="data:image/png;base64,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" />}
                title="Airtel"
                description="Avg. Package 7.6LPA"
              />
            </Card>
          </Col>

          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 4, offset: 1 }}>
            <Card style={{ width: 300, zIndex: "0" }}>
              <Meta
                avatar={<Avatar src="data:image/png;base64,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" />}
                title="PwC"
                description="Avg. Package 5.6LPA"
              />
            </Card>
          </Col>

          
        </Row></marquee>

        {/* <Card style={{ width: 300, marginTop: 16 }}>
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title="IBM"
          description="54 placed"
        />
      </Card>
      <Card style={{ width: 300, marginTop: 16 }}>
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title="IBM"
          description="54 placed"
        />
      </Card> */}
        </div>
        

      {/* <Card
        style={{ width: 300, marginTop: 16 }}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />
        ]}
      >
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title="Card title"
          description="This is the description"
        />
      </Card> */}
      </div>
      </div>

      
    </>
  );
};

export default Dashboard;
