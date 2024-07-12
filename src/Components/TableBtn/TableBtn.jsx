import React from "react";

import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { Button } from "vodo-react-components";

TableBtn.propTypes = {
  role: PropTypes.string,
  children: PropTypes.node,
  href: PropTypes.string,
  className: PropTypes.string,
};

function TableBtn({ children, className = "capitalize", href }) {
  return (
    <Button>
      <Link to={href} className={className}>
        {children}
      </Link>
    </Button>
  );
}

export default TableBtn;
