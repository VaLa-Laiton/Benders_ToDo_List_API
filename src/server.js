/**
 * server.js
 *
 * This file starts the Express.js server and listens on a specified port.
 *
 * It imports the Express application from app.js and starts the server.
 * The server listens on the port specified in the configuration file.
 */

import app from "./app.js";
import { PORT } from "./config/config.js";

// Start the server
const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}.`);
});

export default server;
