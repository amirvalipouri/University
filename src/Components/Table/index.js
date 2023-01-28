import BTable from "react-bootstrap/Table";
import "./index.scss";
export default function Table({
  striped = false,
  bordered = false,
  hover = true,
  className = "",
  children,
}) {
  return (
    <div className="Table w-100 overflow-auto white-space-nowrap my-2 shadow-sm">
      <BTable
        striped={striped}
        bordered={bordered}
        hover={hover}
        className={`${className}`}
      >
        {children}
      </BTable>
    </div>
  );
}