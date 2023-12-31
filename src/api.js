const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  static token;

  static async request(endpoint, data = {}, method = "GET") {
    const url = new URL(`${BASE_URL}/${endpoint}`);
    const headers = {
      authorization: `Bearer ${JoblyApi.token}`,
      'content-type': 'application/json',
    };

    url.search = (method === "GET")
      ? new URLSearchParams(data).toString()
      : "";

    // set to undefined since the body property cannot exist on a GET method
    const body = (method !== "GET")
      ? JSON.stringify(data)
      : undefined;

    const resp = await fetch(url, { method, body, headers });

    //fetch API does not throw an error, have to dig into the resp for msgs
    if (!resp.ok) {
      console.error("API Error:", resp.statusText, resp.status);
      const { error } = await resp.json();
      throw Array.isArray(error) ? error : [error];
    }

    return await resp.json();
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    const res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Get list of companies */

  static async getCompanyList(searchTerm) {
    let res;
    searchTerm === undefined
      ? res = await this.request("companies/")
      : res = await this.request("companies/", { nameLike: searchTerm });

    return res.companies;
  }

  /** Get list of jobs */

  static async getJobList(searchTerm) {
    let res;
    searchTerm === undefined
      ? res = await this.request("jobs/")
      : res = await this.request("jobs/", { title: searchTerm });

    return res.jobs;
  }

  /** Get user info */

  static async getUser(username) {
    const res = await this.request(`users/${username}`);
    return res.user;
  }


  /** Update user data */
  static async editUser(username, userData) {
    const res = await this.request(`users/${username}`, userData, "PATCH");
    return res.user;
  }


  // Authentication Routes

  /** Get token from username and password */
  static async loginUser({ username, password }) {
    const res = await this.request("auth/token", { username, password }, "POST");
    return res.token;
  }

  /** Get token based when user registers */
  static async signUpUser({ username, password, firstName, lastName, email }) {
    const res = await this.request(
      "auth/register",
      { username, password, firstName, lastName, email },
      "POST");
    return res.token;
  }
}

export default JoblyApi;