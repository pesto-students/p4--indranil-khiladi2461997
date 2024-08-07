import React from "react";
import "../css/Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div>Shortly</div>
      <div>
        <table>
          <tr>
            <th>Features</th>
            <th>Resources</th>
            <th>Company</th>
          </tr>
          <tr>
            <td>Link Shopping</td>
            <td>Branded Links</td>
            <td>Analytics</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
          </tr>
          <tr>
            <td>Ernst Handel</td>
            <td>Roland Mendel</td>
            <td>Austria</td>
          </tr>
          <tr>
            <td>Island Trading</td>
            <td>Helen Bennett</td>
            <td>UK</td>
          </tr>
        </table>
      </div>
      <div></div>
    </div>
  );
}
