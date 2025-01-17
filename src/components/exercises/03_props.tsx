import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

interface Module {name: string, noLectures: number, noPracticals: number};
interface CourseModulesProps { 
  title: string;
  modules: Module[];
}

const Demo: React.FC<CourseModulesProps> = ({title, modules}) => {
  return (
    <table className="table table-bordered">
    <thead>
      <tr>
        <th>Name</th>
        <th>No lectures</th>
        <th>No practicals</th>
      </tr>
    </thead>
    <tbody >
      <tr>
        <td>{modules[0].name}</td>
        <td>{modules[0].noLectures}</td>
        <td>{modules[0].noPracticals}</td>
      </tr>
      <tr>
        <td>{modules[1].name}</td>
        <td>{modules[1].noLectures}</td>
        <td>{modules[1].noPracticals}</td>
      </tr>
    </tbody >
  </table>
  );
};

export default Demo;
