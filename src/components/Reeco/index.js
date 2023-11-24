import Navbar from "../navbar";
import Header from "../OrderHeader";
import OrderStatusTable from "../OrderStatusTable";
import OrderTable from "../OrderTable";
import { AppContainer } from "./style";

const Reeco = () => (
  <AppContainer>
    <Navbar />
    <Header />
    <OrderStatusTable />
    <OrderTable />
  </AppContainer>
);
export default Reeco;
