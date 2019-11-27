import { api , catchHandler } from "../../../helpers/axios"
import config from "../../../config";

export function fetchData() {
    return api()
        .get(config.routes.alldata)
        .catch(catchHandler);
}