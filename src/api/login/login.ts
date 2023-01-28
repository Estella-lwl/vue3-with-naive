import axios, { AxiosInstance } from "axios";
import { RequestConfig } from "./types";

// class有更强的封装性，
class Request {
  instance: AxiosInstance;
  interceptors?: any;

  constructor(config: RequestConfig) {
    this.instance = axios.create(config);

    this.interceptors = config.interceptors;
  }
}
