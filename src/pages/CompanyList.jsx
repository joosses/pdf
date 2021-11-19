import React from "react";
import "./CompanyList.css";

import { Link } from "react-router-dom";
import dataJson from "../resources/data.json";
import { sanitize } from "string-sanitizer";
import replaceSpecialCharacters from "replace-special-characters";

const CompanyList = () => {
  const sanitizeName = (name) => {
    name = replaceSpecialCharacters(name);
    name = sanitize.addDash(name);
    name = name.replace(".", "");
    name = name.toLowerCase();
    return name;
  };

  return (
    <div>
      <div className="company-title">
        <h1>Lista de compañías</h1>
      </div>

      <table className="company-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Web</th>
          </tr>
        </thead>
        <tbody>
            {dataJson.map((data) => (
              <tr key={data.id}>
                <td> {data.id} </td>
                <td> {data.Name} </td>
                <td>
                  <Link to={`/${sanitizeName(data.Name)}`} target="_blank">
                    Ver
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyList;
