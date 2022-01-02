import { Col, Row } from "antd";
import CompanyInfo from "./components/CompanyInfo";
import LoanMetrics from "./components/LoanMetrics";
import NavBar from "./components/NavBar";
import './styles.css';

function App() {
  return (
    <Row style={{ padding: "1rem" }}>
      <Col span={24}>
        <NavBar />
        <CompanyInfo />
        <LoanMetrics />
      </Col>
    </Row>
  );
}

export default App;
