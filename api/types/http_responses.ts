import { HTTPCode } from "../constants/http_codes"

export interface HTTPResponse {
    code: HTTPCode
    result: unknown
}