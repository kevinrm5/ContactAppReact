import { db } from "../backend/app_backend";
import jQuery from "jquery";
import Swal from "sweetalert2";
import navigate from "../inc/scripts/utilities";

export const restoreFactorySettings = () => {
	db.destroy();
	navigate("/");
};


