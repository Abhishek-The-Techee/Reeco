import Navbar from "../navbar";
import Header from "../OrderHeader";
import OrderStatusTable from "../OrderStatusTable";
import { AppContainer } from "./style";

const Reeco = () => (
  <AppContainer>
    <Navbar />
    <Header />
    <OrderStatusTable />
  </AppContainer>
);
export default Reeco;
