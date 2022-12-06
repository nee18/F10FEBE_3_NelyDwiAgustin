import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./styles/main.css";
import main from "./script/view/main.js";

import $ from "jquery";
import moment from "moment";

const displayTime = () => {
  moment.locale("id");

  $(".time").text(moment().format("LTS"));
  $(".date").text(moment().format("LL"));
};

const updateTime = () => {
  displayTime();
  setTimeout(updateTime, 1000);
};

updateTime();
main();