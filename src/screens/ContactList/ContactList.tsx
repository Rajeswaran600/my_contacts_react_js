import React, { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "../ContactList/ContactList.css";
import { Link, useNavigate } from "react-router-dom";

function ContactList() {
  const navigation = useNavigate();
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    //Get the saved data from local storage
    const items = JSON.parse(localStorage.getItem("data"));
    if (items) {
      setData(items);
    }
  }, []);

  const TrashFunc = async (id: any) => {
    //Delete the specific data from the local storage 
    const confirmed = window.confirm(
      "Are you sure you want to delete this data?"
    );
    if (confirmed) {
      if (data) {
        const findIndex = data?.findIndex((item: any) => {
          return item.id == id;
        });
        const filterData = data.splice(findIndex, 1);

        setData(data);
        localStorage.setItem("data", JSON.stringify(data));
        window.location.reload();
      }
    }
  };

  const EditFunc = (id: any) => {
    //Edit the data
    const confirmed = window.confirm(
      "Are you sure you want to edit this data?"
    );
    if (confirmed) {
      if (data) {
        navigation("/AddContact", { state: { id: id } });
        // history.push(`/details?id=${id}`);
        // navigation("/AddContact", { id: id });
        // <Link to={`/AddContact/${id}`}>View Details</Link>;
      }
    }
  };

  const columns = [
    {
      dataField: "id",
      text: "Id",
    },
    {
      dataField: "firstName",
      text: "First Name",
      sort: true,
    },
    {
      dataField: "lastName",
      text: "last Name",
      sort: true,
    },
    {
      dataField: "email",
      text: "Email",
      sort: true,
    },
    {
      dataField: "phoneNumber",
      text: "Mobile",
      sort: true,
    },
    {
      dataField: "address",
      text: "Address",
      sort: true,
    },
    {
      dataField: "city",
      text: "City",
      sort: true,
    },
    {
      dataField: "state",
      text: "State",
      sort: true,
    },
    {
      dataField: "country",
      text: "Country",
      sort: true,
    },
    {
      dataField: "postalCode",
      text: "Postal Code",
      sort: true,
    },
    {
      dataField: "edit",
      text: "Actions",
      formatter: (cell, row) => {
        return (
          <>
            <FontAwesomeIcon
              onClick={() => EditFunc(row.id)}
              icon={faEdit}
              style={{ paddingLeft: 10 }}
              color="red"
            />
            <FontAwesomeIcon
              onClick={() => TrashFunc(row.id)}
              icon={faTrashAlt}
              style={{ paddingLeft: 10 }}
              color="red"
            />
          </>
        );
      },
    },
  ];

  return (
    <>
      {data && data?.length > 0 ? (
        <BootstrapTable
          keyField="id"
          data={data}
          columns={columns}
          striped
          hover
          condensed
          pagination={paginationFactory()}
        />
      ) : (
        <h3>No data Found</h3>
      )}
    </>
  );
}

export default ContactList;
